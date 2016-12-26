var webpack = require('webpack');
var path = require("path");

module.exports = {
  entry: [
      'webpack-dev-server/client?http://localhost:8080', // Setting the URL for the hot reload
      'webpack/hot/only-dev-server', // Reload only the dev server
      './src/index.js'
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel'
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: '/assets/', // It will serve the resources (entries) from public path (Relative to your server)
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist', // Path that will be served with resources
    hot: true // Turn on hot reloading
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin() // Wire in the hot loading plugin
  ]
};
