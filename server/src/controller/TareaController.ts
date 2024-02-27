import { Request, Response, NextFunction } from 'express';
import { TareaService } from '../services/TareaService';


const servicio = new TareaService();
export class TareasController{
    async addTarea(req:Request, res:Response, next:NextFunction){
        try {
            const token = req.headers.authorization as string;
            const nuevaTarea = servicio.agregarTarea(req.body, token);
            res.status(201).json(await nuevaTarea);
        } catch (error) {
            next(error);
        }
    }
    async leerTareas(req:Request, res:Response, next:NextFunction){
        try {
            const token = req.headers.authorization as string;
            const tarea = servicio.leerTareas(token);
            res.json(await tarea);
        } catch (error) {
            next(error);
        }
    }
}