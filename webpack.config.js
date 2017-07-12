/*eslint-disable*/
const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const fs = require('fs')

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
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader?sourceMap',
          'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
        ],
        exclude: fs.realpathSync('./vendor/semantic')
      },
      {
        test: /\.css$/,
        use: [
          'style-loader?sourceMap',
           'css-loader' // отключаем модули
        ],
        include: fs.realpathSync('./vendor/semantic')
      },      
      { 
        test: /\.(eot|png|ttf|woff|woff2|svg)$/,
        use: 'url-loader'
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
    new ExtractTextPlugin({
      filename: 'styles.css',
      allChunks: true
    })
  ]
};
