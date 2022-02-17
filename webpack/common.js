const path = require('path');

exports.common = {
  entry: './src/app.tsx',
  resolve: {
    extensions: [ '.ts', '.js', '.tsx' ],
  },
  module: {
    rules: [
      {
        test: /\.ts|x$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '..', 'dist')
  },
};