import express, {Express} from 'express';
import { usuarioRoute } from './usuarioRoutes';
import { tareasRoutes } from './tareasRoutes';

const mainRoute = express.Router();
export function createApi(app: Express){
	app.use('/api/v1', mainRoute);
	mainRoute.use('/usuario', usuarioRoute);
	mainRoute.use('/tareas', tareasRoutes);
	app.use('/', express.static('src/static'));
}