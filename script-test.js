/* eslint-disable no-undef */
const shell = require('shelljs');

console.log("Olá mundo");

shell.exect('git diff --name-only branch-scripts-testes..main');