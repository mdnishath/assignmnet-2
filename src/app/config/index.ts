import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.join(process.cwd(), '.env'),
});

export const PORT = process.env.PORT;
export const DB_URL = process.env.DB_URL;
export const DB_URL_LOCAL = process.env.DB_URL_LOCAL;
