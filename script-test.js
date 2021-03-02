/* eslint-disable no-undef */
/* eslint-disable no-console */
const shell = require('shelljs');

console.log('Ola mundo');


const resultado = shell.exec('git diff --name-only branch-scripts-testes..main', { silent: true })

console.log(resultado);