import express from "express";
import { UsuarioController } from "../controller/UsuarioController";
import { joiHandle } from "../middlewares/joiHandle";
import { addTareaJoi } from "../middlewares/schema/tareaJoi";
import { loginJoi } from "../middlewares/schema/usuarioJoi";

export const usuarioRoute = express.Router();
const controller = new UsuarioController();

usuarioRoute.post('/addnewuser',
    joiHandle(addTareaJoi, 'body'),
    controller.addNewUser);

usuarioRoute.post('/login',
    joiHandle(loginJoi, 'body'),
    controller.login);

usuarioRoute.delete('/:id_usuario',
    joiHandle(loginJoi, 'params')
    , controller.deleteUser);