import express from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

router.post('/', UserControllers.createUser);
router.get('/', UserControllers.getUsers);
router.get('/:userId', UserControllers.getUser);
router.get('/:userId/orders', UserControllers.getOrders);
router.get('/:userId/orders/total-price', UserControllers.getTotalPrice);
router.put('/:userId', UserControllers.updateUser);
router.put('/:userId/orders', UserControllers.updateUserOrder);
router.delete('/:userId', UserControllers.deleteUser);

export const UserRoute = router;
