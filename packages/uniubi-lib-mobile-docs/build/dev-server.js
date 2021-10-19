const ora = require('ora');
const path = require('path');
const chalk = require('chalk');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const WebpackDevServer = require('webpack-dev-server');

const open = require('./open');
const conf = require('./conf');
const webpackDevConf = require('./webpack.dev.config');
const webpackBaseConf = require('./webpack.base.config');
const formatWebpackMessage = require('./format_webpack_message');
const { getProjectRoot, prepareUrls, formatTime } = require('./util');

const serveSpinner = ora('Starting build...').start();

const projectRoot = getProjectRoot();
const host = '0.0.0.0';
const port = 8002;
const protocol = 'http';
const urls = prepareUrls(protocol, host, port);
const webpackConf = webpackMerge(webpackBaseConf, webpackDevConf);

// webpack 入口增加热更新模块，对多入口依此进行处理
for (const key in webpackConf.entry) {
  const entryItem = webpackConf.entry[key];
  if (Array.isArray(entryItem)) {
    // 为运行时代码增加热更新
    entryItem.unshift(require.resolve('webpack/hot/dev-server'));
    // 客户端热更新重载
    entryItem.unshift(`${require.resolve('webpack-dev-server/client')}?/`);
  } else {
    webpackConf.entry[key] = [
      `${require.resolve('webpack-dev-server/client')}?/`,
      require.resolve('webpack/hot/dev-server'),
      entryItem,
    ];
  }
}

const compiler = webpack(webpackConf);

// 获取开发服务配置
const webpackDevServerConf = require('./devServer.conf')({
  publicPath: '/',
  contentBase: path.join(projectRoot, conf.output),
  protocol,
  host,
  publicUrl: urls.lanUrlForConfig,
});

const server = new WebpackDevServer(compiler, webpackDevServerConf);
// 监听服务
server.listen(port, host, (err) => {
  console.log(port, host);
  if (err) {
    return console.log(err);
  }
});

// 是否为初次编译
let isFirstCompile = true;

compiler.hooks.invalid.tap('InvalidHook', (filepath) => {
  console.log(chalk.grey(`[${formatTime()}]Modified: ${filepath}`));
  serveSpinner.text = 'Compiling...🤡~';
  serveSpinner.render();
});

compiler.hooks.done.tap('DoneHook', (stats) => {
  const { errors, warnings } = formatWebpackMessage(stats.toJson({}, true));
  const isSuccess = !errors.length;

  if (errors.length) {
    errors.splice(1);
    serveSpinner.fail(chalk.red('Compile failed!\n'));
    console.log(chalk.red(errors.join('\n\n')));
    console.log();
    return;
  }

  if (warnings.length && isFirstCompile) {
    serveSpinner.warn(chalk.yellow(`Compile Warnning \n`));
    console.log(chalk.yellow(`${warnings.join('\n\n')}\n`));
  }

  if (isSuccess) {
    serveSpinner.succeed(chalk.green('Compile successfully!\n'));
  }

  if (isFirstCompile) {
    console.log(chalk.cyan(`> Listening at ${urls.lanUrlForTerminal}`));
    console.log(chalk.cyan(`> Listening at ${urls.localUrlForBrowser}`));
    console.log();
    open(urls.localUrlForBrowser);
    isFirstCompile = false;
  }
});
