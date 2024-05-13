// Se obtiene la conexión
const { obtenerConexion } = require('../conexion');

// Se crea una función para insertar los movimientos 
async function regisMovimiento(usuario_id, textOriginal, opcion, textoCifrado) {
    // Verificar si el usuario ha iniciado sesión
    if (!usuario_id) {
        console.error('Error: El usuario no ha iniciado sesión, por lo que no se registra en la bd');
        return; // Salir de la función sin realizar la consulta a la base de datos
    }

    const conexion = await obtenerConexion();
    try {
        await conexion.query('INSERT INTO historialtext(usuario_id, textOriginal, opcion, textoCifrado) VALUES (?, ?, ?, ?)',
            [usuario_id, textOriginal, opcion, textoCifrado]
        );
        console.log('Movimiento Guardado correctamente');
    } catch (error) {
        console.error('Error al registrar movimiento', error);
        throw error;
    } finally {
        conexion.release(); // Libera la conexión
    }
}

module.exports = regisMovimiento;

