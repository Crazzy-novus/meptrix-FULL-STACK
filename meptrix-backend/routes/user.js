import express from 'express';
import { getAllUsers, getSingleUser, updateRole, updateUser } from '../controllers/user.controller.js';
import { verifyUser, verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

// get all users
router.get('/', verifyAdmin, getAllUsers);

// get a single user
router.get('/user', verifyUser, getSingleUser );

// update a user
router.put('/updateuser/:id', verifyUser, updateRole);

// update a user
router.put('/updateuserdetails/:id', verifyUser, updateUser);

export default router;

