import { AppDataSource } from "../db/config";
import { Usuario } from "../db/models/Usuario";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { envVariables } from "../utilities/envVariables";
import Boom from '@hapi/boom';

const usuarioRe = AppDataSource.getRepository(Usuario);

export class UsuarioService {
    async agregarUsuario(newUser: AddUsuario) {
        const buscar = await usuarioRe.findOne({ where: { username: newUser.username } });
        if (!!buscar) throw Boom.badRequest(`Ya existe nombre de usario ${buscar.username}`);
        const password = bcrypt.hash(newUser.password, 8);
        const usuarioNuevo = usuarioRe.create({ ...newUser, password: await password });
        await usuarioRe.manager.save(usuarioNuevo);
        return usuarioNuevo;
    }
    async login(user: LoginUser) {
        const ver = await usuarioRe.findOne({
            where: {
                username: user.username
            }
        });
        if (!ver) throw Boom.badRequest('No se encontro usuario');
        const checar = await bcrypt.compare(user.password, ver.password);
        if (!checar) throw Boom.badRequest('Contraseña incorrecta');
        const respuesta: GenerarToken = {
            id_usuario: ver.id_usuario,
            rol: ver.rol
        }
        const token = this.generarToken(respuesta);
        return {
            username: ver.username,
            token: await token
        };
    }
    private async generarToken(elemento: GenerarToken): Promise<string> {
        const token = jwt.sign(elemento, envVariables.key);
        return token;
    }
    async checarToken(token: string): Promise<GenerarToken> {
        const ver = jwt.verify(token, envVariables.key) as GenerarToken;
        return ver;
    }
    async eliminarUsuario(id_usuario: string, token: string) {
        const generado = await this.checarToken(token);
        const buscar = await usuarioRe.findOneBy({ id_usuario: generado.id_usuario });
        if (!!buscar && (id_usuario == generado.id_usuario || generado.rol === 'admin')) {
            usuarioRe.delete({ id_usuario });
        }
    }
}