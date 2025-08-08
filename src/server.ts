import 'reflect-metadata';
import { appConfig } from './config/app.config';
import { createApp } from './main';

async function bootstrap() {
	const app = createApp();
	const PORT = appConfig.port;

	app.listen(PORT, () => {
		console.log(`Server is running on http://localhost:${PORT}`);
	});
}

void bootstrap();
