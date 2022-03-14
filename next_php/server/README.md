# docker-laravel

How to install
```bash
git clone https://github.com/i3wu9m3u/docker-laravel ./docker-laravel
cd ./docker-laravel
cp -iv .env.example .env && vim .env
docker-compose up -d --build
docker-compose exec web bash
composer install
cp -iv .env.example .env && vim .env
php artisan key:generate
```
