# ビルド&起動
docker-compose up -d

# 停止
docker-compose down

# コンテナにログイン
docker-compose exec web bash
　※初期起動時に以下のコマンドを実施
  composer install

# 諸々のログ表示
docker-compose logs

## clone直後
- コンテナにログインして以下のコマンドを実施
  - composer install
- serverフォルダ直下のsrcフォルダの.env.exampleファイルをコピーして.envというファイル名にする
  - コンテナにログインし、以下のコマンドでkeyを生成する
    - php artisan key:generate
      - 実行後、.envの3行目の=以降に値が設定されていることを確認
        - APP_KEY=
以上でlaravelは起動できるはず

laravelサーバー起動
php artisan serve

path確認
php artisan route:list