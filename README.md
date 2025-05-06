# sample-workflow-rdb

データベースを中心としたワークフローのサンプルプロジェクトです。

## 概要

このプロジェクトは、PostgreSQLを使用したデータベース管理と開発のワークフローの例を提供します。主な機能は以下の通りです：

- Flywayによるデータベースマイグレーション管理
- SQLフォーマッターによるコード整形
- Dockerを用いた開発環境
- 自動テストとCI/CD設定

## 始め方

### 前提条件

- Docker と Docker Compose
- Node.js (v18以上)
- Python 3.10以上

### インストール

```bash
# リポジトリのクローン
git clone https://github.com/semba-yui/sample-workflow-rdb.git
cd sample-workflow-rdb

# 依存関係のインストール
npm install

# Dockerでデータベースを起動
cd docker
docker compose up -d
```

## 開発ガイド

詳細な開発ガイドについては[CONTRIBUTING.md](./CONTRIBUTING.md)を参照してください。

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。
