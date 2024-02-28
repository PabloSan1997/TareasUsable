import { useAppSelector } from "../store/store";
import { Tareas } from "./Tareas";



export function Contenedor(){
    const state = useAppSelector(state=>state.reducerTarea);
    return(
        <div>
            {state.tareas.map(p=>(
                <Tareas key={p.id_tarea} {...p}/>
            ))}
        </div>
    );
}