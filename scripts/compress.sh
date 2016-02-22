#!/bin/bash
NODE_ENV=production ./node_modules/.bin/webpack -p --config webpack.config.prod.js
echo Done
