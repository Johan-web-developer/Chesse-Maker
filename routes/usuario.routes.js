const {Router} = require('express');
const {getUser, postUser,deleteUser, updateUser,patchUser} = require('../controllers/usuario.controller.js');

const router = Router();
router.get("/", getUser);
router.post("/",postUser);
router.delete("/",deleteUser);
router.put("/",updateUser);
router.patch("/",patchUser);

module.exports = router;