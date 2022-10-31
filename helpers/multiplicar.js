const fs = require('fs')
const crearArchivo = async(base = 5, list = false, hasta) => {
    try {
        let salida = ''
        for (let index = 1; index <= hasta; index++) {
            salida += (`${base} x ${index} = ${base*index}\n`);   
        }
        fs.writeFileSync(`./salida/tabla${base}.txt`,salida);
        if(list){
            console.log(salida);
        }
        return 'Tabla en formato txt creada'
    } catch (error) {
        return err
    }
    
}

module.exports = {crearArchivo};