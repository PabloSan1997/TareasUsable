import { loginExtraReducer } from "../slice/extraReducers/tareaExtraReducers";
import { tareasAction } from "../slice/tareasSlice";
import { useAppDispatch, useAppSelector } from "../store/store";
import React from "react";
import { Navigate } from 'react-router-dom';
import { myRutes } from "../utilities/myRutes";


export function Login() {
    const dispatch = useAppDispatch();
    const state = useAppSelector(state => state.reducerTarea.login);
    const token = useAppSelector(state => state.reducerTarea.token);
    const subir = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(loginExtraReducer(state));
    }
    if (token) return <Navigate to={myRutes.home} />
    return (
        <form onSubmit={subir} className="bg-gray-700 mt-10 w-lDis flex-col flex m-auto text-white p-3 rounded-xl">
            <h2
                className="text-2xl mx-auto font-bold"
            >Login</h2>
            <label htmlFor=""
                className="text-lg mb-1"
            >Username</label>
            <input
                type="text"
                className="outline-none rounded-md py-1 px-2 text-lg bg-gray-300 placeholder:text-gray-500 text-black mb-4"
                placeholder="Escribir"
                value={state.username}
                onChange={e => dispatch(tareasAction.escribirUserName({ escribir: e.target.value }))}
            />
            <label htmlFor=""
                className="text-lg mb-1"
            >Password</label>
            <input
                type="password"
                className="outline-none rounded-md py-1 px-2 text-lg bg-gray-300 placeholder:text-gray-500 text-black mb-4"
                placeholder="Escribir"
                value={state.password}
                onChange={e => dispatch(tareasAction.escribirPassword({ escribir: e.target.value }))}
            />
            <button
                className="border-2 w-fit px-5 py-1 m-auto rounded-lg text-lg hover:bg-gray-600 active:bg-gray-500"
                type="submit">Entrar</button>
        </form>
    );
}