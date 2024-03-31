import express from 'express';
import { getAllUsers, getSingleUser, updateUser } from '../controllers/user.controller.js';
import { verifyUser, verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

// get all users
router.get('/', verifyAdmin, getAllUsers);

// get a single user
router.get('/user', verifyUser, getSingleUser );

// update a user
router.put('/updateuser', verifyUser, updateUser);

export default router;

