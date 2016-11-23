var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var webserver = require('gulp-webserver');
var path = require('path');

//var dist = path.join(__dirname, 'dist', '/');
var dist = path.join('./dist', '/');

gulp.task('default', ['server']);
// Build and watch cycle (another option for development)
// Advantage: No server required, can run app from filesystem
// Disadvantage: Requests are not blocked until bundle is available,
//               can serve an old app on refresh
gulp.task('build:dev', ['webpack:build-dev'], function () {
  gulp.watch(['src/**/*', 'style/**/*'], ['webpack:build-dev']);
});

// Production build
gulp.task('build', ['webpack:build']);

gulp.task('webpack:build', function (callback) {
  // modify some webpack config options
  var productionConfig = Object.create(webpackConfig);
  productionConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }));
  productionConfig.plugins.push(
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
    }));

  webpack(productionConfig, function (err, stats) {
    if (err) throw new gutil.PluginError('webpack:build', err);
    gutil.log('[webpack:build]', stats.toString({
      colors: true
    }));
    callback();
  });
});

// modify some webpack config options
var myDevConfig = Object.create(webpackConfig);
myDevConfig.devtool = 'sourcemap';
myDevConfig.debug = true;
myDevConfig.plugins.push(
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  }));

// create a single instance of the compiler to allow caching
var devCompiler = webpack(myDevConfig);

// development build
gulp.task('webpack:build-dev', function (callback) {
  // run webpack
  devCompiler.run(function (err, stats) {
    if (err) throw new gutil.PluginError('webpack:build-dev', err);
    gutil.log('[webpack:build-dev]', stats.toString({
      colors: true
    }));
    callback();
  });
});

// simple webserver
gulp.task('server', function () {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: 'http://localhost:8080/',
      port: 8080,
      fallback: 'index.html'
    }));
});