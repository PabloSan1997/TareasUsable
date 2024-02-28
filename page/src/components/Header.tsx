import { useCookies } from "react-cookie";

import { useAppSelector } from "../store/store";


export function Header() {
    const state = useAppSelector(state => state.reducerTarea);
    const cookieHooks = useCookies(['miCookie']);
    const cerrarSeccion = () => {
        cookieHooks[2]('miCookie');
        window.location.reload();
    }
    return (
        <header
        className="bg-black text-white flex items-center"
        >
            <h1
            className="text-4xl py-4 ml-5"
            >Mis tareas</h1>
            {state.username ? (
                <div className="h-fit flex ml-auto mr-5">
                    <span
                    className="mr-5 font-bold text-lg"
                    >{state.username}</span>
                    <button
                        onClick={cerrarSeccion}
                        className="hover:underline"
                    >Logout</button>
                </div>
            ) : null}
        </header>
    );
}