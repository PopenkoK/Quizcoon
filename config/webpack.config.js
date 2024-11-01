const path = require('node:path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'app.js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../templates/index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', ['@babel/preset-react', { runtime: 'automatic' }]],
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
      '@components': path.resolve(__dirname, '../src/components'),
    },
  },
};

module.exports = config;
