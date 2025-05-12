# sample-workflow-rdb

[![Build and Deploy MkDocs per Branch](https://github.com/semba-yui/sample-workflow-rdb/actions/workflows/build-and-deploy.yml/badge.svg)](https://github.com/semba-yui/sample-workflow-rdb/actions/workflows/build-and-deploy.yml)
[![pages-build-deployment](https://github.com/semba-yui/sample-workflow-rdb/actions/workflows/pages/pages-build-deployment/badge.svg?branch=gh-pages)](https://github.com/semba-yui/sample-workflow-rdb/actions/workflows/pages/pages-build-deployment)
[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/semba-yui/sample-workflow-rdb)

## 目次

- [概要](#概要)
- [開発者向けガイドライン](#開発者向けガイドライン)
- [必須環境](#必須環境)
- [セットアップ](#セットアップ)
  - [0. mise / docker, docker-compose のインストール](#0-mise--docker-docker-compose-のインストール)
  - [1. 任意の箇所に workspace を作成する](#1-任意の箇所に-workspace-を作成する)
  - [2. リポジトリをクローンする](#2-リポジトリをクローンする)
  - [3. mise を用いて開発環境をセットアップする](#3-mise-を用いて開発環境をセットアップする)
  - [4. poetry を用いて依存関係をインストールする](#4-poetry-を用いて依存関係をインストールする)
  - [5. npm を用いて依存関係をインストールする](#5-npm-を用いて依存関係をインストールする)
- [使用方法](#使用方法)
  - [1. データベース起動 & テーブル定義書自動生成](#1-データベース起動--テーブル定義書自動生成)
  - [2. データベースアクセス](#2-データベースアクセス)
  - [3. ER図生成](#3-er図生成)
  - [4. ER図確認](#4-er図確認)
  - [5. ドキュメント生成](#5-ドキュメント生成)
  - [6. ドキュメント確認](#6-ドキュメント確認)
  - [7. データベースの停止](#7-データベースの停止)
- [参考](#参考)

## 概要

このプロジェクトは、MySQL を使用したデータベース管理と開発のワークフローの例を提供します。

- Flyway を用いたマイグレーション管理
- tbls を用いたテーブル定義書自動生成
- LiamERD を用いたER図自動生成
- SQLフォーマッターによるコード整形
- Dockerを用いた開発環境
- mkdocs を用いた markdown → HTML 変換（GitHub Pages 用）
- huskey を用いたコミット時の自動フォーマット

## 開発者向けガイドライン

開発者向けガイドラインは[CONTRIBUTING.md](CONTRIBUTING.md)をご参照ください。

## 必須環境

mise を用いて開発環境をセットアップします。\
以下に各種バージョンを記載しますが、最新の情報は [mise.toml](./mise.toml) を参照してください。

- [mise](https://mise.jdx.dev/)
  - Node.js: v23.11.0
  - Python: v3.13.3
  - Poetry: Latest
- Docker および Docker Compose

## セットアップ

### 0. mise / docker, docker-compose のインストール

#### mise のインストール

以下のサイトを参照してください。

- [mise Getting Started](https://mise.jdx.dev/getting-started.html)

homebrew を用いてインストールする場合は以下のコマンドを実行してください。

```bash
brew install mise
```

#### docker, docker-compose のインストール

docker desktop は商用利用できません。\
利用している OS に応じて適宜インストールしてください。

homebrew を用いてインストールする場合は以下のコマンドを実行してください。

```bash
brew install docker
brew install docker-compose
```

### 1. 任意の箇所に workspace を作成する

```bash
mkdir workspace
cd workspace
```

### 2. リポジトリをクローンする

```bash
git clone https://github.com/semba-yui/sample-workflow-rdb.git
cd densin-rdb
```

### 3. mise を用いて開発環境をセットアップする

```bash
mise install
```

### 4. poetry を用いて依存関係をインストールする

```bash
poetry install
```

### 5. npm を用いて依存関係をインストールする

```bash
npm install
```

## 使用方法

### 1. データベース起動 & テーブル定義書自動生成

データベース起動時、Flyway によるマイグレーションと、tbls によるテーブル定義書の自動生成が行われます。

```bash
npm run db:serve
```

### 2. データベースアクセス

お使いのデータベースツールから以下の接続情報でアクセスしてください。

- DB: MySQL 8.0.41
- ユーザー名: user
- パスワード: Password
- ポート: 3306
- データベース名: sample\_rdb

### 3. ER図生成

```bash
npm run er:build
```

### 4. ER図確認

```bash
npm run er:serve
```

### 5. ドキュメント生成

```bash
npm run docs:build
```

### 6. ドキュメント確認

```bash
npm run docs:serve
```

### 7. データベースの停止

利用が完了したら、以下のコマンドで docker コンテナを停止してください。

```bash
npm run db:down
```

## 参考

- [Flyway](https://flywaydb.org/)
- [tbls](https://github.com/k1LoW/tbls)
- [The future of tbls and "Documentation as Code" / phpconfuk 2023](https://speakerdeck.com/k1low/phpconfuk-2023)
- [Liam ERD](https://liambx.com/)
