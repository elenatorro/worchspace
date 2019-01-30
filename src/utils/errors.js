const log = require('./log');

module.exports = {
  command(error) {
    log.wrong();
    
    if (error.cmd) {
      log.warning(error.cmd);
    }

    if (error.stderr) {
      log.error(error.stderr);
    }

    if (!error.stderr && !error.cmd) {
      log.error(error);
    }
  }
}