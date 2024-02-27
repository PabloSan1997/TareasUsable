import express from 'express';
import { TareasController } from '../controller/TareaController';


export const tareasRoutes = express.Router();
const controller = new TareasController();

tareasRoutes.get('/', controller.leerTareas);
tareasRoutes.post('/', controller.addTarea);
tareasRoutes.patch('/:id_tarea', controller.editarTarea);
tareasRoutes.delete('/:id_tarea', controller.eliminarTarea);
