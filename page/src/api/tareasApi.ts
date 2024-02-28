import { apiConfig } from "./apiConfig";


export const tareasApi = {
    readTareas: async (token: string): Promise<UsuarioTarea[]> => {
        const ft = await fetch(apiConfig.url_api_tareas, {
            method: 'GET',
            headers: apiConfig.headersAuth(token)
        });
        const data = ft.json();
        if (!ft.ok) {
            throw await data;
        }
        return data;
    }
}