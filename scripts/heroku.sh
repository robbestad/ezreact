#!/bin/bash
sh ./scripts/compress.sh
git add .
git commit -am"Heroku deploy" --allow-empty
git push heroku master
echo Done
