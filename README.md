# hono_gen_openapi

## 起動

```sh
pnpm i
pnpm run dev
```

## フォルダ構成

`src/openapi`
機能ごとに obj と routing のの定義

## スキーマ

- `hogeSchema`:DB の構造定義
- `hogeResponse`:API の返り値の定義
- `hogeParams`:URL パラメータから受け取る値の定義
- `hogeQuery`:query の値の定義
- `hogeRequestBody`:requestBody の構造定義
