import { createAsyncThunk } from '@reduxjs/toolkit';
import { usuarioApi } from '../../api/usuarioApi';
import { tareasApi } from '../../api/tareasApi';

export const loginExtraReducer = createAsyncThunk(
    'extraReducer/login',
    async (datos: LoginUserInterface) => {
        const respuesta = await usuarioApi.login(datos);
        return respuesta;
    }
);

export const readTareasExtraReducer = createAsyncThunk(
    'extraReducer/readTareas',
    async (token: string) => {
        const respuesta = await tareasApi.readTareas(token);
        return respuesta;
    }
);

export const addTareaExtraReducer = createAsyncThunk(
    'extraReducer/addTareas',
    async ({ token, nuevaTArea }: { token: string, nuevaTArea: AddTarea }) => {
        const nuevaTarea = await tareasApi.addNewTarea(token, nuevaTArea);
        return nuevaTarea;
    }
);

export const cambiarEstadoExtraReduce = createAsyncThunk(
    'extraReducer/editarEstado',
    async ({ token, datos, id_tarea }: { token: string, datos: { estado: boolean }, id_tarea: string }) => {
        return await tareasApi.cambiarEstado(token, datos, id_tarea);
    }
);

export const eliminarTareaExtraReducer = createAsyncThunk(
    'extraReducer/eliminarTarea',
    async({token, id_tarea}:{token:string, id_tarea:string})=>{
        await tareasApi.eliminarTarea(token, id_tarea);
        return {id_tarea};
    }
);

