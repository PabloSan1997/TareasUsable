import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { loginExtraReducer } from './extraReducers/tareaExtraReducers';

const initialState: InitialState = {
    tareas: [],
    username: '',
    loading: false,
    token: '',
    formulario: {
        tarea: '',
        fechaFinalizar: ''
    },
    login: {
        username: '',
        password: ''
    }
}

const tareaSlice = createSlice({
    name: 'slice/tareas',
    initialState,
    reducers:{
        escribirTarea(state, action:PayloadAction<{escribir:string}>){
            state.formulario.tarea = action.payload.escribir;
        },
        escribirFecha(state, action:PayloadAction<{escribir:string}>){
            state.formulario.fechaFinalizar = action.payload.escribir;
        },
        escribirUserName(state, action:PayloadAction<{escribir:string}>){
            state.login.username = action.payload.escribir;
        },
        escribirPassword(state, action:PayloadAction<{escribir:string}>){
            state.login.password = action.payload.escribir;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(loginExtraReducer.fulfilled, (state, action)=>{
            state.token = action.payload.token;
        });
    }
});

export const reducerTarea = tareaSlice.reducer;
export const tareasAction = tareaSlice.actions;