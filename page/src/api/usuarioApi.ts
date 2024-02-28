import { apiConfig } from "./apiConfig";



export const usuarioApi = {
    login:async (datos:LoginUserInterface):Promise<TokenResponse>=>{
        const ft = await fetch(apiConfig.url_api_usuario+'/login', {
            method:'POST',
            headers:apiConfig.headersJson(),
            body:JSON.stringify(datos)
        });
        const data = ft.json();
        if (!ft.ok) {
            throw await data;
        }
        return data;
    }
}