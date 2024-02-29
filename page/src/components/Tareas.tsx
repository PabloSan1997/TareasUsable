import { contarDias } from "../utilities/ContarDias";
import { convertirFecha } from "../utilities/ConvertirFecha";
import { XCircleIcon, CheckCircleIcon } from '@heroicons/react/24/solid';
import { cambiarEstadoExtraReduce, eliminarTareaExtraReducer } from "../slice/extraReducers/tareaExtraReducers";
import { useAppDispatch, useAppSelector } from "../store/store";

export function Tareas({ tarea, estado, fechaFinalizar, createdAt, id_tarea }: TareasInterface) {
    const terminar = contarDias(fechaFinalizar);
    const dispatch = useAppDispatch();
    const token = useAppSelector(state => state.reducerTarea.token);

    const colorFondo = !estado ?
        terminar.urgencia ? 'bg-red-950' : 'bg-gray-800' :
        'bg-green-950';
    const colorBotones = !estado ?
        terminar.urgencia ? 'text-red-500 hover:text-red-400' : 'text-gray-500 hover:text-gray-400' :
        'text-green-700 hover:text-green-400';

    const editarTarea = () => {
        dispatch(cambiarEstadoExtraReduce({ token, datos: { estado: !estado }, id_tarea }));
    }
    const eliminarTarea = () => {
        if (confirm('¿Dese eliminar la tarea?'))
            dispatch(eliminarTareaExtraReducer({ token, id_tarea }));
    }
    return (
        <div className={`${colorFondo} rounded-xl p-2 flex flex-col`}>
            <div className="flex">
                <CheckCircleIcon
                    className={`${colorBotones} w-5 ml-auto mr-2 text-gray-500 cursor-pointer`}
                    onClick={editarTarea}
                />
                <XCircleIcon
                    className={`${colorBotones} w-5 text-gray-500 cursor-pointer`}
                    onClick={eliminarTarea}
                />
            </div>
            <p
                className="text-white m-auto max-w-full break-words text-xl"
            >{tarea}</p>
            {terminar.urgencia && !estado ? (
                <p
                    className="m-auto mt-2 text-white"
                >{terminar.conteo}</p>
            ) : null}
            <span
                className="text-gray-300 text-sm mt-2"
            >Finaliza: {convertirFecha(fechaFinalizar)}</span>
            <span
                className="text-gray-300 text-sm"
            >Creada: {convertirFecha(createdAt)}</span>
        </div>
    );
}