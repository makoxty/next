# 技術スタック
Next.js  
TypeScript  
TailWindCSS  
# 環境構築は以下のサイトを参考
https://zenn.dev/7oh/articles/95e11e7c041fe9
# 実行コマンド
- npx create-next-app --typescript study  
- npm i -D tailwindcss@latest postcss@latest autoprefixer@latest  
- npx tailwindcss init -p  
# tailwind.config.jsに以下の追加する
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],

# TailWindCssの参考ページ
https://uedive.net/2021/5596/tailwind-css/  
https://tailwindcomponents.com/cheatsheet/  
https://nerdcave.com/tailwind-cheat-sheet  
https://flowbite.com/docs/components/forms/