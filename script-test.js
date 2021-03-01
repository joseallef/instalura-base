// eslint-disable-next-line no-undef
const shell = require('shelljs');

console.log('Ola mundo');

const resultado = shell.exec('git diff --name-only branch-script-testes..main', { silent: true })

console.log(resultado);