const usuarioModel = require('../models/usuarioModels');

async function registrarUsuario(nombre,email,password){
    const usuario = await usuarioModel.registrarUsuario(nombre, email, password);
    return  usuario;
}

async function obtenerPorNombre(nombre) {
    const user = await usuarioModel.obtenerPorNombre(nombre);
    console.log(user);
    return  user;
}

async function obtenerPorId(id) {
    const user = await usuarioModel.obtenerPorId(id);
    return  user;
}


module.exports ={
    registrarUsuario,
    obtenerPorNombre,
    obtenerPorId
};