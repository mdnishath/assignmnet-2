import { z } from 'zod';
const nameSchemaValidation = z.object({
  firstName: z.string().trim(),
  lastName: z.string().trim(),
});

const addressSchemaValidation = z.object({
  street: z.string().trim(),
  city: z.string().trim(),
  country: z.string().trim(),
});
export const userSchemaValidation = z.object({
  userId: z.number(),
  username: z.string().trim().min(3),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters long' })
    .max(20, { message: 'Password cannot be more than 20 characters long' })
    .regex(/^(?=.*[0-9])(?=.*[a-z])(?=.*[!@#$%^&*])/, {
      message:
        'Password must contain at least 1 digit, 1 lowercase letter, and 1 special character (!@#$%^&*)',
    }),
  fullName: nameSchemaValidation,
  age: z.number().min(6),
  email: z.string().email().trim(),
  isActive: z.boolean(),
  hobbies: z.array(z.string().trim()),
  address: addressSchemaValidation,
});
