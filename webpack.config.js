const webpack = require('webpack');
const envKeys = require("config")

module.exports = {
  resolve: {
    fallback: { "util": require.resolve("util/") }
  },
  plugins: [
    new webpack.DefinePlugin(envKeys)
  ],
  entry: [
    './client/index.js'
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-react'
          ]
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ]
  }
}
