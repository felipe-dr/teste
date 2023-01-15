import express, { Request, Response } from 'express';

import MyClass from './teste/new';

const mc = new MyClass().log();

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send(`Hello World! ${mc}`);
});

app.listen(3000, () => console.log('ous vind 3000'));
