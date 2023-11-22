import { z } from 'zod';

export const orderSchemaValidation = z.object({
  productName: z.string().min(1),
  price: z.number(),
  quantity: z.number().int(),
});
