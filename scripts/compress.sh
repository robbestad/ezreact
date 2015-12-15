#!/bin/bash
npm run clean
mkdir public
cp -R ./assets ./public/assets
cp ./index.html ./public/index.html
gzip -fq9 ./public/assets/app.css
gzip -fq9 ./public/assets/favicon.ico
gzip -fq9c ./public/index.html > ./public/index.html.gz

NODE_ENV=production ./node_modules/.bin/webpack -p --config webpack.config.prod.js
rm ./public/assets/bundle.js
echo Done
