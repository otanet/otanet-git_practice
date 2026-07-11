# Hiromitsu Ota ／ うさぎさん商会 — プロフィールサイト

太田 博三（Hiromitsu Ota）のプロフィールサイト。単一ファイル `index.html` で完結（外部依存なし）。
グッドパッチ風のミニマルなエディトリアルデザイン。ライト／ダークテーマ自動対応・レスポンシブ。

---

## ファイル構成

| ファイル | 内容 |
|---|---|
| `index.html` | サイト本体（HTML/CSS/JS すべて内包） |
| `Hiromitsu_Ota.JPG` | プロフィール写真（ヒーロー＆履歴書PDFで使用） |
| `usagi-logo.png` | うさぎさん商会ロゴ（Contactセクションで使用） |
| `README.md` | このドキュメント |

> 画像は `index.html` と同じフォルダに置く前提（相対パス参照）。

---

## ページ構成（セクション順）

1. **ナビ** … `Hiromitsu Ota.／うさぎさん商会` ＋ About / Work / Certification / Contact ＋ Résumé(PDF) ボタン
2. **Hero** … 名前（英日）・肩書き・キャッチコピー・プロフィール写真
3. **About（自己紹介）** … 経歴文＋Experience（勤務年数はぼかし表記）＋専門タグ
4. **Work（これまでの仕事）** … カテゴリフィルタ（All / Video / Talks / Writing / Code）付きカードグリッド
5. **Certification（資格・修了）** … 受講中2件＋修了3件
6. **Elsewhere（リンク）** … researchmap / GitHub / Speaker Deck / X / Google Scholar / 技術書典
7. **Contact** … ロゴ＋問い合わせフォーム（複数メール対応）＋無料1on1申込CTA
8. **Footer**
9. **印刷用レジュメ（Résumé PDF）** … 画面には非表示。印刷時のみ整形されて出力

---

## 主な機能

### Résumé（履歴書）PDF
- ナビ右上「Résumé (PDF)」またはフッターのリンク → ブラウザ印刷ダイアログで「PDFに保存」。
- `@media print` で画面用UIを隠し、1ページの履歴書レイアウト（写真つき）に自動切替。

### Work グリッド
- フィルタタブでカテゴリ絞り込み（JS）。
- YouTube動画はサムネイル付きカードとして掲載し、クリックでYouTubeを開く。

### Certification（資格・修了）
- **受講中**：GCI 2026 Summer（松尾研究所）／ Physical AI 基礎編（松尾・岩澤研）— カリキュラム抜粋＋公式ページリンク。
- **修了**：
  - Deep Learning基礎講座 2023（DLB2023・E資格認定）… サイト内生成の受講修了記録PDF（`downloadCertificate()`）。
  - 画像認識（2021・集中講義）… GitHub上の実PDF修了証をダウンロード。
  - 深層強化学習（2021・オータムセミナー）… GitHub上の実PDF修了証をダウンロード。

### Contact フォーム（どのメールでも送信可）
- 「メールを作成して送信」＝ 既定メールソフト（mailto）。
- 「Webメールで開く」＝ Gmail / Outlook / Yahoo! メールの作成画面をプリフィルで起動。
- 宛先：`otanet123@gmail.com`（バックエンド不要）。

### 無料 1on1（30分）申込
- Contact下部のCTA。予約URL未設定時はフォームに件名＋候補日時テンプレを自動入力。
- `window.BOOKING_URL` に予約ページURL（Calendly / TimeRex / Spir 等）を入れると、そのページを直接開く。

### アクセス解析（Google Analytics 4）
- 測定ID：`G-B9WZ4DBWK8`（`<head>` 直後の標準 gtag スニペット）。
- ページビューに加え、カスタムイベントを送信：
  `work_click` / `outbound_click` / `course_link` / `certificate_download` /
  `resume_download` / `work_filter` / `contact_submit` / `book_1on1` /
  `section_view` / `scroll_depth`。
- 各イベントはブラウザ Console にも `[track] …` として出力（ローカル確認用）。
- **注意**：GA4は `file://`（ローカルのダブルクリック表示）では計測されない。Web公開が必要。

---

## 編集ポイント（`index.html` 内で変更しやすい箇所）

| 目的 | 場所・変数 |
|---|---|
| GA4 測定ID | `<head>` 直後の gtag スニペット ＋ `window.GA_MEASUREMENT_ID` |
| 1on1 予約URL | `window.BOOKING_URL = '';` に予約ページURLを設定 |
| 連絡先メール | `sendInquiry()` 内の `var to = 'otanet123@gmail.com';` ほか |
| プロフィール写真 | `Hiromitsu_Ota.JPG`（差し替えは同名で上書き） |
| ロゴ | `usagi-logo.png` |

---

## 表記メモ（意図的なぼかし・修正）

- 勤務年数：インターネット業界 10年 ／ データアナリスト 4年 ／ データサイエンティスト 6年。
- 組織名：正式名称「全脳アーキテクチャ・イニシアティブ」で統一。
- 学歴：工学修士／博士課程満期退学修了。

---

## ローカル確認

`index.html` をブラウザで開くだけ（ダブルクリック可）。
※ GA4計測とWebメール以外の機能はローカルでも動作。GA4はWeb公開後に有効。

## デプロイ（例）

- **GitHub Pages** / **Netlify** / 独自サーバーに `static/` の中身を配置。
- 公開後、GA4管理画面「リアルタイム」でアクセス・イベントを確認。

---

## Git

- リポジトリ：`main` ブランチ。
- 初回コミット：`afb660c 最初のコミットをしました`（`index.html` / `Hiromitsu_Ota.JPG` / `usagi-logo.png`）。

### リモートへプッシュ（未設定の場合の例）
```bash
# 既存リモートがある場合
git push -u origin main

# これから作る場合（GitHub CLI）
gh repo create <repo-name> --public --source=. --push
```
