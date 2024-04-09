import User from "../models/User.js"
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
