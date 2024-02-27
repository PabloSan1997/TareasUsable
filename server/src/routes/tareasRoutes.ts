import express from 'express';
import { TareasController } from '../controller/TareaController';
import { joiHandle } from '../middlewares/joiHandle';
import { addTareaJoi, editTareajoi, selectId } from '../middlewares/schema/tareaJoi';


export const tareasRoutes = express.Router();
const controller = new TareasController();

tareasRoutes.get('/',
    controller.leerTareas);

tareasRoutes.post('/',
    joiHandle(addTareaJoi, 'body'),
    controller.addTarea);

tareasRoutes.patch('/:id_tarea',
    joiHandle(selectId, 'params'),
    joiHandle(editTareajoi, 'body'),
    controller.editarTarea);

tareasRoutes.delete('/:id_tarea',
    joiHandle(selectId, 'params'),
    controller.eliminarTarea);
