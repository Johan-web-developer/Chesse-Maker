const Usuario = require('../models/Usuario.js');
const bcryptjs = require('bcryptjs');


const getUser = (req,res)=>{
    res.json({
        "message": "landingpage"
    })
}

const postUser = async (req,res)=>{


    const {nombre,email,password,rol}= req.body;
    const usuario = new Usuario({nombre,email,password,rol});
    // Verificar si el correo existe//
    const existe = await Usuario.findOne({email});
    if(existe){
        return res.json({
            "message": "El correo ya existe"
        })
    }

    // Encriptar nuestra contraseña//
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);
    await usuario.save()
    res.json({
        "message": "post api",
        usuario
    })
}

const deleteUser =  (req,res)=>{
    res.json({
        "message": "delete api"
    })
};

const updateUser = (req,res)=>{
    res.json({
        "message": "put api"
    })
};

const patchUser = (req,res)=>{
    res.json({
        "message": "patch api"
    })
}

module.exports = {
    getUser,
    postUser,
    deleteUser,
    updateUser,
    patchUser
}