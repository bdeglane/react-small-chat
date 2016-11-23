var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    //app: ['babel-polyfill', path.join(__dirname, 'app', 'main.js')],
    app: path.join(__dirname, 'src', 'main.js'),
    vendor: ['react', 'react-dom']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js',
    // publicPath: path.join(__dirname, '/')
    publicPath: path.join('static')
  },
  resolve: {
    extensions: [
      '',
      '.js',
      '.json',
      '.css'
    ]
  },
  module: {
    loaders: [
      {
        test: /\.(css|scss|sass)$/,
        loader: ExtractTextPlugin.extract('css!sass')
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        plugins: ['transform-runtime'],
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      },
      {
        test: /\.json$/,
        loaders: [
          "json",
        ]
      }
    ]
  },
  plugins: [
    // Avoid publishing files when compilation fails
    //new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('./style/style.css', {
      allChunks: true
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
  ],
  stats: {
    colors: true
  }
};
