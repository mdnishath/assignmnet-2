import { IUserNotFound } from '../modules/user/user.interface';

export function userNotFound(
  message: string,
  code: number,
  description: string,
): IUserNotFound {
  return {
    success: false,
    message,
    error: {
      code,
      description,
    },
  };
}
