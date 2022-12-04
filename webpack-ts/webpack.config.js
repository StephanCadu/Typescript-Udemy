const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/app.ts',
  output: {
    filename: 'app.min.js',
    path: path.join(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [{
      test: /\.ts$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  }
}