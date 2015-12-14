#!/bin/bash
sh compress.sh
git add public
git commit -am"Heroku deploy" --allow-empty
git push heroku master
echo Done
