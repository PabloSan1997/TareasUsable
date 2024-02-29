/// <reference types="vite/client" />


interface LoginUserInterface {
    username: string,
    password: string
}

interface EditEstado {
    estado: boolean
}

interface AddTarea {
    tarea: string,
    fechaFinalizar: string
}
interface TareasInterface {
    id_tarea: string,
    tarea: string,
    estado: boolean,
    fechaFinalizar: string,
    createdAt: string
}

interface UsuarioTarea {
    id_usuario: string;
    username: string;
    tareas: Array<TareasInterface>
}

interface TokenResponse {
    username: string;
    token: string;
}

interface BoomError {
    statusCode: number,
    error: string,
    message: string
}

interface InitialState {
    tareas: TareasInterface[];
    username: string;
    loading:boolean;
    token:string;
    id_usuario:string;
    formulario:{
        tarea:string;
        fechaFinalizar:string;
    };
    login:{
        username:string;
        password:string;
    }
}