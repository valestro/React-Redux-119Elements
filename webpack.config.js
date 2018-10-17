var path = require('path');
var webpack = require('webpack');

module.exports = {
    devServer: {
        inline: true,
        contentBase: './dist',
        port: 3000
    },
    devtool: 'cheap-module-source-map',
    entry: './dev/js/index.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    output: {
        path: 'dist',
        filename: 'static/js/bundle.min.js'
    },
    plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            'NODE_ENV': '"production"'
          }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
          mangle: true,
          sourcemap: false,
          compress: {
            warnings: false,
          },
          output:{
            comments: false,
          },
        }),
      ]
};
