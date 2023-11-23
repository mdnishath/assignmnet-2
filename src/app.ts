import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { z } from 'zod';
import { UserRoute } from './app/modules/user/user.route';

const app: Application = express();

//parssing
app.use(express.json());
app.use(cors());

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
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof z.ZodError) {
    // const errorMessages = error.errors.map((err) => err.message);
    // const errorCodes = error.errors.map((err) => err.code);
    res.status(500).json({
      success: false,
      message: 'Zod validetion error',
      error: {
        code: error.errors.map((err) => err.code),
        description: error.errors.map((err) => err.message),
      },
    });
  } else {
    res.status(500).json({
      success: false,
      message: error.message,
      error,
    });
  }
  next();
});
export default app;
