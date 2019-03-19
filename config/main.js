const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        require,
        alias: 'l',
        default: 4
    }
}


const argv = require('yargs')
    .command('listar', 'Imprime lista de archivos', opts)
    .command('crear', 'Imprime lista de archivos', opts)
    .argv;

module.exports = {
    argv
}