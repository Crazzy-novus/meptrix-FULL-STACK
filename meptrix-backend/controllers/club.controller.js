import club from '../models/Clubs.js';
import { CreateSuccess } from '../utils/success.js';
import { CreateError } from "../utils/error.js";


export const createClub = async (req, res, next) => {
    try {
        
        if (req.body && Object.keys(req.body).length > 0) {
            
                const newClub = new club(req.body);
                
                await newClub.save();
                return next(CreateSuccess(200, "Club Created successfully", newClub)); // send a success message
            } else {
                return next(CreateError(403, "Club NOT created ::: ", error.message)); // send an error message
            }
        
    }
    catch (error) {
        return next(CreateError(404, "Server error ::: ", error.message)); // send an error message

    }
}

export const  getAllClubs = async (req, res, next) => {

    try {
        const clubs = await club.find({});  // Not specifing any condition to get all roles in the database
        return next(CreateSuccess(200, "All Clubs", clubs));  // send a success message

    }
    catch (error) {
        return next(CreateError(404, "Server error ::: ", error.message));  // send an error message
    }

}