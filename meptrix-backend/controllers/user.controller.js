import User from "../models/User.js"
import Role from '../models/Role.js';
import { CreateError } from "../utils/error.js";
import { CreateSuccess } from "../utils/success.js";

export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find({}).populate("roles", "role"); // take all  value from data base
        return next(CreateSuccess(200, "Users fetched successfully", users));
    } catch (error) {
        return next(CreateError(500,"Internal Server error", error.message));
    }
}


export const getSingleUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id).populate("roles", "role"); // id is get from the url
        if (!user) {
            return next(CreateError(404,"User not found"));
        }
        return next(CreateSuccess(200, "User fetched successfully", user));
    } catch (error) { 
        return next(CreateError(500,"Internal Server error" , error.message));
    }
}
export const updateUser = async (req, res, next) => {
    try {
        const { id } = req.params; // get the user id from the request parameters
        const updateFields = req.body; // get the updated fields from the request body

        // Find the user by id and update the specified fields
        const updatedUser = await User.findByIdAndUpdate(id, updateFields, { new: true });

        if (!updatedUser) {
            return next(CreateError(404, "User not found"));
        }

        return next(CreateSuccess(200, "User updated successfully", updatedUser));
    } catch (error) {
        return next(CreateError(500, "Internal Server error", error.message));
    }
}

export const updateRole = async (req, res, next) => {
    
    try {
        const { id } = req.params; // get the user id from the request parameters
        console.log(req.body.role);
        // get the updated role from the request body
        const role = await Role.findOne({ role:  req.body.role }); // find the role by name in the roles collection
        
        if (!role) {
            return next(CreateError(404, "Role not found"));
        }


        const updateFields = role._id; // update the roles field in the updateFields object
        if (role.role === 'admin' || role.role === 'super-admin') {
            const updatedUser = await User.findByIdAndUpdate(id, { roles: updateFields , isAdmin: true}, { new: true });
            if (!updatedUser) {
                return next(CreateError(404, "User not found"));
            }
    
            return next(CreateSuccess(200, "User role updated successfully", updatedUser));
        }
        else {
            const updatedUser = await User.findByIdAndUpdate(id, { roles: updateFields, isAdmin: false  }, { new: true });
            if (!updatedUser) {
                return next(CreateError(404, "User not found"));
            }
    
            return next(CreateSuccess(200, "User role updated successfully", updatedUser));
        }

        // Find the user by id and update the role field

        
    } catch (error) {
        return next(CreateError(500, "IError occures here", error.message));
    }
}
