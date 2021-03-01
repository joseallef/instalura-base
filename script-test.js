/* eslint-disable no-undef */
const shell = require('shelljs');

console.log("Ola mundo");

shell.exec('git diff --name-only branch-script-testes..main');