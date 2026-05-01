const ja = {
  /* ── UI ── */
  tagline: ".NET + JS フルスタックエンジニア",
  trackCareer: "経歴",
  trackEducation: "学歴",
  trackProjects: "プロジェクト",
  viewOnGithub: "GitHubで見る",
  liveDemo: "ライブデモ",
  viewBenchmark: "ベンチマーク",
  keyFeatures: "主な機能",
  addImage: "画像を追加",
  footer: (year) => `© ${year} Victor Grabowski — React & Framer Motion で構築`,

  /* ── Projets ── */
  moyenax: {
    role: "フルスタックエンジニア / テクニカルリード",
    description: "Dofusの世界観にインスパイアされた、ブラウザベースのターン制戦略ゲーム（1v1）。高性能な等角投影3Dエンジンと堅牢なリアルタイムアーキテクチャをベースにしています。",
    highlights: [
      "ダイナミックシードシステム：各ゲームがユニークで、戦略的な選択（リソース、地形）を左右します。",
      "完全なゲームプレイサイクル：探索（ファーミング）、経済（クラフト/ショップ）、戦術的なPvPコンバット。",
      "NestJSとReactを使用したNXモノレポによるマイクロサービスアーキテクチャ。",
      "Server-Sent Events (SSE) による最適化されたリアルタイム通信とRedisでの戦闘状態の同期。",
      "鍛冶・クラフトシステム：材料（鉄、革、クリスタル）の管理と戦略的な装備作成のための洗練されたインターフェース。",
      "React Three Fiberによる没入感のある等角投影3Dインターフェース。"
    ]
  },
  tamagotchi: {
    role: "2Dオートバトラー",
    description: "ElectronJSで構築されたユニークなオートバトラーゲーム。ポテト戦士を作成・収集し、戦略的にレベルアップさせ、自動生成された対戦相手とのトーナメントに挑みます。",
    highlights: [
      "オートバトラーシステム：AIが管理するコンバット、ステータスの戦略的管理に焦点を当てています。",
      "カスタマイズと進行：ストレージPC、ユニークな特性、装備、アップグレードツリー。",
      "トーナメントモード：ポテトビルドの有効性をテストするための一連のデュエル。",
      "ユーモアと遊び心：軽いトーンでRPGの仕組みを探索する楽しいプロジェクト。"
    ]
  },
  aicontentremover: {
    role: "カモフラージュ拡張機能 & Vibe Coding",
    description: "SNS（Twitter/X）上でのAI生成コンテンツやボットの急増に対する不満から生まれたプロジェクト。コミュニティが疑わしい投稿に投票して非表示にすることで、フィードの質を向上させます。",
    highlights: [
      "Vibe Coding：超高速かつ協調的な開発に関する探索的プロジェクト。",
      "DOMクリーニング：報告されたアカウントのHTML要素を直接削除し、可視性を遮断します。",
      "ソーシャルコンセンサス：投稿がAIによるものかどうかを共同で検証するための投票システム。",
      "倫理的動機：生成AIによる作品の盗用からオリジナルアーティストを保護します。"
    ]
  },
  imapunsub: {
    role: "Newsletter Killer (Green IT)",
    description: "デジタル汚染を削減する（Green IT）という意志から生まれた自動配信停止ツール。未読のニュースレターで溢れたメールボックスは膨大なエネルギーを消費します。このスクリプトは、ワンクリックで配信停止プロセスを自動化します。",
    highlights: [
      "IMAP自動化：Pythonによるニュースレターの超高速スキャンとパース。",
      "ワンクリック配信停止：法律に準拠した配信停止リンクの自動検出と追跡。",
      "デジタルエコロジー：不要なメールデータの保存に関連するカーボンフットプリントを大幅に削減。",
      "セキュリティ監査：偽の配信停止リンク（フィッシング/マルウェア）に関連するリスク分析。"
    ]
  },
  knightjumper: {
    role: "2Dプラットフォーマー",
    description: "Godot 4で作成されたダイナミックなプラットフォームゲーム。ジャンプの仕組みと2Dスプレッドシートの管理を探索しました。",
    highlights: [
      "GDScriptを使用したGodot 4エンジン",
      "タイルベースのレベルデザイン",
      "キャラクターの物理とアニメーション",
      "パララックススクロールによる背景"
    ]
  },
  "money-maker": {
    role: "リアルタイム収益",
    description: "生産性を維持しながら、自分の収益をリアルタイムで視覚化するために設計された心地よいアプリケーション。純給与と労働時間に基づき、インタラクティブなジャーに溜まっていくお金を表示します。",
    highlights: [
      "インタラクティブジャーモード：物理エンジンを搭載したリアルタイムの収益視覚化（ジャーを振ってみてください！）。",
      "グルメポモドーロ：仕事のリズムを整えるための、お菓子のレシピに基づいたタイマーシステム。",
      "生産性ダッシュボード：朝のチェックインと給与設定に基づいた自動計算。",
      "チルな雰囲気：複数のステーションを備えた統合ラジオと、実際の天気に合わせたビジュアルアニメーション（雨/雪）。"
    ]
  },
  "pachinko": {
    role: "パチンコ (ハイリスク / ハイリワード)",
    description: "Betclicのワークショップで、チームでの『Vibe Coding』におけるAI（Copilot / Coding Agents）をテストするために開始されました。その後、ソロでコンセプトを追求し、運と戦略を組み合わせた中毒性のあるアーケードゲームを作成しました。",
    highlights: [
      "AI支援開発：3時間で開発されたPOCを、アジャイルにイテレーション。",
      "カジノメカニクス：ハイリスク・ハイリワード機能と配当倍率の追加。",
      "手続き型生成：報酬を増加させるデバフを含む、ランダムに生成されるレベル。",
      "グローバルリーダーボード：Supabaseにホストされたリアルタイムスコアシステム。"
    ]
  },
  "aoc-2024": {
    role: "Advent of Code 2024 (C#)",
    description: "Betclicへの入社時に、C#の構文と複雑なデータ構造のスキルを向上させるための一連の毎日のアルゴリズム課題。",
    highlights: [
      "複雑さが増していくアルゴリズムパズルの解決。",
      "純粋なアルゴリズムと.NETの集中的な実践。",
      "実践による学習（Learning by doing）。"
    ]
  },
  /* ── Technical Skills ── */
  technicalSkills: {
    languages: {
      title: "専門分野",
      content: ".NET C#, TypeScript, Python",
    },
    technologies: {
      title: "テクノロジー",
      content: "ReactJS, MongoDB, DynamoDB",
    },
    tools: {
      title: "ツール",
      content: "AWS (S3, SNS, SQS), Docker, Terraform, Jenkins, GitHub, CursorAI",
    },
    methods: {
      title: "アーキテクチャ & 手法",
      content: "Agile, TDD, Spec-driven, Event-driven, Micro-services",
    },
    ai_productivity: {
      title: "AI & 生産性",
      content: "AI以前からコーディングを学び、現在はマイエウティカ（産婆術）的に活用しています。制御不能なプッシュは行いません。",
    },
  },
};

export default ja;
