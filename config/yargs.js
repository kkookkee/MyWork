const argv = require('yargs')
             .option('b',{
                alias: 'base',
                type:'number',
                demandOption: true,
                describe: 'Base de la tabla de multiplicar'
             })
             .option('l',{
               alias: 'listado',
               type:'boolean',
               demandOption: true,
               default: false
            })
            .option('h',{
                alias:'hasta',
                type:'number',
                demandOption: true,
            })
             .check((argv,options)=>{
                if(isNaN(argv.b)) {
                    throw 'La base tiene que ser un número'
                }
                return true
             })  
            .argv;

module.exports = argv;