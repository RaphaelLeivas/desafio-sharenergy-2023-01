import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server + Nodemon 033 in SRC');
});

app.listen(port, () => {
  console.log(`[server]: Server is running in SRC aaa (DV) at http://localhost:${port}`);
});
