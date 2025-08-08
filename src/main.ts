import path from 'path';
import 'reflect-metadata';
import { createExpressServer, useContainer } from 'routing-controllers';
import { Container } from 'typedi';
import loadControllers, { loadMiddlewares } from './utils/load-controllers';

export function createApp() {
	useContainer(Container);

	const controllers = loadControllers(path.join(__dirname, 'modules'));
	const middlewares = loadMiddlewares(path.join(__dirname, 'middlewares'));

	const app = createExpressServer({
		controllers,
		middlewares,
		routePrefix: '/api/v0',
		defaultErrorHandler: true,
	});

	return app;
}
