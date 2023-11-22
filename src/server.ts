import app from './app';
import { PORT } from './config';
import mongoose from 'mongoose';

// getting-started.js

main().catch((err) => console.log(err));

async function main() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}
