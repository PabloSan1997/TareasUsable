import joi from 'joi';

const id_tarea = joi.string().min(1).uuid().required();
const tarea = joi.string().min(1).max(900).required();
const estado = joi.boolean();
const fechaFinalizar = joi.date().required();


export const addTareaJoi = joi.object({ tarea, estado, fechaFinalizar });
export const editTareajoi = joi.object({ estado: estado.required() });
export const selectId = joi.object({id_tarea});