import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { execFile } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const repoRoot = fileURLToPath(new URL('.', import.meta.url))

const run = (args) =>
  new Promise((resolve, reject) => {
    execFile('git', args, { cwd: repoRoot }, (err, stdout, stderr) => {
      if (err) reject(new Error(stderr || err.message))
      else resolve(stdout.trim())
    })
  })

const json = (res, code, body) => {
  res.statusCode = code
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(body))
}

/**
 * DEV-ONLY local branch switcher.
 * Exposes /__da/branches and /__da/checkout?branch=… so the in-app
 * "Design System" menu can `git checkout` between the design-direction
 * branches while comparing them. Never registered in build/preview
 * (apply: 'serve'), so it ships nowhere.
 */
function daBranchSwitcher() {
  return {
    name: 'da-branch-switcher',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (!req.url || !req.url.startsWith('/__da/')) return next()
        const url = new URL(req.url, 'http://localhost')

        try {
          const current = await run(['branch', '--show-current'])
          const branches = (await run(['branch', '--format=%(refname:short)']))
            .split('\n')
            .map((b) => b.trim())
            .filter(Boolean)

          if (url.pathname === '/__da/branches') {
            return json(res, 200, { current, branches })
          }

          if (url.pathname === '/__da/checkout') {
            const branch = url.searchParams.get('branch')
            // Only allow switching to a real local branch — no injection,
            // and execFile never spawns a shell.
            if (!branch || !branches.includes(branch)) {
              return json(res, 400, { ok: false, error: `unknown branch: ${branch}` })
            }
            if (branch === current) {
              return json(res, 200, { ok: true, branch, already: true })
            }
            await run(['checkout', branch])
            return json(res, 200, { ok: true, branch })
          }

          return next()
        } catch (e) {
          return json(res, 500, { ok: false, error: String(e.message || e) })
        }
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), daBranchSwitcher()],
  base: '/CV/',
})
