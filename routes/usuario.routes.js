const {Router} = require('express');
const {check} = require('express-validator');
const { validateDocuments } = require('../middlewares/validate.documents.js');
const {getUser, postUser,deleteUser, updateUser,patchUser} = require('../controllers/usuario.controller.js');

const Role = require('../models/Role.js');

const router = Router();
router.get("/", getUser);
router.post("/",[
    check('nombre','El nombre no es valido').not().isEmpty(),
    check('email', 'El email no es valido').isEmail(),
    check('password', 'Tiene que contener minimo 8 caracteres').isLength({ min: 8 }),
/*     check('rol', 'El rol no es valido').isIn(['ADMIN', 'USER']), */
    check('rol').custom(async(rol= '')=>{
        const existeRol = await Role.findOne({rol});
        if (!existeRol) {
            throw new Error(`El rol ${rol} no esta registrado en bd`);
        }
    }),
    validateDocuments
],postUser);
router.delete("/",deleteUser);
router.put("/",updateUser);
router.patch("/",patchUser);

module.exports = router;