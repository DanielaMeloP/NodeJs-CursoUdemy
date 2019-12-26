// REQUIREDS

/*
const fs = require('fs'); => Propia de Node
const fs = require('express'); => es un paquete externo, no taivo de node
const fs = require('./PathArchivo'); => son archivos de local del proyecto
*/

// Importar una funcion externa
// const multiplicar = require('./Multiplicar/multiplicar');

const { crearArchivo } = require('./Multiplicar/multiplicar');

//let base = "20";

/*
// SE CAMBIO EL CODIGO AL ARCHIVO MULTIPLICAR 

let data = '';

for (let i = 1; i <= 10; i++) {
    //console.log(`${base} * ${i} = ${base * i}`);
    // Concatena el valor
    data += `${base} * ${i} = ${base * i}\n`;
}

// El primer parametro es la ruta o nombre del archivo
// El segundo es la información a guardar
// El tercer valor es si existe algun error
fs.writeFile(`Tablas - Resultados/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`Archivo creado - tabla-${base}`);
});

*/

//console.log(multiplicar);

// console.log(process.argv);
let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];

//console.log(base);

crearArchivo(base)
    .then(archivo => console.log(`Archivo creado - tabla-${base}`))
    .catch(e => console.log(e));