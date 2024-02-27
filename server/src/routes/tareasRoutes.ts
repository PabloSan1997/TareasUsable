import express from 'express';


export const tareasRoutes = express.Router();

tareasRoutes.get('/');
tareasRoutes.post('/');
tareasRoutes.patch('/:id_tarea');
tareasRoutes.delete('/:id_tarea');
