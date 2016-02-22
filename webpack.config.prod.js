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
    new webpack.optimize.CommonsChunkPlugin('common.js',  2),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        warnings: false,
        screw_ie8: true,
      }
    }),
    new webpack.NoErrorsPlugin(),
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
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: './public/assets/bundle.js'
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
