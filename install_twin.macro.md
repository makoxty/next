## フロント起動
  - npx next dev
## storybook起動
  - yarn storybook


twin.macro環境構築
https://zenn.dev/junseinagao/articles/eb1d550faeae62
yarn add -D babel-plugin-module-resolver
.babelrcを.babelrc.jsonに変えて、以下の様に記述する。
なかったら作成する
{
 "presets": ["next/babel"],
 "plugins": [
   "@emotion/babel-plugin",
   "babel-plugin-macros",
   [
     "module-resolver",
     {
       "root": ["."],
       "alias": {
         "~": "./src"
       }
     }
   ]
 ]
}

tsconfig.jsonに以下を追記する
"baseUrl": ".",
   "paths": {
     "~/*": ["src/*"]
     }


yarn add @emotion/react @emotion/styled @emotion/css @emotion/server
yarn add -D twin.macro tailwindcss postcss@latest autoprefixer@latest @emotion/babel-plugin babel-plugin-macros
npx tailwindcss-cli@latest init -p

package.jsonに以下の記述を追加する。
"babelMacros": {
   "twin": {
     "preset": "emotion"
   }
 },

.babelrc.jsonに以下の記述を追加する。これが.babelrc.jsonの最終的な形になる。
{
    "presets": [
        [
        "next/babel",
        {
            "preset-react": {
              "runtime": "automatic",
              "importSource": "@emotion/react"
            }
          }
        ]],
    "plugins": [
      "@emotion/babel-plugin",
      "babel-plugin-macros",
      [
        "module-resolver",
        {
          "root": ["."],
          "alias": {
            "~": "./src"
          }
        }
      ]
    ]
   }

Twin の型定義ファイルを記述するために、src/typesにtwin.d.tsを作成し、以下の様に記述する。
import 'twin.macro'
import styledImport from '@emotion/styled'
import { css as cssImport } from '@emotion/react'

declare module 'twin.macro' {
  const styled: typeof styledImport
  const css: typeof cssImport
}

tsconfig.jsonを編集してtwin.d.tsを読み込む。以下の様に記述を追加する。
"files": ["src/types/twin.d.ts"],