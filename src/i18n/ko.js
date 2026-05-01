const ko = {
  /* ── UI ── */
  tagline: ".NET + JS 풀스택 개발자",
  trackCareer: "경력",
  trackEducation: "학력",
  trackProjects: "프로젝트",
  viewOnGithub: "GitHub에서 보기",
  liveDemo: "라이브 데모",
  viewBenchmark: "벤치마크",
  keyFeatures: "주요 기능",
  addImage: "이미지 추가",
  footer: (year) => `© ${year} Victor Grabowski — React 및 Framer Motion으로 제작`,

  /* ── Projets ── */
  moyenax: {
    role: "풀스택 개발자 / 테크니컬 리드",
    description: "Dofus 세계관에서 영감을 받은 브라우저 기반 턴제 전략 게임(1v1). 고성능 등각 투영 3D 엔진과 견고한 실시간 아키텍처를 기반으로 합니다.",
    highlights: [
      "다이내믹 시드 시스템: 각 게임이 고유하며 전략적 선택(자원, 지형)을 좌우합니다.",
      "완전한 게임플레이 사이클: 탐험(파밍), 경제(제작/상점), 전술적 PvP 전투.",
      "NestJS와 React를 사용한 NX 모노레포 기반 마이크로서비스 아키텍처.",
      "Server-Sent Events(SSE)를 통한 최적화된 실시간 통신 및 Redis를 통한 전투 상태 동기화.",
      "대장간 및 제작 시스템: 재료(철, 가죽, 크리스탈) 관리와 전략적 장비 제작을 위한 세련된 인터페이스.",
      "React Three Fiber를 통한 몰입감 있는 등각 투영 3D 인터페이스."
    ]
  },
  tamagotchi: {
    role: "2D 오토배틀러",
    description: "ElectronJS로 제작된 독특한 오토배틀러 게임. 감자 전사를 생성 및 수집하고, 전략적으로 레벨업시키며 절차적으로 생성된 적들과 토너먼트에서 대결합니다.",
    highlights: [
      "오토배틀러 시스템: AI가 관리하는 전투, 능력치의 전략적 관리에 집중합니다.",
      "커스터마이징 및 진행: 저장용 PC, 고유 특성, 장비 및 업그레이드 트리.",
      "토너먼트 모드: 감자 빌드의 생존력을 테스트하기 위한 일련의 결투.",
      "유머와 위트: 가벼운 톤으로 RPG 메커니즘을 탐구하는 즐거운 프로젝트."
    ]
  },
  aicontentremover: {
    role: "위장 확장 프로그램 & Vibe Coding",
    description: "SNS(Twitter/X)에서 AI 생성 콘텐츠와 봇의 확산에 대한 불만에서 시작된 프로젝트. 커뮤니티가 의심스러운 게시물에 투표하여 숨김으로써 피드의 품질을 높입니다.",
    highlights: [
      "Vibe Coding: 초고속 협업 개발에 대한 탐색적 프로젝트.",
      "DOM 클리닝: 신고된 계정의 HTML 요소를 직접 삭제하여 가시성을 차단합니다.",
      "사회적 합의: 게시물이 AI에 의한 것인지 공동으로 검증하기 위한 투표 시스템.",
      "윤리적 동기: 생성 AI에 의한 도용으로부터 원작 아티스트를 보호합니다."
    ]
  },
  imapunsub: {
    role: "Newsletter Killer (Green IT)",
    description: "디지털 오염을 줄이려는(Green IT) 의지에서 태어난 자동 구독 취소 도구. 읽지 않은 뉴스레터로 가득 찬 메일함은 방대한 에너지를 소비합니다. 이 스크립트는 클릭 한 번으로 구독 취소 프로세스를 자동화합니다.",
    highlights: [
      "IMAP 자동화: Python을 통한 뉴스레터의 초고속 스캔 및 파싱.",
      "원클릭 구독 취소: 법률을 준수하는 구독 취소 링크의 자동 감지 및 추적.",
      "디지털 에코: 불필요한 이메일 데이터 저장과 관련된 탄소 발자국을 획기적으로 줄입니다.",
      "보안 감사: 가짜 구독 취소 링크(피싱/멀웨어)와 관련된 위험 분석."
    ]
  },
  knightjumper: {
    role: "2D 플랫포머",
    description: "Godot 4로 제작된 다이내믹한 플랫폼 게임. 점프 메커니즘과 2D 스프라이트 관리를 탐구했습니다.",
    highlights: [
      "GDScript를 사용한 Godot 4 엔진",
      "타일 기반 레벨 디자인",
      "캐릭터 물리 및 애니메이션",
      "패럴랙스 스크롤링 배경"
    ]
  },
  "money-maker": {
    role: "실시간 수익",
    description: "생산성을 유지하면서 자신의 수익을 실시간으로 시각화하도록 설계된 아늑한 애플리케이션. 순급여와 노동 시간을 바탕으로 인터랙티브 항아리에 쌓여가는 돈을 표시합니다.",
    highlights: [
      "인터랙티브 항아리 모드: 물리 엔진이 탑재된 실시간 수익 시각화(항아리를 흔들어 보세요!).",
      "구르메 포모도로: 작업 리듬을 조절하기 위한 과자 레시피 기반 타이머 시스템.",
      "생산성 대시보드: 아침 체크인과 급여 설정에 기반한 자동 계산.",
      "칠(Chill)한 분위기: 여러 스테이션을 갖춘 통합 라디오와 실제 날씨에 맞춘 비주얼 애니메이션(비/눈)."
    ]
  },
  "pachinko": {
    role: "파칭코 (하이 리스크 / 하이 리워드)",
    description: "Betclic 워크숍에서 팀 'Vibe Coding' 환경의 AI(Copilot / Coding Agents)를 테스트하기 위해 시작되었습니다. 이후 솔로로 컨셉을 발전시켜 운과 전략이 결합된 중독성 있는 아케이드 게임을 만들었습니다.",
    highlights: [
      "AI 지원 개발: 3시간 만에 개발된 POC를 애자일하게 반복 개발.",
      "카지노 메커니즘: 하이 리스크 / 하이 리워드 기능 및 배당 배수 추가.",
      "절차적 생성: 보상을 증가시키는 디버프가 포함된 무작위 생성 레벨.",
      "글로벌 리더보드: Supabase에 호스팅된 실시간 점수 시스템."
    ]
  },
  "aoc-2024": {
    role: "Advent of Code 2024 (C#)",
    description: "Betclic 입사 시 C# 문법과 복잡한 데이터 구조 기술을 향상시키기 위한 일련의 일일 알고리즘 과제.",
    highlights: [
      "복잡도가 증가하는 알고리즘 퍼즐 해결.",
      "순수 알고리즘과 .NET의 집중적인 실습.",
      "실행을 통한 학습(Learning by doing)."
    ]
  },
  /* ── Technical Skills ── */
  technicalSkills: {
    languages: {
      title: "전문 분야",
      content: ".NET C#, TypeScript, Python",
    },
    technologies: {
      title: "기술 스택",
      content: "ReactJS, MongoDB, DynamoDB",
    },
    tools: {
      title: "도구",
      content: "AWS (S3, SNS, SQS), Docker, Terraform, Jenkins, GitHub, CursorAI",
    },
    methods: {
      title: "아키텍처 및 방법론",
      content: "Agile, TDD, Spec-driven, Event-driven, Micro-services",
    },
    ai_productivity: {
      title: "AI 및 생산성",
      content: "AI 이전부터 코딩을 배웠으며, 현재는 산파술(Maieutics)적으로 활용하고 있습니다. 제어되지 않은 푸시는 하지 않습니다.",
    },
  },
};

export default ko;
