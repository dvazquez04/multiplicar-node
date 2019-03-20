const opt = {
    base: {
        alias: 'b',
        require
    },
    limite: {
        alias: 'lim',
        default: 30
    }
}

const argv = require('yargs')
    .command('listar', 'método para pintar una lista de información', opt)
    .command('crear', 'método para crear un objeto', opt)
    .argv;


module.exports = {
    argv
}