import { useAppSelector } from "../store/store";
import { Tareas } from "./Tareas";
import '../styles/gridTareas.css';


export function Contenedor(){
    const state = useAppSelector(state=>state.reducerTarea);
    return(
        <div id="contenedor" className="w-[95%] m-auto mb-5">
            {state.tareas.map(p=>(
                <Tareas key={p.id_tarea} {...p}/>
            ))}
        </div>
    );
}