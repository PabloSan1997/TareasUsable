import { Navigate } from "react-router-dom";
import { useAppSelector } from "../store/store";
import { myRutes } from "../utilities/myRutes";
import { Contenedor } from "../components/Contenedor";
import { Formulario } from "../components/Formaulario";

export function MainLayouts() {
    const state = useAppSelector(state => state.reducerTarea);

    if (!state.token) return <Navigate to={myRutes.login} />
    return (
        <>
            <Formulario />
            <Contenedor />
        </>
    );
}