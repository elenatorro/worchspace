#!/usr/bin/env node

'use strict';

const meow = require('meow');
const CLI_DESCRIPTION = require('./constants/cli-description');
const CLI_FLAGS = require('./constants/cli-flags');
const cli = meow(CLI_DESCRIPTION, CLI_FLAGS);

module.exports = cli;