import { NextFunction, Request, Response } from 'express';
import { ExpressMiddlewareInterface, Middleware } from 'routing-controllers';
import { Service } from 'typedi';

@Service()
@Middleware({ type: 'before' })
export class LoggerMiddleware implements ExpressMiddlewareInterface {
	use(request: Request, _response: Response, next: NextFunction) {
		console.log(`[${request.method}] ${request.url}`);
		return next();
	}
}
