# nicoas ランディングページ デプロイ＆設定ガイド

このガイドでは、作成したランディングページをインターネット上に公開（デプロイ）し、問い合わせ用Googleフォームを連携させる手順をステップバイステップで説明します。

---

## 1. Google フォームの作成と設定

問い合わせを受け取るためのGoogleフォームを作成し、ウェブサイトにリンクします。

1. **Google フォームを開く**:
   - [Google フォーム](https://docs.google.com/forms/) にアクセスし、お持ちの Google アカウント（`totoayano925@gmail.com` など）でログインします。
2. **新しいフォームを作成**:
   - 「空白のフォーム」または「連絡先情報」テンプレートを選択して作成します。
3. **質問項目を追加**:
   - 必要に応じて以下の項目を追加します：
     - お名前（記述式・必須）
     - メールアドレス（記述式・必須）
     - 学年・ご職業（選択式 - 高校1年生、高校2年生、高校3年生、既卒生、保護者、その他）
     - 希望する内容（ラジオボタン - 無料体験レッスン、個別相談、その他）
     - お問い合わせ内容（段落）
4. **公開リンク（URL）の取得**:
   - 右上の「**送信**」ボタンをクリックします。
   - 送信方法から「**リンク**（送信アイコンの隣）」を選択します。
   - 「**URLを短縮**」にチェックを入れ、表示されたURLを**コピー**します。
5. **コードに貼り付け**:
   - プロジェクト内の [src/config.js](file:///Users/ayanoyamada/.gemini/antigravity/scratch/nicoas-landing/src/config.js) を開き、`googleFormUrl` の値をコピーしたURLに書き換えます。

---

## 2. GitHub アカウントの作成とリポジトリ作成

ソースコードを管理・保存するための GitHub アカウントを作成します。

1. **GitHub に新規登録**:
   - [GitHub.com](https://github.com/) にアクセスし、「**Sign up**」からアカウントを作成します。
   - 画面の指示に従い、メールアドレス（`totoayano925@gmail.com`）やパスワード、ユーザー名を設定します。
2. **GitHub で新しいリポジトリ（保管庫）を作成**:
   - ログイン後、右上の「**+**」アイコンをクリックし、「**New repository**」を選択します。
   - **Repository name** に `nicoas-landing` と入力します。
   - リポジトリの公開設定は **Public** または **Private** を選択します（Vercelへの連携はどちらでも可能です）。
   - 「Initialize this repository with:」のチェックは**すべて外したまま**（空白の状態で）「**Create repository**」をクリックします。
3. **コマンドライン用のURLをコピー**:
   - 作成後の画面に表示される `https://github.com/ユーザー名/nicoas-landing.git` というURLをコピーしておきます。

---

## 3. Gitの設定とコードのプッシュ

ローカルマシンのターミナルから、コードを GitHub にアップロード（プッシュ）します。

もしマシンに Git がインストールされていない場合は、あらかじめインストールしておいてください。

1. **ターミナルでプロジェクトのディレクトリに移動**:
   ```bash
   cd /Users/ayanoyamada/.gemini/antigravity/scratch/nicoas-landing
   ```
2. **Git の初期設定**:
   ```bash
   git init
   git checkout -b main
   ```
3. **すべてのファイルを追加してコミット**:
   ```bash
   git add .
   git commit -m "initial commit: nicoas landing page"
   ```
4. **GitHub リポジトリを紐付け**:
   - 先ほどコピーした GitHub のURLを以下のコマンドの最後に入力して実行します。
   ```bash
   git remote add origin https://github.com/ユーザー名/nicoas-landing.git
   ```
5. **コードを GitHub に送信（プッシュ）**:
   ```bash
   git push -u origin main
   ```
   *※ 初回実行時に GitHub のログイン認証（ブラウザでの承認または Personal Access Token の入力）が求められる場合があります。画面の指示に従って認証を行ってください。*

---

## 4. Vercel アカウントの作成と公開（デプロイ）

GitHub にアップロードされたコードを、Vercelを使って無料でインターネット上に公開します。

> [!NOTE]
> **ローカルでの Node.js / npm のインストールは不要です**:
> 本プロジェクトは React と Vite を使用していますが、お使いのPCに Node.js などの開発環境がインストールされていなくても問題ありません。GitHub にコードをアップロードすれば、Vercel のクラウドサーバー側で自動的にビルド（構築）と公開が行われます。

1. **Vercel にサインアップ**:
   - [Vercel](https://vercel.com/signup) にアクセスします。
   - 「**Continue with GitHub**」を選択してサインアップします（GitHubアカウントと自動連携されます）。
2. **プロジェクトのインポート**:
   - Vercel のダッシュボードで「**Add New...**」から「**Project**」を選択します。
   - 先ほど作成した `nicoas-landing` リポジトリの横にある「**Import**」ボタンをクリックします。
3. **プロジェクトの設定とデプロイ**:
   - **Framework Preset**: `Vite` が自動で選択されていることを確認します。
   - **Root Directory**: `./`（デフォルトのまま）
   - **Build and Output Settings**: 設定を変更する必要はありません。自動的にビルドコマンド `npm run build` が実行されます。
   - 準備ができたら「**Deploy**」ボタンをクリックします。
4. **デプロイ完了**:
   - 数十秒でビルドが完了し、「Congratulations!」という画面が表示されます。
   - 表示されたカードをクリックすると、公開されたウェブサイト（`https://nicoas-landing-***.vercel.app`）にアクセスできます。

---

## 5. 今後のアップデート方法

今後デザインや文章を修正した場合は、以下の手順で再度 GitHub にプッシュするだけで、**Vercel が自動的に変更を検知してウェブサイトを自動更新**します。

1. ファイルを変更・保存します。
2. ターミナルで以下のコマンドを実行します：
   ```bash
   git add .
   git commit -m "update: ページの修正"
   git push origin main
   ```
3. 数秒〜数十秒後に、自動的に本番サイトへ反映されます。
