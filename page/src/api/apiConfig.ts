

export const apiConfig = {
    url_api_tareas: 'http://localhost:3005/api/v1/tareas',
    url_api_usuario: 'http://localhost:3005/api/v1/usuario',
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