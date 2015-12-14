var webpack = require('webpack');
var path = require('path');
var isProd = process.env.NODE_ENV === 'production';
var CompressionPlugin = require("compression-webpack-plugin");

var plugins = [
  new webpack.DefinePlugin({
    'process.env': {NODE_ENV: '"production"'}
  }),
  new webpack.optimize.OccurenceOrderPlugin()
];

if (process.env.NODE_ENV !== 'development') {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      }
    }),
    new CompressionPlugin({
      asset: "./{file}.gz",
      algorithm: "gzip",
      regExp: /\.js$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  );
}

module.exports = {
  devtool: !isProd && 'eval',
  entry: './app.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins: plugins
}
