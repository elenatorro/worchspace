const execa = require('execa');
const log = require('../utils/log');
const settings = require('../constants/settings');

module.exports = async (config, name) => {
  const ROOT = config.root || settings.CONFIG_ROOT;
  const DIR = config.worchspace_dir || settings.CONFIG_WORCHSPACE_DIR;
  const filetype = config.templates[name];
  const filename = `${name}.${filetype.extension}`;
  const filepath = `${ROOT}/${DIR}/${filename}`;
  
  try {
    execa.shell(`touch ${filepath}`);
    log.info(`File ${filepath} created successfully`);
  } catch (error) {
    log.error(error);
  }
}
