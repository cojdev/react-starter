const path = require('path');

const src = 'src';
const dist = 'public';

module.exports = {
  entry: `./${src}/js/index.jsx`,

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, `js`),
    publicPath: `js`,
  },

  devtool: 'source-map',

  devServer: {
    contentBase: dist,
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
