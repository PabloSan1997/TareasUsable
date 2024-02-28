import {createAsyncThunk} from '@reduxjs/toolkit';
import { usuarioApi } from '../../api/usuarioApi';

export const loginExtraReducer = createAsyncThunk(
    'extraReducer/login',
    async(datos:LoginUserInterface)=>{
        const respuesta = await usuarioApi.login(datos);
        return respuesta;
    }
);