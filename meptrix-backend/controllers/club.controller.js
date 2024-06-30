import clubs from '../models/Clubs.js';
import { CreateSuccess } from '../utils/success.js';
import { CreateError } from "../utils/error.js";



export const createClub = async (req, res, next) => {
    try {
        
        if (req.body && Object.keys(req.body).length > 0) {
            
                const newClub = new clubs(req.body);
                
                
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
        const club = await clubs.find({}).populate("organizer.organizer_id");  // Not specifing any condition to get all roles in the database
        
        return next(CreateSuccess(200, "All Clubs", club));  // send a success message

    }
    catch (error) {
        return next(CreateError(404, "Server error ::: ", error.message));  // send an error message
    }

}

export const getClubs = async (req, res, next) => {
    try {
        const {type} = req.params;
        const clubList = await clubs.find({club_type:type}).populate("organizer.organizer_id");
        if (!clubList) {
            return next(CreateError(404, "Clubs not found"));
        }
        
        return next(CreateSuccess(200, "Clubs found", clubList));

    } catch (error) {
        return next(CreateError(404, "Server error ::: ", error.message));  // send an error message
    }
}

export const getSingleClub = async (req, res, next) => {
    try {
        
        const {clubName} = req.params;
        const club = await clubs.findOne({club_name:clubName}).populate("organizer.organizer_id");
        if (!club) {
            return next(CreateError(404, "Club not found"));
        }
        return next(CreateSuccess(200, "Club found", club));
    }
    catch (error) {
        return next(CreateError(404, "Server error ::: ", error.message));  // send an error message
    }   
}

export const updateClub = async (req, res, next) => {
    
    try {
        const { id } = req.params; // get the user id from the request parameters
        const updateFields = req.body; // get the updated fields from the request body
        
        // Find the user by id and u pdate the specified fields
        const updatedUser = await clubs.findByIdAndUpdate(id, updateFields, { new: true });

        if (!updatedUser) {
            return next(CreateError(404, "User not found"));
        }

        return next(CreateSuccess(200, "User updated successfully", updatedUser));
    } catch (error) {
        console.log(error);
        return next(CreateError(500, "error occur here", error.message));
    }
}