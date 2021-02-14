const isDevelopment = process.env.NODE_ENV !== 'production'
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './index.js',
  mode: isDevelopment ? 'development' : 'production',
  output: {
    filename: isDevelopment ? '[name].js' : '[name].[hash].js'
  },
  plugins: [new CleanWebpackPlugin()]
}