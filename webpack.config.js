const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    'no-middlewares': path.join(__dirname, './src/no-middlewares/index.tsx'),
    'redux-thunk': path.join(__dirname, './src/redux-thunk/index.tsx'),
    'redux-observable': path.join(__dirname, './src/redux-observable/index.tsx')
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'scripts/[name].js',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        use: [
          {
            loader: 'tslint-loader',
            options: {
              typeCheck: true,
              fix: true,
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      common: path.resolve(__dirname, './src/common')
    }
  },
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    watchContentBase: true,
  }
};