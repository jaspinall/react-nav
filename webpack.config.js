var path = require('path');

module.exports = {
  context: path.join(__dirname),
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'Navbar',
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.svg$/,
        loader: 'babel!svg-react',
      },
    ],
  },
};
