///CREAR PROMESAS

const fs = require('fs');
var colors = require('colors');
let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        //Validaciones númericas
        if (!Number(base)) {
            reject(`La base: El datos ${base} introducido no es númerico`);
        } else if (!Number(limite)) {
            reject(`El limite: El datos ${base} introducido no es númerico`);
        }

        let datos = '';
        for (let x = 1; x <= limite; x++) {
            datos += `${x} * ${base} = ${x * base}\n`;
        }


        fs.writeFile(`./tablas/tabla_${base}.txt`, datos, (err) => {
            if (err) reject(err);
            resolve(colors.green(`tabla_${base}.txt.`));
        });
    })
}

let listarDatos = (base, limite) => {
    return new Promise((resolve, reject) => {
        //Validaciones númericas
        if (!Number(base)) {
            reject(`La base: El datos ${base} introducido no es númerico`);
        } else if (!Number(limite)) {
            reject(`El limite: El datos ${base} introducido no es númerico`);
        }

        let datos = '';
        for (let x = 1; x <= limite; x++) {
            datos += colors.blue(`${x} * ${base} = ${x * base}\n`);
        }
        console.log(datos);
    })
}


module.exports = {
    crearArchivo,
    listarDatos
}