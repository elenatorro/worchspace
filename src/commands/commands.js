const execDefault = require('./default');
const execClone = require('./clone');
const execReset = require('./reset');
const execInit= require('./init');
const execCreate = require('./create');
const execGenerate = require('./generate');

module.exports = {
  clone: execClone,
  config: execDefault,
  create: execCreate,
  generate: execGenerate,
  install: execDefault,
  run: execDefault,
  update: execDefault,
  init: execInit,
  async reset(config, name) {
    await execReset(config, name);
    await execDefault(config);
  },
  async default(config) {
    await execClone(config);
    await execDefault(config);
  }
}