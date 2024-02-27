import { Schema } from 'joi';
import { Request, Response, NextFunction } from 'express';
import Boom from '@hapi/boom';

export const joiHandle = (joiSchema: Schema, prop: 'body' | 'params') =>
	(req: Request, res: Response, next: NextFunction) => {
		const datos = req[prop];
		const { error } = joiSchema.validate(datos, { abortEarly: false });
		if(error) next(Boom.badRequest(error.message));
		else next();
	};