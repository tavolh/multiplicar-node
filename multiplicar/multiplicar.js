// requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('================='.green);
    console.log(`Tabla de: ${base}`.red);
    console.log('================='.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            //    console.log(`${base} * ${i} = ${base * i}`);
            data += (`${base} * ${i} = ${base * i}\n`);
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) rekect(err)
            else
                resolve(`tablas/tabla-${base}-al-${limite}.txt`)

        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}