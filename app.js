const argv = require('./config/main').argv;
var Color = require('color');

//console.log(argv);

//Traego las promesas de multiplicar   
let { crearArchivo, listarDatos } = require('./multiplicar/multiplicar')

let comando = argv._[0];

//console.log(`Base: ${argv.base}`);

switch (comando) {
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => { console.log(`Archivo ${archivo} fue creado correctamente`) })
            .catch(err => {
                console.log(err);
            })
        break;
    case 'listar':
        listarDatos(argv.base, argv.limite)
            .then(() => console.log(datos))
            .catch(err => console.log(err))
        break;
    default:
        console.log(`El comando ${comando} no se encuentra`);
        break;
}