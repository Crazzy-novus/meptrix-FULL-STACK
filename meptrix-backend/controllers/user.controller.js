import User from "../models/User.js"
import { CreateError } from "../utils/error.js";
import { CreateSuccess } from "../utils/success.js";

export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find(); // take all  value from data base
        return next(CreateSuccess(200, "Users fetched successfully", users));
    } catch (error) {
        return next(CreateError(500,"Internal Server error", error.message));
    }
}


export const getSingleUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id); // id is get from the url
        if (!user) {
            return next(CreateError(404,"User not found"));
        }
        return next(CreateSuccess(200, "User fetched successfully", user));
    } catch (error) {
        return next(CreateError(500,"Internal Server error" , error.message));
    }
}