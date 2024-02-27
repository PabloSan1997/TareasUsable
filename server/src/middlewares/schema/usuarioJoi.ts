import Joi from "joi"



const id_usuario = Joi.string().min(1).uuid();
const username = Joi.string().min(1).max(100).required();
const password = Joi.string().min(1).max(2000).required();
const rol = Joi.string().min(1).max(50).required();

export const selecUserJoi = Joi.object({id_usuario:id_usuario.required()});
export const addUserJoi = Joi.object({username, password, rol});
export const loginJoi = Joi.object({username, password});