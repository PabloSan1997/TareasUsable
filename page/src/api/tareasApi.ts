import { apiConfig } from "./apiConfig";


export const tareasApi = {
    readTareas: async (token: string): Promise<UsuarioTarea> => {
        const ft = await fetch(apiConfig.url_api_tareas, {
            method: 'GET',
            headers: apiConfig.headersAuth(token)
        });
        const data = ft.json();
        if (!ft.ok) {
            throw await data;
        }
        return data;
    },
    addNewTarea: async (token: string, datos: AddTarea): Promise<TareasInterface> => {
        const solicitud: RequestInit = {
            method: 'POST',
            headers: apiConfig.headersJsonAuth(token),
            body: JSON.stringify(datos)
        }
        const ft = await fetch(apiConfig.url_api_tareas, solicitud);
        const data = ft.json();
        if (!ft.ok) {
            throw await data;
        }
        return data;
    },
    cambiarEstado: async (token: string, datos: { estado: boolean }, id_tarea: string): Promise<{ id_tarea: string, estado: boolean }> => {
        const solicitud: RequestInit = {
            method: 'PATCH',
            headers: apiConfig.headersJsonAuth(token),
            body: JSON.stringify(datos)
        }
        const ft = await fetch(`${apiConfig.url_api_tareas}/${id_tarea}`, solicitud);
        const data = ft.json();
        if (!ft.ok) {
            throw await data;
        }
        return data;
    },
    eliminarTarea: async (token: string, id_tarea: string) => {
        const solicitud: RequestInit = {
            method: 'DELETE',
            headers: apiConfig.headersAuth(token)
        }
        const ft = await fetch(`${apiConfig.url_api_tareas}/${id_tarea}`, solicitud);
        if (!ft.ok) {
            const data = ft.json();
            throw await data;
        }
    }
}