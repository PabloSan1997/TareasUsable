import express from 'express';
import { UsuarioController } from '../controller/UsuarioController';
import { joiHandle } from '../middlewares/joiHandle';
import { addUserJoi, loginJoi, selecUserJoi } from '../middlewares/schema/usuarioJoi';

export const usuarioRoute = express.Router();
const controller = new UsuarioController();

usuarioRoute.post('/addnewuser',
	joiHandle(addUserJoi, 'body'),
	controller.addNewUser);

usuarioRoute.post('/login',
	joiHandle(loginJoi, 'body'),
	controller.login);

usuarioRoute.delete('/:id_usuario',
	joiHandle(selecUserJoi, 'params'),
	controller.deleteUser);