import path from 'path';
import 'reflect-metadata';
import { createExpressServer, useContainer } from 'routing-controllers';
import { Container } from 'typedi';
import connectMongo from './database/connectDB';
import loadControllers, { loadMiddlewares } from './utils/load-controllers';
import { appConfig } from './config/app.config';

export async function bootstrap() {
	useContainer(Container);

	await connectMongo();

	const controllers = loadControllers(path.join(__dirname, 'modules'));
	const middlewares = loadMiddlewares(path.join(__dirname, 'middlewares'));

	const app = createExpressServer({
		controllers,
		middlewares,
		routePrefix: '/api/v0',
		defaultErrorHandler: true,
	});

	const PORT = appConfig.port;

	app.listen(PORT, () => {
		console.log(`Server is running on http://localhost:${PORT}`);
	});
}

void bootstrap()