const yaml = require('js-yaml');
const fs = require('fs');

const settings = require('./constants/settings');
const commands = require('./commands/commands');
const log = require('./utils/log');
const errors = require('./utils/errors');

module.exports = async (input, /** flags*/) => {
  try {
    log.loading('Running commands...');

    const action = input[0];
    const name = input[1];
    const command = input[2];
    
    const configFile = fs.readFileSync(
      settings.CONFIG_FILE,
      settings.CONFIG_FILE_FORMAT
    );

    const config = yaml.safeLoad(configFile);
    
    if (!action) {
      await commands.default(config);
    } else {
      await commands[action](config, name, action, command);
    }

    log.success('Done!');
  } catch (error) {
    errors.command(error);
  }
}