# Worchspace

Orchestration tool for local development

🎶🎻🎶🎷👩‍💻🎺🎶🥁🎶

## Worchspace config

.worchspace.yml structure example

```yml
repositories:
  REPOSITORY_NAME_1:
    directory: '' # optional
    url: 'url'
    install:
      COMMAND_NAME_1: '...'
      COMMAND_NAME_2: '...'
    update:
      COMMAND_NAME_1: '...'
      COMMAND_NAME_2: '...'
    reset:
      COMMAND_NAME_1: '...'
      COMMAND_NAME_2: '...'
    run:
      COMMAND_NAME_1: '...'
    test:
      COMMAND_NAME_1: '...'
  REPOSITORY_NAME_2:
    url: 'url'
    config:
      COMMAND_NAME_1: '...'
      COMMAND_NAME_2: '...'
    install:
      COMMAND_NAME_1: '...'
      COMMAND_NAME_2: '...'
    run:
      COMMAND_NAME_1: '...'
    # test:
    #   COMMAND_NAME_1: '...'

general:
  config:
    COMMAND_NAME_1: '...'
    COMMAND_NAME_2: '...'

templates:
  TEMPLATE_EXAMPLE:
    path: './components'
    extension: 'js'
    case: 'camelCase'
```

## Commands

### Initializaction

Creates a `.workspace` directory.

```sh
$ worchspace init
```

### Default

Initialize default configuration. It clones and executes default commands.

```sh
$ worchspace
```

### Clone

```sh
$ worchspace clone <?repository>
```

### Reset

Remove selected repositories, clone them and config them again.

```sh
$ reset <?repository> <?command>
```

### Config

Execute `config` commands

```sh
$ config <?repository> <?command>
```

### Install

Execute `install` commands

```sh
$ install <?repository> <?command>
```

### Run

Execute `run` commands

```sh
$ install <?repository> <?command>
```

## General Config

To be defined