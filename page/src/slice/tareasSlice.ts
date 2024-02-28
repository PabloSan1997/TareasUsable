import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginExtraReducer, readTareasExtraReducer } from './extraReducers/tareaExtraReducers';

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
    },
    id_usuario: ''
}

const tareaSlice = createSlice({
    name: 'slice/tareas',
    initialState,
    reducers: {
        escribirTarea(state, action: PayloadAction<{ escribir: string }>) {
            state.formulario.tarea = action.payload.escribir;
        },
        escribirFecha(state, action: PayloadAction<{ escribir: string }>) {
            state.formulario.fechaFinalizar = action.payload.escribir;
        },
        escribirUserName(state, action: PayloadAction<{ escribir: string }>) {
            state.login.username = action.payload.escribir;
        },
        escribirPassword(state, action: PayloadAction<{ escribir: string }>) {
            state.login.password = action.payload.escribir;
        },
        agregarToken(state, action: PayloadAction<{ texto: string }>) {
            state.token = action.payload.texto;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginExtraReducer.fulfilled, (state, action) => {
            state.token = action.payload.token;
        });

        builder.addCase(readTareasExtraReducer.fulfilled, (state, action)=>{
            state.tareas = action.payload.tareas;
            state.username = action.payload.username;
            state.id_usuario = action.payload.id_usuario;
        });
    }
});

export const reducerTarea = tareaSlice.reducer;
export const tareasAction = tareaSlice.actions;