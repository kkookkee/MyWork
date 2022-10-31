
const {crearArchivo} = require('./helpers/multiplicar.js')
const argv = require('./config/yargs.js')

crearArchivo(argv.b,argv.l,argv.h)
    .then(nombre=>console.log(nombre))
    .catch(err => console.log(err))

// const [,,arg] = process.argv;
// const [,base] = arg.split('=')
// console.log(process.argv);
// console.log(argv);
