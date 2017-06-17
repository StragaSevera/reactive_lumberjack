/*eslint-disable*/
const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],

  output: {
    path: path.resolve(process.cwd(), 'public'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            // use: 'css-loader?modules&importLoaders=1&localIdentName=[hash:base64:5]&minimize' // подключаем модули
            use: 'css-loader' // или отключаем
          }
        )
      },
      { 
        test: /\.(eot|png|ttf|woff|woff2|svg)$/, 
        loader: 'url-loader'
      }
    ]
  },

  resolve: {
    modules: [
      path.resolve(process.cwd(), 'src'),
      'node_modules'
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      __SERVER__: false,
      __CLIENT__: true,
      __DEVELOPMENT__: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new ExtractTextPlugin("styles.css")
  ]
};
