const webpack = require('webpack')

module.exports = {
  plugins: [new webpack.DefinePlugin({ 'global.GENTLY': false })],
  externals: {
    'chrome-aws-lambda': 'chrome-aws-lambda',
  },
}
