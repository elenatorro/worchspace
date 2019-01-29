const execa = require('execa');

module.exports = async (config, name) => {
  return name
    ? await _execRepositoryCommand(config, name)
    : await _execAllCommands(config);
}

async function _execRepositoryCommand(config, name) {
  const repository = config.repositories[name];
  return repository.directory
    ? await execa.shell(`rm -rf ${repository.directory} && git clone ${repository.url} ${repository.directory}`)
    : await execa.shell(`rm -rf ${name} && git clone ${repository.url}`);
}

async function _execAllCommands(config) {
  const commandPromises = [];
  
  for (let name in config.repositories) {
    const repository = config.repositories[name];
    commandPromises.push(repository.directory
      ? await execa.shell(`rm -rf ${repository.directory} && git clone ${repository.url} ${repository.directory}`)
      : await execa.shell(`rm -rf ${name} && git clone ${repository.url}`)
    );
  }

  return Promise.all(commandPromises);
}