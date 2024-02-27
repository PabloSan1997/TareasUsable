import { DataSource } from 'typeorm';
import { envVariables } from '../utilities/envVariables';
import { Tareas } from './models/Tareas';
import { Usuario } from './models/Usuario';


export const AppDataSource = new DataSource(
    {
        type: 'postgres',
        ssl:{
            rejectUnauthorized:false
        },
        url: envVariables.db_url,
        logging: true,
        synchronize: true,
        entities: [Tareas, Usuario]
    }
);