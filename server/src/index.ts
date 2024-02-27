import express from 'express';
import cors from 'cors';
import { envVariables } from './utilities/envVariables';
import { createApi } from './routes/main';
import 'reflect-metadata';
import { AppDataSource } from './db/config';
import { boomHandle } from './middlewares/boomHandle';

const app = express();

app.use(cors());
app.use(express.json());


createApi(app);

app.use(boomHandle);

AppDataSource.initialize()
	.then(() => {
		app.listen(envVariables.port, () => {
			if (envVariables.dev_mode) {
				console.log(`http://localhost:${envVariables.port}`);
			}
		});
	})
	.catch((error) => console.log(error));