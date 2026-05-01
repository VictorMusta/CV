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
  common: {
    present: "현재",
    location: "위치",
    viewMore: "더 보기",
    exportPdf: "PDF로 내보내기",
    github: "GitHub",
    cities: {
      bordeaux: "보르도",
      merignac: "메리냐크",
      montpellier: "몽펠리에",
      lormont: "로르몽",
    }
  },
  cv: {
    professionalExperience: "경력 사항",
    sideProjects: "개인 프로젝트",
    technicalSkills: "기술 스택",
    education: "학력 사항",
    contact: {
      location: "프랑스 보르도",
    }
  },

  /* ── Career (경력) ── */
  betclic: {
    role: "백엔드 개발자 (.NET + TypeScript)",
    description:
      "2024년 Betclic(임직원 850명 이상)에 입사하여 SQIPI(Identity & Payment Integrity) 팀에 합류했습니다. 부정 방지 시스템의 핵심인 Juno(AML - 자금 세탁 방지) 프로젝트를 담당했습니다. 익스피리언스 팀 내에서 새로운 비동기 비즈니스 규칙을 개발하고, 조사 요원의 업무 효율을 높이기 위해 백오피스 기능을 강화했습니다. PO/PM과 긴밀히 협력하여 프로세스 최적화와 성과 관리를 위한 주요 데이터 시각화에 기여했습니다.",
    highlights: [
      "애자일 및 마이크로서비스 아키텍처: 대규모 애자일 조직 내에서 .NET 마이크로서비스를 통한 확장성과 소프트웨어 품질 향상.",
      "리액티브 및 클라우드 아키텍처: AWS(SNS, SQS)를 활용하여 비동기 부정 행위 탐지 규칙을 개발하고 위험 행동을 실시간으로 분석.",
      "Juno 백오피스: 조사 워크플로우를 가속화하기 위해 새로운 엔드포인트와 데이터 시각화 기능을 인터페이스에 추가.",
      "Fraud-PEP 프로젝트: Dow Jones 리스트를 통합하여 본인 확인 프로세스를 자동화하고 계정 생성 시 온보딩을 보호.",
      "AI 기반 자동화: 스코어링 임계값(IA Threshold)을 기반으로 한 AI 에이전트 프로필 검토 실험적 프로젝트에 참여.",
    ],
    cvDescription: "AWS 기반 .NET + TS 마이크로서비스. 백오피스 및 자금 세탁 방지 규칙 개발.",
    cvHighlights: [
      "API 엔드포인트 및 비동기 서비스(SNS/SQS) 개발 및 모니터링",
      "Fraud-PEP 프로젝트: Dow Jones를 통한 신원 확인 자동화",
      "AI 이니셔티브: 지능형 에이전트를 통한 프로필 검토 자동화",
      "조사 효율성 향상을 위한 Juno .NET 백오피스 최적화",
    ],
  },
  delfox: {
    role: "풀스택 개발자 (인턴십 - React / Python / gRPC)",
    description: "AI(심층 강화 학습 - Deep RL) 전문 스타트업. 2년 동안의 인턴십 기간 동안 자율 에이전트의 훈련을 제어하는 POC(개념 증명) 플랫폼인 'Realmind'를 개발했습니다. 복잡한 훈련 스크립트 실행, 성능 모니터링 및 3D 시뮬레이션 시각화를 가능하게 하는 인터페이스 구축을 담당했습니다.",
    highlights: [
      "POC 개발: ReactJS 기반 모니터링 인터페이스와 Python 기반 백엔드의 전체 설계 및 개발.",
      "실시간 3D 시각화: 드론 군집 및 자율 주행 차량 시뮬레이션 렌더링을 위해 게임 엔진(Unity, Unreal Engine, WebGL) 통합.",
      "gRPC 아키텍처: 프론트엔드와 AI 백엔드 간의 고주파 데이터 흐름 구현.",
      "팀 간 협업: 머신러닝 엔지니어들과 긴밀히 협력하여 훈련 라이브러리와 인터페이스 통합.",
    ],
    cvDescription: "2년 인턴십. 자율형 AI 에이전트를 위한 제어 및 3D 시각화 플랫폼 Realmind 개발.",
    cvHighlights: [
      "React와 Python 백엔드 간의 고속 실시간 통신(gRPC)",
      "Unity, Unreal, WebGL을 활용한 복잡한 시각화(드론 군집, 차량)",
      "Realmind 디자인 시스템 및 모니터링 대시보드 설계",
      "급성장하는 POC 프로젝트의 기술 부채 관리",
    ],
  },
  tild: {
    role: "풀스택 개발자 (VueJS / Python)",
    description: "CRM/ERP 솔루션 'Alma Mater'의 설계 및 유지보수. 100% 재택근무 환경에서 서로 다른 개발 관행을 가진 두 팀 사이의 기술적 가교 역할을 수행하며 높은 자율성과 개발 표준에 대한 빠른 적응력을 발휘했습니다.",
    highlights: [
      "모놀리식 아키텍처: HTTP 통신을 수행하는 Python API와 VueJS 프론트엔드의 유지보수 및 기능 확장.",
      "팀 간 상호 운용성: 두 팀의 서로 다른 개발 베스트 프랙티스 통합 및 조정.",
      "API 문서화: Swagger를 사용하여 엔드포인트의 명확성과 감사 가능성 확보.",
      "스케줄 모듈: 강의실 및 강사 충돌 관리를 포함한 동적 스케줄 생성 엔진 개발.",
    ],
    cvDescription: "CRM/ERP Alma Mater(VueJS/Python) 개발. 원격 근무 환경에서의 팀 간 관행 조정.",
    cvHighlights: ["스케줄 모듈 최적화 및 Swagger를 통한 API 문서화"],
  },
  cosderma: {
    role: "개발자 (인턴십 / 업무 위탁)",
    description: "임상 데이터 재구축 미션. 문서화되지 않은 복잡한 데이터베이스에서 30개 이상의 테이블(약 600개 속성)을 완전히 역공학하여 일관된 관계형 모델을 복원하고 고성능 아카이브 솔루션을 구현했습니다.",
    highlights: [
      "SQL 역공학: 문서화되지 않은 스키마를 심층 분석하여 관계형 모델(Merise) 재구축.",
      "고무결성 아카이빙: 참조 무결성 제약 조건을 유지하면서 이력 데이터를 이전하는 시스템 개발.",
      "운영 최적화: 활성 데이터베이스 크기를 대폭 줄여 백오피스 응답 속도 향상.",
      "GDPR 준수: 민감 데이터 보존 요구 사항을 충족하기 위한 아카이빙 프로세스 구축.",
    ],
    cvDescription: "SQL 역공학 및 중요 데이터(30개 이상의 테이블) 아카이빙. 성능 최적화.",
    cvHighlights: ["완전한 관계형 모델링 및 DB 데이터 점유율 감소"],
  },

  /* ── Education (학력) ── */
  supdevinci: {
    title: "Sup de Vinci",
    role: "소프트웨어 공학 및 클라우드 석사",
    description:
      "기술 프로젝트 매니지먼트와 클라우드 아키텍처 중심의 교육. 집중 워크숍을 통해 다양한 기술, 언어, 도구 습득.",
    highlights: [
      "소프트웨어 공학 및 클라우드 공학 석사",
      "애자일 프로젝트 매니지먼트 및 기술 리딩",
      "다양한 기술 스택의 지속적인 학습 및 탐색",
    ],
  },
  epitech: {
    title: "Epitech Technology",
    role: "정보 기술 전문가",
    description: "Expertise 과정 (2023-2024). 프로젝트 기반 C# 및 TypeScript 심화 학습.",
    highlights: ["프랑스 국가 자격(RNCP) 레벨 7 (석사 상당)"],
  },
  keyce: {
    title: "Keyce Informatique (OpenIt)",
    role: "IT 개발 학사",
    description: "몽펠리에에서의 웹 및 소프트웨어 개발 중심의 일반 교육. 코드의 기초를 배우고 풀스택 프로젝트를 자율적으로 수행.",
    highlights: ["풀스택 개발 학사", "웹 및 모바일 전문화"],
  },
  btssio: {
    title: "Lycée Gustave Eiffel (보르도)",
    role: "IT 서비스 전문 학위 (BTS SIO)",
    description: "IT 기초 학습: 객체 지향 프로그래밍(OOP), 알고리즘 및 데이터베이스 관리. Java, C#, Python을 활용한 2년 풀스택 프로그램.",
    highlights: ["알고리즘 및 OOP 기초", "SQL 데이터베이스 관리", "Java, C#, Python 개발"],
  },
  bacpro: {
    role: "디지털 전자 시스템 직업 바칼로레아 (Bac Pro SEN)",
    description: "디지털 시스템, 전력 전자 및 산업 유지보수에 관한 다방면의 교육.",
  },

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
