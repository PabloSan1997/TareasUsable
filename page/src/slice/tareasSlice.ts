import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addTareaExtraReducer, cambiarEstadoExtraReduce, eliminarTareaExtraReducer, loginExtraReducer, readTareasExtraReducer } from './extraReducers/tareaExtraReducers';

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

        builder.addCase(readTareasExtraReducer.fulfilled, (state, action) => {
            state.tareas = action.payload.tareas;
            state.username = action.payload.username;
            state.id_usuario = action.payload.id_usuario;
        });

        builder.addCase(addTareaExtraReducer.fulfilled, (state, action) => {
            state.tareas = [...state.tareas, action.payload];
        });

        builder.addCase(cambiarEstadoExtraReduce.fulfilled, (state, action) => {
            const { id_tarea, estado } = action.payload;
            const i = state.tareas.findIndex(t => t.id_tarea === id_tarea);
            state.tareas[i].estado = estado;
        });

        builder.addCase(eliminarTareaExtraReducer.fulfilled, (state, action) => {
            const id_tarea = action.payload.id_tarea;
            state.tareas = state.tareas.filter(t => t.id_tarea !== id_tarea);
        })
    }
});

export const reducerTarea = tareaSlice.reducer;
export const tareasAction = tareaSlice.actions;