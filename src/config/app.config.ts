import dotenv from 'dotenv';

dotenv.config({ quiet: true });

export const appConfig = {
	port: process.env.PORT,
};
