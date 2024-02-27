import express from "express";
import { UsuarioController } from "../controller/UsuarioController";

export const usuarioRoute = express.Router();
const controller = new UsuarioController();

usuarioRoute.post('/addnewuser', controller.addNewUser);
usuarioRoute.post('/login', controller.login);
usuarioRoute.delete('/:id_usuario', controller.deleteUser);