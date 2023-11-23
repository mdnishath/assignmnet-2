import express from 'express';
import { UserControllers } from '../controllers/user.controller';

const router = express.Router();

router.post('/', UserControllers.createUser);
router.get('/', UserControllers.getUsers);
router.get('/:userId', UserControllers.getUser);
router.put('/:userId', UserControllers.updateUser);
router.delete('/:userId', UserControllers.deleteUser);

export const UserRoute = router;
