const execDefault = require('./default');
const execClone = require('./clone');
const execReset = require('./reset');

module.exports = {
  clone: execClone,
  config: execDefault,
  install: execDefault,
  run: execDefault,
  update: execDefault,
  async reset(config, name) {
    await execReset(config, name);
    await execDefault(config);
  },
  async default(config) {
    await execClone(config);
    await execDefault(config);
  }
}