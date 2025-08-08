import mongoose from 'mongoose';
import { appConfig } from '../config/app.config';

export default async function connectMongo() {
	try {
		await mongoose.connect(appConfig.mongoURI!);
		console.log('Database connected');
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
}
