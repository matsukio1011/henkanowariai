# Antigravity で別のPCから開発を再開する手順書

このアプリ（一次関数の式 特訓アプリ）を、別のPCの Antigravity で引き続き開発するための手順です。

---

## 1. 別のPCでの初回準備（最初の一度だけ）

### ① プロジェクトのダウンロード（クローン）
別のPCの PowerShell または ターミナルを開き、保存したいフォルダ（例：Documents）で以下を実行します：

```powershell
cd Documents
git clone https://github.com/matsukio1011/henkanowariai.git
```

### ② Antigravity で開く
1. 別のPCで **Antigravity** を起動します。
2. 左上メニューの **「File」 ＞ 「Open Folder...」** をクリックします。
3. 先ほどダウンロードした `henkanowariai` フォルダを選択して開きます。

---

## 2. Antigravity での開発の進め方

### ① 作業開始時（チャットに送るメッセージ）
Antigravity のチャット画面を開き、以下のようにつぶやいてください：

> **指示プロンプト例：**  
> 「GitHubから最新の状態を取り込んで、このアプリの開発を再開したいです。まずは git pull で最新化してください。」

AIが自動的に `git pull` を実行して最新のコードを取得し、プロジェクト全体を認識します。

---

### ② 機能追加や修正の指示
いつも通り日本語でやりたいことを伝えてください：
- 「超発展の問題を3問追加して」
- 「正解音の音量を少し調整して」
- 「画面のデザインを少し変えて」 など

---

### ③ 作業終了時（GitHubへ保存してもらう）
作業が終わったら、Antigravity に保存を依頼します：

> **指示プロンプト例：**  
> 「今回の変更内容をコミットして、GitHubにプッシュしてください。」

AIが `git add`、コミットメッセージの作成、`git push` をすべて代行してGitHubに保存します。

---

## 3. 元のPCに戻ってきたとき

元のPCで作業を再開するときも、Antigravity のチャットで以下のように伝えるだけです：

> **指示プロンプト例：**  
> 「別のPCで作業したので、git pull して最新のコードを取り込んでください。」

---

## 📌 リポジトリ情報まとめ
- **GitHub URL**: https://github.com/matsukio1011/henkanowariai
- **ブランチ**: `main`
- **公開WebアプリURL (GitHub Pages)**: https://matsukio1011.github.io/henkanowariai/
