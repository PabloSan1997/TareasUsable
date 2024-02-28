import { tareasAction } from "../slice/tareasSlice";
import { useAppDispatch, useAppSelector } from "../store/store"
import React from "react";


export function Formulario() {
    const textoForm = useAppSelector(state => state.reducerTarea.formulario);
    const dispatch = useAppDispatch();
    const escribirTarea = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(tareasAction.escribirTarea({ escribir: e.target.value }));
    }
    const escribirFecha = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(tareasAction.escribirFecha({ escribir: e.target.value }));
    }
    return (
        <form>
            <input type="text" value={textoForm.tarea} onChange={escribirTarea} />
            <input type="date" value={textoForm.fechaFinalizar} onChange={escribirFecha} />
            <button type="submit">Subir</button>
        </form>
    )
}