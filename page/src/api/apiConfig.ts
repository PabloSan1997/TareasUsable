

const base_url = import.meta.env.DEV?'http://localhost:3005': import.meta.env.VITE_URL_FETCH;
export const apiConfig = {
    url_api_tareas: `${base_url}/api/v1/tareas`,
    url_api_usuario: `${base_url}/api/v1/usuario`,
    headersJsonAuth:(authorization:string)=>{
        return {
            'Content-Type':'application/json',
            authorization
        }
    },
    headersAuth:(authorization:string)=>{
        return {
            authorization
        }
    },
    headersJson:()=>{
        return {
            'Content-Type':'application/json',
        }
    }
}