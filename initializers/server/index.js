const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')

const config = require('../../webpack.config')
const path = require('path')

const host = 'localhost'
const port = 3000

new WebpackDevServer(webpack(config), {
  hot: true,
  historyApiFallback: true,
  publicPath: config.output.publicPath,
  contentBase: path.resolve(process.cwd(), 'public'),
  stats: {
    colors: true
  }
}).listen(port, host, (err) => {
  if (err) {
    console.log(err)
  }

  console.log(`Listening at host: ${host}, port: ${port}`)
})
