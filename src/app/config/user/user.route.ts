import express from 'express';
import { UserControler } from './user.controller';

const router = express.Router();
//will call a controller
router.post('/create-user', UserControler.createUser);
router.get('/:userId', UserControler.getSingleUser);
router.get('/', UserControler.getAllUsers);
router.delete('/:userId', UserControler.deleteSingleUserById);

export const UserRoutes = router;
