import {createAsyncThunk} from '@reduxjs/toolkit';
import { usuarioApi } from '../../api/usuarioApi';
import { tareasApi } from '../../api/tareasApi';

export const loginExtraReducer = createAsyncThunk(
    'extraReducer/login',
    async(datos:LoginUserInterface)=>{
        const respuesta = await usuarioApi.login(datos);
        return respuesta;
    }
);

export const readTareasExtraReducer = createAsyncThunk(
    'extraReducer/readTareas',
    async (token:string)=>{
        const respuesta = await tareasApi.readTareas(token);
        return respuesta;
    }
);