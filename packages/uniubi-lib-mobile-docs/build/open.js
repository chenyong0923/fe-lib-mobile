const { exec } = require('child_process');

// 使用命令行打开指定文件
//
module.exports = function open(target, appName, callback) {
  let opener;

  if (typeof appName === 'function') {
    callback = appName;
    appName = null;
  }

  switch (process.platform) {
    // macOS
    case 'darwin':
      if (appName) {
        opener = `open -a "${escape(appName)}"`;
      } else {
        opener = 'open';
      }
      break;
    // windows
    case 'win32':
      if (appName) {
        opener = `start "" "${escape(appName)}"`;
      } else {
        opener = 'start ""';
      }
      break;
    // 其他
    default:
      if (appName) {
        opener = `xdg-open "" "${escape(appName)}"`;
      } else {
        opener = 'xdg-open ""';
      }
      break;
  }

  if (process.env.SUDO_USER) {
    opener = `sudo -u ${process.env.SUDO_USER} ${opener}`;
  }
  return exec(`${opener} "${escape(target)}"`, callback);
};

function escape(s) {
  return s.replace(/"/g, '\\"');
}
