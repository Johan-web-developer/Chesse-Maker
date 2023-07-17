const express = require('express');
const cors = require('cors');
const {dbConnection} = require('../database/config.js');
class Server {
    constructor() {
        this.app = express();
        //Middleware
        this.middleware();
        this.port = process.env.PORT
        this.usuarioPath = "/api/users";
        //CONECTAR BASE DE DATOS MONGO//
        this.connectDB();
         //Routes
        this.routes();
    }
    async connectDB(){
        await dbConnection();
    }
    middleware() {
        //CORS 
        this.app.use(cors());
        //Leer y parsear JSON en BODY//
        this.app.use(express.json());
        //Public Directory
        this.app.use(express.static('public'));
    }
    routes() {
            this.app.use(this.usuarioPath, require('../routes/usuario.routes.js'));
        }
        listen(){
            this.app.listen(this.port, ()=>{
                            console.log(`Server is running on port : ${this.port}`);
                        })
        }
}


module.exports = Server; 