const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { getProjectRoot } = require('./util');

const projectRoot = getProjectRoot();
const siteRoot = path.join(projectRoot);

module.exports = {
  entry: {
    index: `${siteRoot}/app.tsx`,
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.tsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'ts-loader',
          },
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            options: {
              rootMode: 'upward',
            },
          },
          {
            test: /\.html$/,
            loader: 'html-withimg-loader',
          },
          {
            test: /\.yml$/,
            loader: 'json-loader!yaml-loader',
          },
          {
            test: /\.md$/,
            use: [
              {
                loader: 'babel-loader',
                options: {
                  rootMode: 'upward',
                },
              },
              `${path.join(__dirname, './addImportLoader.js')}`,
            ],
          },
          {
            test: /\.(css|less)(\?.*)?$/,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                  // modules: true
                },
              },
              {
                loader: 'postcss-loader',
                options: {
                  ident: 'postcss',
                  plugins: () => [
                    autoprefixer({
                      overrideBrowserslist: [
                        'ie >= 9',
                        'Chrome >= 21',
                        'Firefox >= 1',
                        'Edge >= 13',
                        'last 3 versions',
                      ],
                      flexbox: 'no-2009',
                    }),
                  ],
                },
              },
              'less-loader',
            ],
          },
          {
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
            loader: 'file-loader',
            options: {
              name: 'media/[name].[ext]',
            },
          },
          {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'file-loader',
            options: {
              limit: 3000,
              name: 'fonts/[name].[ext]',
            },
          },
          {
            test: /\.(png|jpe?g|gif|bpm|svg)(\?.*)?$/,
            loader: 'url-loader',
            options: {
              limit: 3000,
              name: 'img/[name].[ext]',
            },
          },
          {
            exclude: /\.js|\.css|\.less|\.html|\.json|\.ejs$/,
            loader: 'url-loader',
            options: {
              limit: 2000,
              name: 'ext/[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@md': path.resolve(__dirname, '../markdown/'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${siteRoot}/index.html`,
    }),
  ],
};
