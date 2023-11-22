import { Schema } from 'mongoose';
import { IOrder } from '../interfaces/order.interface';

export const orderSchema = new Schema<IOrder>({
  productName: { type: String, trim: true },
  price: { type: Number },
  quantity: { type: Number },
});
