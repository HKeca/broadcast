const { merge } = require('webpack-merge');
const { common } = require('./common');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const devConfig = {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
const mergedConfig = [
  merge(common, devConfig)
];

module.exports = mergedConfig;