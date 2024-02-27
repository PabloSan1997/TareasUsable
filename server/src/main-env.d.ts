

interface UsuarioInterface {
    id_usuario: string;
    username: string;
    password: string;
    rol: string;
    tareas: Array<TareaInterface>
}

interface AddUsuario {
    username: string;
    password: string;
    rol: string;
}
interface LoginUser {
    username: string;
    password: string;
}
interface AddTarea {
    tarea: string;
    estado: boolean;
    fechaFinalizar: string;
}

interface TareaInterface {
    id_tarea: string;
    tarea: string;
    estado: boolean;
    fechaFinalizar: string;
    createdAt: string;
}

interface GenerarToken {
    id_usuario: string;
    rol: string;
}
