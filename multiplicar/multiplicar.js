const fs = require('fs');

///CREAR PROMESAS PARA CREAR Y LISTAR DATOS DE UNA TABLA DE MULTIPLICAR

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        let datos = '';

        if (!Number(base)) {
            reject(`El dato ${base} no es númerico`);
        } else if (!Number(limite)) {
            reject(`El dato ${limite} no es númerico`);
        }

        for (let x = 1; x <= limite; x++) {
            datos += `${x} * ${base} = ${x * base}\n`;
        }

        fs.writeFile(`./tablas/tabla_${base}.txt`, datos, (err) => {
            if (err) reject(err);
            resolve(`tabla_${base}.txt`);
        });
    })
}

let listarDatos = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El dato ${base} no es númerico`);
        } else if (!Number(limite)) {
            reject(`El dato ${limite} no es númerico`);
        }

        let datos = '';

        for (let x = 1; x <= limite; x++) {
            datos += `${x} * ${base} = ${x * base}\n`;
        }
        console.log(datos);
    })
}

module.exports = {
    crearArchivo,
    listarDatos
}