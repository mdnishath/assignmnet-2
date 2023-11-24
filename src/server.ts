import app from './app';
import { DB_URL, PORT } from './app/config';
import mongoose from 'mongoose';

main().catch((err) => console.log(err));

async function main() {
  try {
    await mongoose.connect(DB_URL, { retryWrites: true, w: 'majority' });
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}
