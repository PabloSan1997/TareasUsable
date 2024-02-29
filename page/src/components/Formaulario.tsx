import React from "react";
import { tareasAction } from "../slice/tareasSlice";
import { useAppDispatch, useAppSelector } from "../store/store"
import { addTareaExtraReducer } from "../slice/extraReducers/tareaExtraReducers";


export function Formulario() {
    const state = useAppSelector(state => state.reducerTarea);
    const textoForm = state.formulario;
    const token = state.token;
    const dispatch = useAppDispatch();
    const escribirTarea = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(tareasAction.escribirTarea({ escribir: e.target.value }));
    }
    const escribirFecha = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(tareasAction.escribirFecha({ escribir: e.target.value }));
    }

    const subir = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(addTareaExtraReducer({ nuevaTArea: textoForm, token }));
    }

    return (
        <form className="m-auto flex my-8 items-center w-[95%] max-[660px]:flex-col" onSubmit={subir}>
            <input type="text"
                className="outline-none rounded-md py-1 w-[40%] text-white px-2 text-lg bg-gray-800 placeholder:text-gray-400 max-[660px]:w-[90%] max-[660px]:m-auto max-[660px]:mb-2"
                placeholder="Nueva tarea"
                value={textoForm.tarea}
                onChange={escribirTarea} />
            <input
                type="datetime-local"
                className="outline-none rounded-md ml-5 py-1 text-white px-2 text-lg bg-gray-800 placeholder:text-gray-400 max-[660px]:w-[50%] max-[660px]:m-auto max-[660px]:mt-2"
                placeholder="Fecha vencimiento"
                value={textoForm.fechaFinalizar}
                onChange={escribirFecha}
            />
            <button
                className="w-fit bg-black ml-2 px-5 py-1 rounded-lg text-lg hover:bg-gray-800 text-white active:bg-gray-700 max-[660px]:mt-3"
                type="submit"
            >Subir</button>
        </form>
    )
}