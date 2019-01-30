const execa = require('execa');
const log = require('../utils/log');

module.exports = async (config) => {
  log.info('Initialize Worchspace', true /*update*/);
  return await execa.shell(`mkdir .worchspace`);
}
