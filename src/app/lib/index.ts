import { IUserNotFound } from '../modules/user/user.interface';

export function userNotFound(): IUserNotFound {
  return {
    success: false,
    message: 'User not found',
    error: {
      code: 404,
      description: 'User not found!',
    },
  };
}
