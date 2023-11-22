// import { ZodRawShape } from "zod/lib";
export interface IOrder {
  productName: string;
  price: number;
  quantity: number;
}

export type orders = Array<IOrder>[];
