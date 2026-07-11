/* =========================================================
   記事データ。ここに追記すれば 一覧・注目記事・タグ に反映されます。
     cat   : paper | nlp | genai | agi | dev | book （フィルタの data-filter と対応）
     date  : 並び替えに使う日付。dateLabel があれば表示はそちらを優先（年しか分からない論文用）
     cover : t-indigo / t-amber / t-teal / t-rose / t-slate / t-ink / t-blue
     url   : 記事本文のURL（未執筆は '#' のまま）
     featured: true の最新記事が「注目の記事」に載る
   ========================================================= */
var POSTS = [
  {
    title: 'FDE という解 — 暗黙知と明示知をつなぐ、伴走型エンジニアリング',
    date: '2026-06-15',
    cat: 'dev', catLabel: '登壇 · 夏の勉強会&交流会（FDE最新戦略）',
    excerpt: 'FDE に欠かせない明示知と暗黙知を SECI モデルから捉え直す。お客様の声をどう活かすかを、両者の往復として整理し、実装例まで踏み込んだ招待講演。',
    tags: ['FDE', 'SECIモデル', '暗黙知'],
    cover: 't-ink', mark: '01', kicker: 'Talk', coverTitle: 'FDE',
    url: 'https://speakerdeck.com/otanet/fde-toiujie-an-mo-zhi-toming-shi-zhi-wotunagu-ban-zou-xing-enziniaringu',
    featured: true
  },
  {
    title: '川端康成『雪国』のフレーズからわかる思考 — あなたは主観的？客観的？',
    date: '2026-01-14',
    cat: 'nlp', catLabel: '登壇 · データ横丁 新年LT大会 2026',
    excerpt: '『雪国』の冒頭を手がかりに、主観的把握と客観的把握の差を追う。テキスト画像変換・マルチモーダル変換に現れる非対称性を、広告クリエイティブへの応用まで含めて考えた。',
    tags: ['認知言語学', 'マルチモーダル', '画像生成'],
    cover: 't-rose', mark: '02', kicker: 'Talk', coverTitle: '雪国と認知',
    url: 'https://speakerdeck.com/otanet/detaheng-ding-xin-nian-lt20260114'
  },
  {
    title: 'AIエージェントに向けた AutoGen によるマルチエージェントの対話の取り組み',
    date: '2024-10-19',
    cat: 'genai', catLabel: '登壇 · Gunma.web #54 生成AI LT会',
    excerpt: '『雪国』を題材に、日本人の主観的把握と欧米人の客観的把握の違いを画像生成で検証。そのうえで AutoGen を用い、エージェント間の協調的な対話を実装した。',
    tags: ['LLM', 'Agent', 'AutoGen'],
    cover: 't-blue', mark: '03', kicker: 'Talk', coverTitle: 'Multi-Agent',
    url: 'https://speakerdeck.com/otanet/tai-tian-bo-san-at-usagisan2020-98b9f7d9-cac0-4b4c-b7e5-b774805242d3'
  },
  {
    title: '画像生成で学ぶ日本語と英語の「好まれる言い回し」— 認知言語学の主観的把握を知ろう',
    date: '2024-10-18',
    cat: 'nlp', catLabel: '登壇 · 東京AI祭',
    excerpt: '『雪国』を日本語・英語・フランス語で読み比べ、画像生成で可視化する。言語ごとの認知モードの違いが、ネイティブに好まれる言い回しをどう決めているか。',
    tags: ['認知言語学', '主観的把握', '画像生成'],
    cover: 't-amber', mark: '04', kicker: 'Talk', coverTitle: '好まれる言い回し',
    url: 'https://speakerdeck.com/otanet/tai-tian-bo-san-at-usagisan2020-74e59a06-90a4-4978-a4f3-572bba5274cf'
  },
  {
    title: 'アニメ画像生成の入門 — Fooocus (Stable Diffusion XL) を用いて【ハンズオン】',
    date: '2024-07-20',
    cat: 'genai', catLabel: '招待講演 · SocioInfo #28（社会情報学会）',
    excerpt: '東京AI祭のワークショップ資料をもとにした招待講演。画像生成AIの入門として、Fooocus で手を動かしながらアニメ画像を生成する。',
    tags: ['画像生成', 'Stable Diffusion', 'ハンズオン'],
    cover: 't-teal', mark: '05', kicker: 'Invited', coverTitle: 'Fooocus',
    url: 'https://speakerdeck.com/otanet/fooocus-stable-diffusionxl-de-animehua-xiang-sheng-cheng-noshi-fang'
  },
  {
    title: 'Create.xyz を使ってみて — 商品検索アプリと群馬県PRサイトを作る',
    date: '2024-07-15',
    cat: 'dev', catLabel: '登壇 · create.xyz Team in Tokyo（CEO Demo & AI Meetup）',
    excerpt: 'Create.xyz で 1) 商品検索アプリ、2) 海外観光客向けの群馬県PRサイト の2本を作ってみた記録。ノーコード生成でどこまで届くかを試す。',
    tags: ['ノーコード', 'アプリ開発', '生成AI'],
    cover: 't-slate', mark: '06', kicker: 'Dev log', coverTitle: 'Create.xyz',
    url: 'https://speakerdeck.com/otanet/tai-tian-bo-san-at-usagisan2020-ad99fd1a-d197-42c5-a2b7-8f88e630eadd'
  },
  {
    title: '認知バイアスを考慮した売上のシミュレーション — コンタクトセンターでの事例を通じて',
    date: '2024-06-22',
    cat: 'genai', catLabel: '登壇 · ChatGPT部 フォロワー1,000人記念',
    excerpt: '一般的な認知バイアス12種とLLMの認知バイアス9種を並べ、事業者と消費者のペルソナで会話をシミュレート。バイアスの有無で売上に差が出ることを示した。',
    tags: ['LLM', '認知バイアス', 'シミュレーション'],
    cover: 't-indigo', mark: '07', kicker: 'Talk', coverTitle: '認知バイアス',
    url: 'https://speakerdeck.com/otanet/tai-tian-bo-san-at-usagisan2020'
  },
  {
    title: 'モーダル間の変換後の一致性とジャンル表を用いた解釈可能性の考察',
    date: '2024-04-26',
    cat: 'nlp', catLabel: '研究発表 · 機械学習の社会実装勉強会 第34回',
    excerpt: 'Text-to-Image と Image-to-Music を例に、モーダル変換後の一貫性をどう測るか。ジャンル表とオントロジーを使って、生成結果の解釈可能性を評価する試み。',
    tags: ['Multimodal', 'オントロジー', '解釈可能性'],
    cover: 't-rose', mark: '08', kicker: 'Research', coverTitle: 'Modality',
    url: 'https://speakerdeck.com/otanet/modarujian-nobian-huan-hou-no-zhi-xing-toziyanrubiao-woyong-itajie-shi-ke-neng-xing-nokao-cha-text-to-musictotext-to-imagekatuimage-to-musicwoli-ni'
  },
  {
    title: 'Fooocus (Stable Diffusion XL) でアニメ画像生成の仕方',
    date: '2024-04-20',
    cat: 'genai', catLabel: 'ワークショップ · 東京AI祭2024 Stable Diffusion',
    excerpt: '画像生成AIの入門ハンズオン資料。Stable Diffusion XL ベースの Fooocus で、まず1枚生成してみるところまでを一気に通す。',
    tags: ['画像生成', 'Stable Diffusion', 'ハンズオン'],
    cover: 't-teal', mark: '09', kicker: 'Workshop', coverTitle: 'Fooocus',
    url: 'https://speakerdeck.com/otanet/fooocus-stable-diffusionxl-de-animehua-xiang-sheng-cheng-noshi-fang'
  },
  {
    title: '解釈可能性を高めて信頼し得るエージェントを実現するための脳型認知モデル',
    date: '2024-03-01',
    cat: 'agi', catLabel: '共著 · 人工知能 Vol.39 No.2 特集「生成AI時代における認知のモデリング」',
    excerpt: '田和辻可昌・大森隆司・宮本竜也・芦原佑太・荒川直哉・山川宏の各氏との共著。脳型認知モデルが、解釈可能で信頼できるエージェントをどう支えるかを論じた。',
    tags: ['AGI', '脳型認知モデル', '解釈可能性'],
    cover: 't-indigo', mark: '論', kicker: 'Paper', coverTitle: '脳型認知モデル',
    url: 'https://www.jstage.jst.go.jp/article/jjsai/39/2/39_197/_article/-char/ja/'
  },
  {
    title: 'ChatGPT の国際的な動向と著作権・ガイドラインについて',
    date: '2023-05-04',
    cat: 'genai', catLabel: '登壇 · ChatGPT部 #05（LT & 著作権について語る会）',
    excerpt: '2023年4月の動きを振り返り、ChatGPT をめぐる国際的な議論を整理する。民間企業それぞれに、生成AIのガイドライン整備が求められはじめていた。',
    tags: ['ChatGPT', '著作権', 'ガイドライン'],
    cover: 't-amber', mark: '10', kicker: 'Talk', coverTitle: 'ChatGPT',
    url: 'https://speakerdeck.com/otanet/chatgptnoguo-ji-de-nadong-xiang-tojin-hou-zhi-jin-2zhou-jian-wozhong-xin-ni'
  },
  {
    title: 'LangChain による自動要約 — 『蜘蛛の糸』で2つの要約を比べる',
    date: '2023-04-15',
    cat: 'genai', catLabel: '登壇 · ChatGPT部 #02 LT大会',
    excerpt: '芥川龍之介『蜘蛛の糸』（青空文庫・3,236文字）を題材に、LangChain で2タイプの自動要約を試す。Wikipedia のあらすじと並べて、何が落ちるのかを考察した。',
    tags: ['LangChain', 'LLM', '要約'],
    cover: 't-slate', mark: '11', kicker: 'Dev log', coverTitle: 'Summarization',
    url: 'https://speakerdeck.com/otanet/tai-tian-bo-san-20c2bd5a-f2f2-492c-bcbe-c5efcf725853'
  },
  {
    title: 'ウェブ解析士認定試験公式テキスト2021（第12版）',
    date: '2021-01-01', dateLabel: '2021年',
    cat: 'book', catLabel: '共著 · 一般社団法人ウェブ解析士協会',
    excerpt: 'ウェブ解析士協会カリキュラム委員会による公式テキスト、第12版に参加。データを読む前に、何を計測しているのかを揃えるための一冊。この年から電子出版が主となり、冊子版は POD で提供されている。',
    tags: ['ウェブ解析', '執筆'],
    cover: 't-blue', mark: '本', kicker: 'Book', coverTitle: 'ウェブ解析士',
    url: 'https://www.amazon.co.jp/dp/490898610X'
  },
  {
    title: 'Juliaデータサイエンス — Julia を使って自分でゼロから作るデータサイエンス世界の探索',
    date: '2017-09-26',
    cat: 'book', catLabel: '編訳 · エヌ・ティー・エス',
    excerpt: '石井一夫・岩中公紀の各氏らとの編訳。ライブラリに乗る前に、Julia で自分の手で組み立ててみるためのデータサイエンス入門。',
    tags: ['Julia', 'データサイエンス', '翻訳'],
    cover: 't-ink', mark: '本', kicker: 'Book', coverTitle: 'Julia',
    url: 'https://www.nts-book.co.jp/item/detail/summary/it/20171001_35.html'
  },
  {
    title: '文章自動生成に向けた非構造データの活用の比較検討 — 文と文とのつながりを課題として',
    date: '2017-09-23',
    cat: 'nlp', catLabel: '研究発表 · 電子情報通信学会 2017年秋季全国大会',
    excerpt: 'マルコフ連鎖・自動要約・深層学習（RNN / LSTM / GAN）による文章生成を比較する。深層学習の恩恵が及んでもなお、文と文のつながりは不自然なままだった。',
    tags: ['文章生成', 'RNN/LSTM', '自然言語処理'],
    cover: 't-slate', mark: '12', kicker: 'Research', coverTitle: '文章自動生成',
    url: 'https://speakerdeck.com/otanet/wen-zhang-zi-dong-sheng-cheng-nixiang-ketafei-gou-zao-detafalsehuo-yong-falsebi-jiao-jian-tao-wen-towen-tofalsetunagariwoke-ti-tosite'
  },
  {
    title: '文章自動生成に向けた非構造データの活用の一考察 — 文と文とのつながりを課題として',
    date: '2017-09-21',
    cat: 'nlp', catLabel: '研究発表 · 経営情報学会 2017年秋季全国研究発表大会',
    excerpt: 'ビッグデータと深層学習の波が自然言語処理にも及んだ時期の出発点。マルコフ連鎖・自動要約・RNN/LSTM の3手法で文章生成を実践し、課題を洗い出した。',
    tags: ['文章生成', 'マルコフ連鎖', '自動要約'],
    cover: 't-teal', mark: '13', kicker: 'Research', coverTitle: '文章自動生成',
    url: 'https://speakerdeck.com/otanet/wen-zhang-zi-dong-sheng-cheng-nixiang-ketafei-gou-zao-detafalsehuo-yong-false-kao-cha-wen-towen-tofalsetunagariwoke-ti-tosite'
  },

  /* ---- 論文・研究発表（Google Scholar より。掲載年のみ公開のため dateLabel は年表示） ---- */
  {
    title: 'マルチモーダル基盤におけるマイナーなモーダル間の解釈可能性の検討',
    date: '2024-01-01', dateLabel: '2024年',
    cat: 'paper', catLabel: '論文 · 人工知能学会 第二種研究会資料（SWO-062）',
    excerpt: 'データの乏しいマイナーなモーダル間の変換において、解釈可能性をどう確保するか。マルチモーダル基盤モデルを対象に検討した。',
    tags: ['Multimodal', '解釈可能性', 'セマンティックWeb'],
    cover: 't-rose', mark: '論', kicker: 'Paper', coverTitle: 'Multimodal',
    url: 'https://scholar.google.com/citations?user=eAW7tScAAAAJ&hl=ja'
  },
  {
    title: '情感豊かなげっ歯類のインタラクションの機能要件の提案 — 機能実現グラフを通じて脳器官との接地の試み',
    date: '2024-01-01', dateLabel: '2024年',
    cat: 'paper', catLabel: '論文 · 人工知能学会全国大会（第38回）',
    excerpt: '田和辻可昌・宮本竜也・大森隆司・芦原佑太・荒川直哉の各氏との共著。機能実現グラフを介して、インタラクションの機能要件を脳器官へ接地させる試み。',
    tags: ['AGI', '脳型認知モデル', '機能実現グラフ'],
    cover: 't-indigo', mark: '論', kicker: 'Paper', coverTitle: '機能要件と脳',
    url: 'https://scholar.google.com/citations?user=eAW7tScAAAAJ&hl=ja'
  },
  {
    title: '含意や推意への論理的なアプローチでの関係把握の検討',
    date: '2022-01-01', dateLabel: '2022年',
    cat: 'paper', catLabel: '論文 · 言語処理学会 第28回年次大会',
    excerpt: '含意（entailment）と推意（implicature）の関係を、論理的なアプローチから捉え直す試み。',
    tags: ['自然言語処理', '語用論', '含意・推意'],
    cover: 't-slate', mark: '論', kicker: 'Paper', coverTitle: '含意と推意',
    url: 'https://scholar.google.com/citations?user=eAW7tScAAAAJ&hl=ja'
  },
  {
    title: '自然言語における知識獲得及び常識推論への接近法 — 移民政策と日本語教育、法的な視点から',
    date: '2021-01-01', dateLabel: '2021年',
    cat: 'paper', catLabel: '論文 · 人工知能学会 合同研究会（知識ベースシステム研究会）',
    excerpt: '常識推論に必要な知識をどう獲得するか。移民政策・日本語教育・法という、言語の外側の文脈から接近する。',
    tags: ['常識推論', '知識獲得', '自然言語処理'],
    cover: 't-teal', mark: '論', kicker: 'Paper', coverTitle: '知識獲得',
    url: 'https://scholar.google.com/citations?user=eAW7tScAAAAJ&hl=ja'
  },
  {
    title: '自然言語処理における常識推論の精度向上要因に関する一考察',
    date: '2021-01-01', dateLabel: '2021年',
    cat: 'paper', catLabel: '論文 · 人工知能学会全国大会（第35回）',
    excerpt: '常識推論タスクの精度は何によって上がるのか。その要因を切り分けて考察した。',
    tags: ['常識推論', '自然言語処理', '評価'],
    cover: 't-slate', mark: '論', kicker: 'Paper', coverTitle: '常識推論',
    url: 'https://scholar.google.com/citations?user=eAW7tScAAAAJ&hl=ja'
  },
  {
    title: '会話文の常識推論の実現に向けた一考察 — 関連性理論及びポライトネスによるローカル化をつうじて',
    date: '2021-01-01', dateLabel: '2021年',
    cat: 'paper', catLabel: '論文 · 言語処理学会 第27回年次大会（NLP2021）',
    excerpt: '会話における常識推論を、関連性理論とポライトネスを手がかりにローカルな文脈へ落とし込む。',
    tags: ['常識推論', '関連性理論', 'ポライトネス'],
    cover: 't-rose', mark: '論', kicker: 'Paper', coverTitle: '会話と常識',
    url: 'https://scholar.google.com/citations?user=eAW7tScAAAAJ&hl=ja'
  },
  {
    title: 'ポライトネス及び配慮表現コーパス作成と分析手法の一考察 — 対人関係を考慮した対話システムの適用に向けて',
    date: '2019-01-01', dateLabel: '2019年',
    cat: 'paper', catLabel: '論文 · 人工知能学会 言語・音声理解と対話処理研究会（第86回）',
    excerpt: '対人関係を織り込んだ対話システムのために、ポライトネスと配慮表現のコーパスをどう作り、どう分析するか。',
    tags: ['ポライトネス', 'コーパス', '対話システム'],
    cover: 't-amber', mark: '論', kicker: 'Paper', coverTitle: 'ポライトネス',
    url: 'https://scholar.google.com/citations?user=eAW7tScAAAAJ&hl=ja'
  },
  {
    title: '縦断調査における条件付き相互行為に関する実証研究',
    date: '2019-01-01', dateLabel: '2019年',
    cat: 'paper', catLabel: '論文 · 人工知能学会 言語・音声理解と対話処理研究会（第85回）',
    excerpt: '縦断調査のデータから、条件付き相互行為のふるまいを実証的に確かめる。',
    tags: ['相互行為', '縦断調査', '対話'],
    cover: 't-slate', mark: '論', kicker: 'Paper', coverTitle: '相互行為',
    url: 'https://scholar.google.com/citations?user=eAW7tScAAAAJ&hl=ja'
  },
  {
    title: '言語学の語用論や配慮表現の先端技術への適用に関する一考察',
    date: '2019-01-01', dateLabel: '2019年',
    cat: 'paper', catLabel: '論文 · 第23回 SIG-AM 人工知能学会 合同研究会',
    excerpt: '語用論や配慮表現という言語学の蓄積を、先端技術の側にどう持ち込むか。被引用2件。',
    tags: ['語用論', '配慮表現', '自然言語処理'],
    cover: 't-teal', mark: '論', kicker: 'Paper', coverTitle: '語用論の適用',
    url: 'https://scholar.google.com/citations?user=eAW7tScAAAAJ&hl=ja'
  },
  {
    title: '縦断的調査データによる条件付き相互行為の実証研究 — 自然発話文の語用論的アプローチから',
    date: '2019-01-01', dateLabel: '2019年',
    cat: 'paper', catLabel: '論文 · 人工知能学会全国大会（第33回）',
    excerpt: '自然発話文を語用論の側から読み、縦断データで条件付き相互行為を跡づける。',
    tags: ['相互行為', '語用論', '自然発話'],
    cover: 't-indigo', mark: '論', kicker: 'Paper', coverTitle: '自然発話',
    url: 'https://scholar.google.com/citations?user=eAW7tScAAAAJ&hl=ja'
  },
  {
    title: '日本語学習者の相互行為分析を通じた対話生成システムの一考察 — 隣接ペア・笑い・フィラー・あいづちを通じて',
    date: '2018-01-01', dateLabel: '2018年',
    cat: 'paper', catLabel: '論文 · 人工知能学会 知識ベースシステム研究会（第115回）',
    excerpt: '隣接ペア・笑い・フィラー・あいづち。会話を支える細部から、対話生成システムを考える。',
    tags: ['対話生成', '隣接ペア', '日本語学習者'],
    cover: 't-amber', mark: '論', kicker: 'Paper', coverTitle: '対話生成',
    url: 'https://scholar.google.com/citations?user=eAW7tScAAAAJ&hl=ja'
  },
  {
    title: '日本語学習者会話データを用いた相互行為分析と対話破綻の分析に関する一考察 — 対話破綻検出や対話システムへの適用を目指して',
    date: '2018-01-01', dateLabel: '2018年',
    cat: 'paper', catLabel: '論文 · 電子情報通信学会 技術研究報告 118(210)',
    excerpt: '日本語学習者の会話データから相互行為を分析し、対話破綻の検出へつなげる。',
    tags: ['対話破綻', '相互行為', '対話システム'],
    cover: 't-slate', mark: '論', kicker: 'Paper', coverTitle: '対話破綻',
    url: 'https://scholar.google.com/citations?user=eAW7tScAAAAJ&hl=ja'
  },
  {
    title: '日本語学習者属性間の隣接行為等の対話自動生成への適用に関する一考察',
    date: '2018-01-01', dateLabel: '2018年',
    cat: 'paper', catLabel: '論文 · 人工知能学会 言語・音声理解と対話処理研究会（第83回）',
    excerpt: '学習者の属性ごとに異なる隣接行為を、対話の自動生成にどう活かせるか。',
    tags: ['対話生成', '隣接ペア', '日本語学習者'],
    cover: 't-teal', mark: '論', kicker: 'Paper', coverTitle: '隣接行為',
    url: 'https://scholar.google.com/citations?user=eAW7tScAAAAJ&hl=ja'
  },
  {
    title: '日本語学習者の言語行為や隣接ペアの対話破綻や対話生成への適用に関する一考察',
    date: '2018-01-01', dateLabel: '2018年',
    cat: 'paper', catLabel: '論文 · 人工知能学会 第二種研究会資料（KST-34）',
    excerpt: '言語行為と隣接ペアの観点から、対話破綻の検出と対話生成の双方に橋を架ける。',
    tags: ['言語行為', '対話破綻', '対話生成'],
    cover: 't-rose', mark: '論', kicker: 'Paper', coverTitle: '言語行為',
    url: 'https://scholar.google.com/citations?user=eAW7tScAAAAJ&hl=ja'
  },
  {
    title: '日本語学習者会話データベースにおける隣接ペアの談話促進に関する一考察 — 対話破綻検出や対話システムへの適用を目指して',
    date: '2018-01-01', dateLabel: '2018年',
    cat: 'paper', catLabel: '論文 · 人工知能学会 第二種研究会資料（AM-19）',
    excerpt: '隣接ペアは談話をどう前へ進めるのか。会話データベースを手がかりに考える。',
    tags: ['隣接ペア', '談話', '対話システム'],
    cover: 't-indigo', mark: '論', kicker: 'Paper', coverTitle: '談話促進',
    url: 'https://scholar.google.com/citations?user=eAW7tScAAAAJ&hl=ja'
  },
  {
    title: '条件付き相互行為と話し言葉の会話分析に関する一考察 — 場面別の対話システム向上を目指して',
    date: '2018-01-01', dateLabel: '2018年',
    cat: 'paper', catLabel: '論文 · Webインテリジェンスとインタラクション研究会（第13回）',
    excerpt: '話し言葉の会話分析から、場面ごとに異なる対話システムの改善点を探る。',
    tags: ['会話分析', '相互行為', '対話システム'],
    cover: 't-amber', mark: '論', kicker: 'Paper', coverTitle: '会話分析',
    url: 'https://scholar.google.com/citations?user=eAW7tScAAAAJ&hl=ja'
  },
  {
    title: '日本語学習者属性別の言語行為の対話自動生成への適用に関する一考察',
    date: '2018-01-01', dateLabel: '2018年',
    cat: 'paper', catLabel: '論文 · 言語資源活用ワークショップ 発表論文集',
    excerpt: '学習者の属性別に言語行為を切り分け、対話の自動生成へ適用する道筋を検討した。',
    tags: ['言語行為', '対話生成', '言語資源'],
    cover: 't-slate', mark: '論', kicker: 'Paper', coverTitle: '言語資源',
    url: 'https://scholar.google.com/citations?user=eAW7tScAAAAJ&hl=ja'
  },
  {
    title: '文章自動生成の主な手法における非構造データ量と処理時間についての一考察',
    date: '2017-01-01', dateLabel: '2017年',
    cat: 'paper', catLabel: '論文 · 人工知能学会 第二種研究会資料（AGI-006）',
    excerpt: '非構造データの量と処理時間はどう釣り合うのか。文章自動生成の主要手法を横に並べて測る。',
    tags: ['文章生成', '非構造データ', '処理時間'],
    cover: 't-teal', mark: '論', kicker: 'Paper', coverTitle: 'データ量と時間',
    url: 'https://scholar.google.com/citations?user=eAW7tScAAAAJ&hl=ja'
  },
  {
    title: '文章自動生成手法の比較考察 — 文章生成における文と文とのつながりの課題と方策',
    date: '2017-01-01', dateLabel: '2017年',
    cat: 'paper', catLabel: '論文 · 電子情報通信学会 技術研究報告 117(212)',
    excerpt: '文と文がつながらない。この一点を軸に、文章自動生成の各手法を比較し、方策を探る。',
    tags: ['文章生成', '自然言語処理', '比較'],
    cover: 't-rose', mark: '論', kicker: 'Paper', coverTitle: '文のつながり',
    url: 'https://scholar.google.com/citations?user=eAW7tScAAAAJ&hl=ja'
  },
  {
    title: '文章自動生成における主な手法と独自性に関する一考察',
    date: '2017-01-01', dateLabel: '2017年',
    cat: 'paper', catLabel: '論文 · Webインテリジェンスとインタラクション研究会（第11回）',
    excerpt: '文章自動生成の主要手法を整理し、それぞれの独自性がどこにあるのかを見極める。被引用1件。',
    tags: ['文章生成', '自然言語処理'],
    cover: 't-indigo', mark: '論', kicker: 'Paper', coverTitle: '手法と独自性',
    url: 'https://scholar.google.com/citations?user=eAW7tScAAAAJ&hl=ja'
  },
  {
    title: '文章自動生成の一考察 — 文章生成における文と文とのつながりを課題と方策',
    date: '2017-01-01', dateLabel: '2017年',
    cat: 'paper', catLabel: '論文 · 電子情報通信学会 技術研究報告 117(207)',
    excerpt: '文章自動生成という問いの出発点。文と文のつながりを課題として据えた最初期の考察。',
    tags: ['文章生成', '自然言語処理'],
    cover: 't-slate', mark: '論', kicker: 'Paper', coverTitle: '文章自動生成',
    url: 'https://scholar.google.com/citations?user=eAW7tScAAAAJ&hl=ja'
  },
  {
    title: '文章自動生成における主な手法と独自性に関する検討',
    date: '2017-01-01', dateLabel: '2017年',
    cat: 'paper', catLabel: '論文 · 電子情報通信学会 技術研究報告 117(367)',
    excerpt: '手法の棚卸しをもう一度。文章自動生成の全体像と、そこでの独自性を検討する。',
    tags: ['文章生成', '自然言語処理'],
    cover: 't-amber', mark: '論', kicker: 'Paper', coverTitle: '手法の検討',
    url: 'https://scholar.google.com/citations?user=eAW7tScAAAAJ&hl=ja'
  }
];
