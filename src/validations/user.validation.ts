import { z } from 'zod';
const nameSchemaValidation = z.object({
  firstName: z
    .string()
    .trim()
    .refine((fName) => fName.length > 0, {
      message: 'First name must not be empty',
    }),
  lastName: z
    .string()
    .trim()
    .refine((lName) => lName.length > 0, {
      message: 'Last name must not be empty',
    }),
});

const addressSchemaValidation = z.object({
  street: z.string().trim(),
  city: z.string().trim(),
  country: z.string().trim(),
});

const productSchemaVelidation = z.object({
  productName: z.string().min(1),
  price: z.number(),
  quantity: z.number().int(),
});

// for strong password velidation
// .regex(/^(?=.*[0-9])(?=.*[a-z])(?=.*[!@#$%^&*])/, {
//   message:
//     'Password must contain at least 1 digit, 1 lowercase letter, and 1 special character (!@#$%^&*)',
// })
export const userSchemaValidation = z.object({
  userId: z.number(),
  username: z.string().trim().min(3),
  password: z.string(),
  fullName: nameSchemaValidation,
  age: z.number(),
  email: z.string().email().trim(),
  isActive: z.boolean(),
  hobbies: z.array(z.string().trim()),
  address: addressSchemaValidation,
  orders: z.array(productSchemaVelidation).optional(),
});
