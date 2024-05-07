const mysql2 = require('mysql2');
const dotenv = require('dotenv');

//Permite la configuración de DontEnv
dotenv.config();

//Crear la conexión de la base de datos de MySQL
const pool = mysql2.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

//Se extrae una conexión del pool por medio de una promesa
function obtenerConexion(){
    return pool.promise().getConnection();
}

module.exports = {
    obtenerConexion
}



