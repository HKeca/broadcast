const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const dartSass = require('sass');

exports.common = {
  entry: {
    main: './src/app.tsx',
    styles: './src/scss/base.scss',
  },
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
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              implementation: dartSass,
            },
          },
        ],
      },
    ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '..', 'dist'),
  },
  plugins: [
    new MiniCssExtractPlugin(),
  ],
};
