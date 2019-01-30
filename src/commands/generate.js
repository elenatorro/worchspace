const execa = require('execa');
const log = require('../utils/log');
const settings = require('../constants/settings');
const changeCase = require('change-case');
const chalk = require('chalk');

module.exports = async (config, name) => {
  const ROOT = config.root || settings.CONFIG_ROOT;
  const DIR = config.worchspace_dir || settings.CONFIG_WORCHSPACE_DIR;
  const filetype = config.templates[name];
  const path = filetype.path || settings.CONFIG_ROOT;
  const nameCase = filetype.case || settings.CONFIG_CASE;
  const filename = `${name}.${filetype.extension}`;
  const distname = `${changeCase[nameCase](name)}.${filetype.extension}`;
  const filepath = `${ROOT}/${DIR}/${filename}`;
  const distpath = `${path}/${distname}`;
  
  try {
    const nameHighlight = chalk.white.underline(filename);
    const pathHighlight = chalk.white.underline(filepath);
    const distHighlight = chalk.white.underline(distpath);

    execa.shell(`cp ${filepath} ${distpath}`);

    log.info(`File ${nameHighlight} generated from ${pathHighlight} in ${distHighlight}`);
  } catch (error) {
    log.error(error);
  }
}
