import express from 'express';
import { getAllUsers, getSingleUser, updateRole, updateUser, deleteUser, revokeRole } from '../controllers/user.controller.js';
import { verifyUser, verifyAdmin, verifyStaff } from '../utils/verifyToken.js';

const router = express.Router();

// get all users
//router.get('/', verifyAdmin, getAllUsers);
router.get('/', getAllUsers);

//router.get('/staff', getAllUsers);
router.get('/staff', getAllUsers);

// get a single user
//router.get('/user', verifyUser, getSingleUser );
router.get('/user', getSingleUser);

// update a user
//router.put('/updateuser/:id', verifyUser, updateRole);
router.put('/updateuser/:id', updateRole);
// update a user
//router.put('/updateuserdetails/:id', verifyUser, updateUser);
router.put('/updateuserdetails/:id', updateUser);

//router.delete("/deleteuser/:id", verifyAdmin, deleteUser);
router.delete("/deleteuser/:id", deleteUser);

//router.put('/revokeuser/:id',  verifyUser, revokeRole )
router.put('/revokeuser/:id', revokeRole )


export default router;

