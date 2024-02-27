import { Request, Response, NextFunction } from 'express';
import boom, { Boom } from '@hapi/boom';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function boomHandle(error: Boom, _req: Request, res: Response, _next: NextFunction) {
	if (error.isBoom) {
		const { payload } = error.output;
		res.status(payload.statusCode).json(payload);
	} else {
		const def = boom.badImplementation();
		const { payload } = def.output;
		res.status(payload.statusCode).json(payload);
	}
}