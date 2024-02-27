import { Request, Response, NextFunction } from 'express';
import { TareaService } from '../services/TareaService';


const servicio = new TareaService();
export class TareasController {
	async addTarea(req: Request, res: Response, next: NextFunction) {
		try {
			const token = req.headers.authorization as string;
			const nuevaTarea = servicio.agregarTarea(req.body, token);
			res.status(201).json(await nuevaTarea);
		} catch (error) {
			next(error);
		}
	}
	async leerTareas(req: Request, res: Response, next: NextFunction) {
		try {
			const token = req.headers.authorization as string;
			const tarea = servicio.leerTareas(token);
			res.json(await tarea);
		} catch (error) {
			next(error);
		}
	}
	async eliminarTarea(req: Request, res: Response, next: NextFunction) {
		try {
			const token = req.headers.authorization as string;
			await servicio.borrarTarea(token, req.params.id_tarea);
			res.sendStatus(204);
		} catch (error) {
			next(error);
		}
	}
	async editarTarea(req: Request, res: Response, next: NextFunction) {
		try {
			const token = req.headers.authorization as string;
			const respuesta = servicio.editarTareaEstado(token, req.params.id_tarea, req.body);
			res.json(await respuesta);
		} catch (error) {
			next(error);
		}
	}
}