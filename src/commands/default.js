const execa = require('execa');

module.exports = async (config, name, action, command) => {
  return name
    ? await _execRepositoryCommand(config, name, action, command)
    : await _execAllCommands(config, action);
}

async function _execAllCommands(config, action) {
  const commandPromises = [];
  
  for (let name in config.repositories) {
    const repository = config.repositories[name];
    const commands = repository[action];
    const dir = repository.directory ? repository.directory : repository.name;
    
    for (let command in commands) {
      commandPromises.push(await execa.shell(`cd ${dir} && ${commands[command]} && cd ..`));
    }
  }

  return Promise.all(commandPromises);
}

async function _execRepositoryCommand(config, name, action, command) {
  return command
    ? await _execSingleRepositoryCommand(config, name, action, command)
    : await _execAllRepositoryCommands(config, name, action);
}

async function _execSingleRepositoryCommand(config, name, action, command) {
  const repository = config.repositories[name];
  const commands = repository[action];
  const dir = repository.directory ? repository.directory : repository.name;
  return await execa.shell(`cd ${dir} && ${commands[command]} && cd ..`);
  
}

async function _execAllRepositoryCommands(config, name, action) {
  const repository = config.repositories[name];
  const commands = repository[action];
  const commandPromises = [];
  const dir = repository.directory ? repository.directory : repository.name;
  
  for (let command in commands) {
    commandPromises.push(await execa.shell(`cd ${dir} && ${commands[command]} && cd ..`));
  }

  return Promise.all(commandPromises);
}