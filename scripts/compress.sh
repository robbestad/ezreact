#!/bin/bash
cp ./source/assets/* ./public
gzip -fq9 ./public/app.css
gzip -fq9 ./public/favicon.ico
gzip -fq9c ./public/index.html > ./public/index.html.gz

NODE_ENV=production ./node_modules/.bin/webpack -p
rm ./public/bundle.js
echo Done
