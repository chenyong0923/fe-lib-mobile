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
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            options: {
              rootMode: 'upward',
            },
          },
          {
            test: /\.tsx?$/,
            exclude: /(node_modules|bower_components)/,
            use: [
              {
                loader: 'babel-loader',
                options: {
                  rootMode: 'upward',
                },
              },
              {
                loader: 'ts-loader',
                options: {
                  transpileOnly: true,
                },
              },
            ],
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
            include: [/node_modules/], // antd(node_modules文件)目录
            use: [
              {
                loader: 'style-loader',
                options: {
                  // 把 antd 样式插入 head 顶部，使 css modules 定义的样式能覆盖 antd 样式
                  insert: function insertAtTop(element) {
                    const parent = document.querySelector('head');
                    const lastInsertedElement =
                      window._lastElementInsertedByStyleLoader;

                    if (!lastInsertedElement) {
                      parent.insertBefore(element, parent.firstChild);
                    } else if (lastInsertedElement.nextSibling) {
                      parent.insertBefore(
                        element,
                        lastInsertedElement.nextSibling,
                      );
                    } else {
                      parent.appendChild(element);
                    }

                    window._lastElementInsertedByStyleLoader = element;
                  },
                },
              },
              'css-loader',
            ],
          },
          {
            test: /\.(css|less)(\?.*)?$/,
            exclude: [/node_modules/],
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[local]__[hash:base64:5]',
                  },
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
      '@': path.resolve(__dirname, '../'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${siteRoot}/index.html`,
    }),
  ],
};
