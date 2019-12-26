// Llama a los paquetes de Yargs
const opts = {
    base: {
        demand: true,
        alias: "b"
    },
    limite: {
        alias: "l",
        default: 10
    }
}



const argv = require('yargs')
    .command('listar', 'Imprime en consola tabla a multiplicar', opts)
    .command('crear', 'Crea un archivo en la carpeta "Multiplicar" con las tabla a multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}

/* Arriba se simplifico al declarar las opciones
const argv = require('yargs')
    .command('listar', 'Imprime en consola tabla a multiplicar', {
        base: {
            demand: true,
            alias: "b"
        },
        limite: {
            alias: "l",
            default: 10
        }
    })
    .command('crear', 'Crea un archivo en la carpeta "Multiplicar" con las tabla a multiplicar', {
        base: {
            demand: true,
            alias: "b"
        },
        limite: {
            alias: "l",
            default: 10
        }
    })
    .help()
    .argv;

    */