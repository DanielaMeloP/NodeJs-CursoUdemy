const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        // Valida si no es un numero
        if (!Number(base)) {
            reject("Dato ingresado no es un numero");
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            //console.log(`${base} * ${i} = ${base * i}`);
            // Concatena el valor
            data += `${base} * ${i} = ${base * i}\n`;
        }

        // El primer parametro es la ruta o nombre del archivo
        // El segundo es la información a guardar
        // El tercer valor es si existe algun error
        fs.writeFile(`Tablas - Resultados/tabla-${base}-multiplicado-hasta-el-${limite}.txt`, data, (err) => {
            if (err)
                reaject(err)
            else
                resolve(`tabla-${base}.txt`);
            //console.log(`Archivo creado - tabla-${base}`);
        });

    })
}

let listarTabla = (base, limite = 10) => {

    console.log('======================================'.green);
    console.log(`=========== TABLA DE ${base} ===============`.green);
    console.log('======================================'.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}\n`);
    }
}



// Para exportar una funcion
// si hay mas funciones, se separan por ","
module.exports = {
    crearArchivo,
    listarTabla
}