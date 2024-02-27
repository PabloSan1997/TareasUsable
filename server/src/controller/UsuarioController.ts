import { Request, Response, NextFunction } from 'express';
import { UsuarioService } from '../services/UsuarioService';

const service = new UsuarioService();
export class UsuarioController {
	async addNewUser(req: Request, res: Response, next: NextFunction) {
		try {
			const nuevo = service.agregarUsuario(req.body);
			res.status(201).json(await nuevo);
		} catch (error) {
			next(error);
		}
	}
	async login(req: Request, res: Response, next: NextFunction) {
		try {
			const logear = service.login(req.body);
			res.json(await logear);
		} catch (error) {
			next(error);
		}
	}
	async deleteUser(req: Request, res: Response, next: NextFunction) {
		try {
			const token = req.headers.authorization as string;
			await service.eliminarUsuario(req.params.id_usuario, token);
			res.sendStatus(204);
		} catch (error) {
			next(error);
		}
	}
}