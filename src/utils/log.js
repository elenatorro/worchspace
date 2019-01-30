const logUpdate = require('log-update');
const logger = require('../constants/logger');

module.exports = {
  loading: _log.bind(logger.loading),
  success: _log.bind(logger.success),
  info: _log.bind(logger.info),
  wrong: _log.bind(logger.wrong),
  warning: _log.bind(logger.warning),
  error: _log.bind(logger.error)
}

function _log(message=this.message, update) {
  const logMessage = this.log(`${this.emoji}  ${message}`);
  
  return update
    ? logUpdate(logMessage)
    : console.log(logMessage);
}