// Se carga archivo de configuracion
const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./Multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case "listar":
        console.log("Listar");
        listarTabla(argv.base, argv.limite);
        break;

    case "crear":
        console.log("Crear");
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado - tabla-${archivo}`.green))
            .catch(e => console.log(e));
        break;

    default:
        console.log("Commando no reconocido");
        break;
}