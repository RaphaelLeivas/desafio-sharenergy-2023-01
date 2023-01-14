import dotenv from 'dotenv';
dotenv.config();

import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { connectToDatabase } from './database/connection';
import routes from './routes';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const port = process.env.PORT;

connectToDatabase();

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server + Nodemon 033 in SRC');
});

app.use(routes);

app.listen(port, () => {
  console.log(`[server]: Server is running in SRC aaa (DV) at http://localhost:${port}`);
});
