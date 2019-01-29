const chalk = require('chalk');
const logUpdate = require('log-update');

module.exports = {
  running() {
    logUpdate(`🕛  Running...`);
  },

  success() {
    logUpdate(chalk.green.bold(`💚  Done!`));
  },

  wrong() {
    logUpdate(chalk.bold(`🤭  Something went wrong:`));
  },

  failure(message) {
    console.log(chalk.red(`⚠️  Failed: ${message}`));
  },

  error(message) {
    if (typeof message === Object) {
      console.log(chalk.red.bold(`💔  Error:`, message ));
    } else {
      console.log(chalk.red.bold(`💔  Error: ${message}`));
    }
  }
}