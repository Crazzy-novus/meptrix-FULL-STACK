import express from 'express';
import { getAllUsers, getSingleUser } from '../controllers/user.controller.js';
import { verifyUser, verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

// get all users
router.get('/', verifyAdmin, getAllUsers);

// get a single user
router.get('/:id', verifyUser, getSingleUser );

export default router;

