import { useRoutes, HashRouter, Navigate } from 'react-router-dom';
import { Login } from './layouts/Login';
import { useAppDispatch, useAppSelector } from './store/store';
import { MainLayouts } from './layouts/MainLayout';
import { myRutes } from './utilities/myRutes';
import { useCookies } from 'react-cookie';
import React from 'react';
import { readTareasExtraReducer } from './slice/extraReducers/tareaExtraReducers';
import { Header } from './components/Header';


const Rutas = ({ token }: { token: string }) => useRoutes([
    {
        element: <Login />,
        path: myRutes.login
    },
    {
        element: <Navigate to={token ? myRutes.home : myRutes.login} />,
        path: '/'
    },
    {
        element: <MainLayouts />,
        path: myRutes.home
    }
]);

export function ProviderRutas() {
    const state = useAppSelector(state => state.reducerTarea);
    const dispatch = useAppDispatch();
    const [cookie, setCookie] = useCookies(['miCookie']);
    React.useEffect(() => {
        if (!cookie.miCookie && state.token) {
            setCookie('miCookie', state.token, { maxAge: 200 });
        }
        if (state.token) {
            dispatch(readTareasExtraReducer(state.token));
        }
    }, [state.token]);

    return (
        <HashRouter>
            <Header/>
            <Rutas token={state.token} />
        </HashRouter>
    );
}