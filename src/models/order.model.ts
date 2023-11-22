import { Schema } from 'mongoose';
import { IOrder } from '../interfaces/order.interface';

export const orderSchema = new Schema<IOrder>({
  productName: { type: String, trim: true, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});
