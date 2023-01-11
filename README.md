## コンテナの起動
```
docker-compose build
```
## 初期設定(node_modulesをinstall)
```
docker-compose run --rm app sh -c "yarn install"
```
## 開発時
```
docker-compose up
```
開発サーバ：http://localhost:3000/
