const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud_nodejs_bd'

});

conexion.connect((error)=>{
    if(error){
        console.error('error de conexion, el error es: '+error);
        return
    }
    console.log('Conectado a la BD');
});
module.exports = conexion;