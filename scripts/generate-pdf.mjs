/**
 * Build-time PDF export.
 *
 * Serves the built site from dist/ (honouring the /CV/ base path), opens
 * it in headless Chrome and prints the CV view to dist/Victor_Grabowski_CV.pdf.
 * The deployed site links to that static file instead of calling
 * window.print() in the visitor's browser, so the PDF never carries the
 * browser-injected header/footer (print date, tab title, URL, page number).
 *
 * Chrome resolution:
 *   - GitHub Actions runner: plain `npm install puppeteer` downloads a
 *     matching Chrome, nothing else to do.
 *   - Local Betclic workstation: the internal npm registry + the global
 *     `ignore-scripts=true` prevent Puppeteer's Chrome download, so set
 *     PUPPETEER_EXECUTABLE_PATH to the locally installed Chrome, e.g.
 *     PUPPETEER_EXECUTABLE_PATH="C:\Program Files\Google\Chrome\Application\chrome.exe"
 */
import http from "node:http";
import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const BASE_PATH = "/CV/"; // must match `base` in vite.config.js
const OUTPUT_NAME = "Victor_Grabowski_CV.pdf";
const PAGE_MARGIN = { top: "10mm", bottom: "10mm", left: "11mm", right: "11mm" };

const distDir = fileURLToPath(new URL("../dist", import.meta.url));

if (!existsSync(path.join(distDir, "index.html"))) {
  console.error("dist/index.html not found — run `npx vite build` first.");
  process.exit(1);
}

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

/* Minimal static server mirroring GitHub Pages: everything lives under
   the /CV/ base path, unknown paths fall back to index.html. */
const server = http.createServer(async (req, res) => {
  const urlPath = new URL(req.url, "http://localhost").pathname;
  if (!urlPath.startsWith(BASE_PATH)) {
    res.writeHead(404).end("outside base path");
    return;
  }
  let rel = urlPath.slice(BASE_PATH.length) || "index.html";
  let file = path.join(distDir, rel);
  if (!path.normalize(file).startsWith(path.normalize(distDir)) || !existsSync(file)) {
    file = path.join(distDir, "index.html");
  }
  try {
    const body = await readFile(file);
    res.writeHead(200, { "Content-Type": MIME[path.extname(file)] ?? "application/octet-stream" });
    res.end(body);
  } catch (e) {
    res.writeHead(500).end(String(e));
  }
});

await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
const { port } = server.address();
const pageUrl = `http://127.0.0.1:${port}${BASE_PATH}`;
console.log(`Serving dist/ at ${pageUrl}`);

const browser = await puppeteer.launch({
  executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || undefined,
  args: ["--no-sandbox", "--font-render-hinting=none"],
});

try {
  const page = await browser.newPage();
  await page.goto(pageUrl, { waitUntil: "networkidle0", timeout: 60_000 });

  /* The print stylesheet is designed around the accessibility look
     (data-a11y="on"), and body.pdf-export tells the CSS that real page
     margins come from page.pdf() below. */
  await page.evaluate(() => {
    document.documentElement.setAttribute("data-a11y", "on");
    document.body.classList.add("pdf-export");
  });

  /* Web fonts + the framer-motion entrance animations must settle before
     printing, otherwise text measures wrong or elements are mid-fade. */
  await page.evaluate(() => document.fonts.ready);
  await new Promise((r) => setTimeout(r, 600));

  /* index.css sets `@page { margin: 0 }` so the browser-print fallback
     can't draw its header/footer. CSS @page margins take precedence over
     the page.pdf() margin option, so re-declare the real margins here —
     this stylesheet loads last and wins the cascade. */
  await page.addStyleTag({
    content: `@page { margin: ${PAGE_MARGIN.top} ${PAGE_MARGIN.right} ${PAGE_MARGIN.bottom} ${PAGE_MARGIN.left}; }`,
  });

  const outPath = path.join(distDir, OUTPUT_NAME);
  await page.pdf({
    path: outPath,
    format: "A4",
    printBackground: true,
    displayHeaderFooter: false,
    margin: PAGE_MARGIN,
  });

  const pdf = await readFile(outPath);
  const count = countPdfPages(pdf);
  console.log(`Wrote ${outPath} (${(pdf.length / 1024).toFixed(0)} kB, ${count ?? "?"} page(s))`);
  if (count != null && count > 2) {
    console.error(`Expected the CV to fit on 2 pages, got ${count}.`);
    process.exit(1);
  }
} finally {
  await browser.close();
  server.close();
}

/* Chrome writes an uncompressed page tree, so the /Type /Pages object's
   /Count is readable with a plain scan. Returns null if not found. */
function countPdfPages(buf) {
  const text = buf.toString("latin1");
  const counts = [...text.matchAll(/\/Type\s*\/Pages[^>]*?\/Count\s+(\d+)/g)].map((m) => Number(m[1]));
  if (counts.length) return Math.max(...counts);
  const pages = text.match(/\/Type\s*\/Page[^s]/g);
  return pages ? pages.length : null;
}
