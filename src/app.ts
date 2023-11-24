import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { UserRoute } from './app/modules/user/user.route';

const app: Application = express();

//parssing
app.use(express.json());
app.use(cors());

//welcome to the api
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ success: true, message: 'Welcome to the api' });
});

// all routes here
app.use('/api/users', UserRoute);

//Global route error handler
app.all('*', (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

// Global error handler

export default app;
