import { useRoutes, HashRouter, Navigate } from 'react-router-dom';
import { Login } from './layouts/Login';
import { useAppSelector } from './store/store';
import { MainLayouts } from './layouts/MainLayout';
import { myRutes } from './utilities/myRutes';


const Rutas = ({ token }: { token: string }) => useRoutes([
    {
        element: <Login />,
        path: myRutes.login
    }, 
    {
        element: <Navigate to={token?myRutes.home:myRutes.login}/>,
        path:'/'
    },
    {
        element: <MainLayouts />,
        path: myRutes.home
    }
]);

export function ProviderRutas() {
    const state = useAppSelector(state => state.reducerTarea);
    return (
        <HashRouter>
            <Rutas token={state.token} />
        </HashRouter>
    );
}