const path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    bundle: './src/app.jsx'
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].js'
  },
  devServer: {
    contentBase: './public', //Relative directory for base of server
    hot: true, //Live-reload
    inline: true,
    port: 3000, //Port Number
    host: 'localhost' //Change to '0.0.0.0' for external facing server
  },
  plugins: [
    // hotモードに必要なプラグイン
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [
      { test: /\.css$/, loaders: ['style-loader','css-loader'] },
      {
        loader: 'babel',
        exclude: /node_modules/,
        test: /\.js[x]?$/,
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
