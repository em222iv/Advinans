const webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/app.jsx',
  ],
  https: true,
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js',
  },
  devtool: "source-map",
  module: {
    loaders: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      },
      { test: /\.json$/, loader: 'json-loader'},
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.md$/, loader: "html!markdown" }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin({
      compress: {
                warnings: false
            }
    }),
    new webpack.ProvidePlugin({
      'React': 'react',
      'ReactDOM': 'react-dom'
    })
  ],
  devServer: {
    contentBase: 'public',
    hot: true,
    inline: true,
    port: 8080,
    host: 'localhost',
    stats: {
      warnings:false
    }
  }
};
