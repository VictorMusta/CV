import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";

export default function SystemStatus() {
  const { lang } = useLang();
  const [currentStatusIndex, setCurrentStatusIndex] = useState(0);

  // Status messages in all supported languages
  const statuses = useMemo(() => ({
    fr: [
      "Bannissement de vilains fraudeurs...",
      "Relecture d'une PR interminable...",
      "Déploiement d'un bug en production...",
      "Attente de refresh des tokens AWS...",
      "Discussion avec le canard en plastique...",
      "Optimisation de micro-services .NET...",
      "Nettoyage de dette technique...",
      "Tentative de sortie de Vim...",
    ],
    en: [
      "Banning nasty fraudsters...",
      "Reviewing a never-ending PR...",
      "Deploying a fresh bug to prod...",
      "Waiting for AWS tokens to refresh...",
      "Talking to the rubber duck...",
      "Optimizing .NET micro-services...",
      "Cleaning technical debt...",
      "Trying to exit Vim...",
    ],
    ja: [
      "不正なユーザーをBANしています...",
      "終わらないPRをレビュー中...",
      "本番環境にバグをデプロイ中...",
      "AWSトークンの更新を待機中...",
      "ラバーダックと相談中...",
      ".NETマイクロサービスを最適化中...",
      "技術的負債を解消中...",
      "Vimから抜け出そうとしています...",
    ],
    ko: [
      "부정 사용자 차단 중...",
      "끝없는 PR 리뷰 중...",
      "운영 환경에 버그 배포 중...",
      "AWS 토큰 갱신 대기 중...",
      "러버덕과 상담 중...",
      ".NET 마이크로서비스 최적화 중...",
      "기술 부채 해결 중...",
      "Vim에서 탈출 시도 중...",
    ]
  }), []);

  const currentLangStatuses = statuses[lang] || statuses.fr;

  useEffect(() => {
    const statusInterval = setInterval(() => {
      setCurrentStatusIndex((prev) => (prev + 1) % currentLangStatuses.length);
    }, 5000);

    return () => clearInterval(statusInterval);
  }, [currentLangStatuses.length]);

  return (
    <div className="fixed bottom-6 left-6 z-40 hidden md:block select-none pointer-events-none no-print">
      <div className="relative px-4 py-2 bg-card/40 backdrop-blur-md border-l-2 border-accent/50 shadow-xl">
        <div className="flex flex-col gap-0.5">
          {/* Header Label */}
          <div className="flex items-center gap-2 mb-1">
            <span className="w-1 h-1 rounded-full bg-accent animate-pulse"></span>
            <span className="text-[9px] font-mono font-bold text-accent uppercase tracking-[0.2em] opacity-70">
              Current Activity
            </span>
          </div>

          {/* Rotating Message */}
          <div className="h-5 overflow-hidden relative min-w-[200px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStatusIndex + lang}
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 5 }}
                transition={{ duration: 0.4 }}
                className="text-[11px] font-mono text-foreground/80 flex items-center gap-2 italic"
              >
                <span className="text-accent/50">{'>'}</span>
                <span className="truncate">{currentLangStatuses[currentStatusIndex]}</span>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
