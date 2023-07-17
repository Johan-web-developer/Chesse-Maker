const Usuario = require('../models/Usuario.js');

const getUser = (req,res)=>{
    res.json({
        "message": "landingpage"
    })
}

const postUser = async (req,res)=>{
    const body= req.body;
    const usuario = new Usuario(body);
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