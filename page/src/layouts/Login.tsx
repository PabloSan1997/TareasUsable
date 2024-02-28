import { loginExtraReducer } from "../slice/extraReducers/tareaExtraReducers";
import { tareasAction } from "../slice/tareasSlice";
import { useAppDispatch, useAppSelector } from "../store/store";
import React from "react";


export function Login() {
    const dispatch = useAppDispatch();
    const state = useAppSelector(state => state.reducerTarea.login);
    const subir =(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        dispatch(loginExtraReducer(state));
    }
    return (
        <form onSubmit={subir}>
            <label htmlFor="">Username</label>
            <input
                type="text"
                placeholder="Escribir"
                value={state.username}
                onChange={e => dispatch(tareasAction.escribirUserName({escribir:e.target.value}))}
            />
            <label htmlFor="">Password</label>
            <input 
            type="password" 
            placeholder="Escribir" 
            value={state.password}
            onChange={e => dispatch(tareasAction.escribirPassword({escribir:e.target.value}))}
            />
            <button type="submit">Entrar</button>
        </form>
    );
}