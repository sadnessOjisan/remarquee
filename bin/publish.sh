rm -rf dist/build.js
rm -rf dist/index.html
yarn run build:prd
npm publish .