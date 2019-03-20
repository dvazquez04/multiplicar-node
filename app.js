const argv = require("./config/main").argv;

//const argv = require("./config/main").argv;

let { crearArchivo, listarDatos } = require('./multiplicar/multiplicar');

//console.log(argv);

//console.log(require('./config/main').argv);

switch (argv._[0]) {
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => { console.log(`El archivo ${archivo} fue creado correctamente`) })
            .catch(err => { console.log(err) })
        break;
    case 'listar':
        listarDatos(argv.base, argv.limite)
            // .then(archivo => { console.log(`El archivo ${archivo} fue creado correctamente`) })
            // .catch(err => { console.log(err) })
        break;
    default:
        console.log(`No se encontro la funcion ${argv._[0]}`);
        break;
}