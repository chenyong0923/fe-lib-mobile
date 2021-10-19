const ora = require('ora');
const fs = require('fs-extra');
const path = require('path');

const spinner = ora('Copy h5 website to docs...');

spinner.start();

fs.emptyDirSync(path.resolve(__dirname, '../dist/h5'));

fs.copy(
  path.resolve(__dirname, '../../uniubi-lib-mobile-demo/dist'),
  path.resolve(__dirname, '../dist/h5'),
)
  .then(() => {
    spinner.stop();
  })
  .catch((err) => {
    console.error(err);
    spinner.stop();
  });
