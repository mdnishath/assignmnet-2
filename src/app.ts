import express, { Application } from 'express';
import cors from 'cors';
import { UserRoute } from './routes/user.route';
const app: Application = express();

//parssing
app.use(express.json());
app.use(cors());

// all routes here

app.use('/api/users', UserRoute);
export default app;
