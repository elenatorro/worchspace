const chalk = require('chalk');

module.exports = {
  loading: {
    emoji: '🕛',
    message: 'Loading...',
    log: chalk.bold
  },
  success: {
    emoji: '💚',
    message: 'Success!',
    log: chalk.green.bold
  },
  info: {
    emoji: 'ℹ️',
    message: 'Info:',
    log: chalk.cyan
  },
  error: {
    emoji: '💔',
    message: 'Error:',
    log: chalk.red.bold
  },
  wrong: {
    emoji: '🤭',
    message: 'Ouch!',
    log: chalk.yellow
  },
  warning: {
    emoji: '⚠️',
    message: 'Warning:',
    log: chalk.yellow.bold
  }

}