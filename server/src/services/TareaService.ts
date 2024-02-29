import Boom from '@hapi/boom';
import { AppDataSource } from '../db/config';
import { Tareas } from '../db/models/Tareas';
import { Usuario } from '../db/models/Usuario';
import { UsuarioService } from './UsuarioService';

const repositorios = {
	usuario: AppDataSource.getRepository(Usuario),
	tarea: AppDataSource.getRepository(Tareas)
};
const servicioUsuario = new UsuarioService();
export class TareaService {
	async agregarTarea(newTarea: AddTarea, token: string) {
		const ver = await servicioUsuario.checarToken(token);
		const usuario = await repositorios.usuario.findOneBy({ id_usuario: ver.id_usuario });
		if (!usuario) throw Boom.badRequest('No tienes permiso para eso');
		const crearTarea = repositorios.tarea.create(newTarea);
		crearTarea.usuario = usuario;
		await repositorios.tarea.save(crearTarea);
		return repositorios.tarea.findOneBy({ id_tarea: crearTarea.id_tarea });
	}
	async leerTareas(token: string) {
		const ver = await servicioUsuario.checarToken(token);
		const usuario = await repositorios.usuario.findOne({
			where: {
				id_usuario: ver.id_usuario
			},
			relations: {
				tareas: true
			},
			select: {
				id_usuario: true,
				username: true,
				tareas: true
			},
			order:{
				tareas:{
					createdAt:'ASC'
				}
			}
		});
		if (!usuario) throw Boom.badRequest('No tienes permiso para eso');
		return usuario;
	}
	async borrarTarea(token: string, id_tarea: string) {
		const ver = await servicioUsuario.checarToken(token);
		const buscarTarea = await repositorios.tarea.findOne({ where: { id_tarea }, relations: { usuario: true } });
		if (!!buscarTarea && buscarTarea.usuario.id_usuario == ver.id_usuario) {
			repositorios.tarea.delete({ id_tarea });
		}
	}
	async editarTareaEstado(token: string, id_tarea: string, cambiar: { estado: boolean }) {
		const ver = await servicioUsuario.checarToken(token);
		const tarea = await repositorios.tarea.findOne({
			where: { id_tarea }, relations: { usuario: true },
			select: {
				id_tarea: true,
				estado: true
			}
		});
		if (!tarea || tarea.usuario.id_usuario !== ver.id_usuario)
			throw Boom.badRequest('No tienes permiso para esta accion');

		tarea.estado = cambiar.estado;
		await repositorios.tarea.save(tarea);
		return repositorios.tarea.findOne({
			where: { id_tarea },
			select: {
				id_tarea: true,
				estado: true
			}
		});
	}
}