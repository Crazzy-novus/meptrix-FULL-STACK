import { CreateSuccess } from '../utils/success.js';

import { CreateError } from '../utils/error.js';
import Clubs from '../models/Clubs.js';
import Event from '../models/Event.js';

// Function to store an event
export const createEvent = async (req, res, next) => {
    try {
        
        // Find the club based on the club name
        const club = await Clubs.findOne({ club_name: req.body.club_name }).select('_id');
        

        // Check if the club exists
        if (!club) {
            console.error('Club not found');
            return;
        }
        const event = new Event({clubId: club._id,
            eventname: req.body.eventname,
            eventclub: req.body.club_name,
            eventstudent: req.body.eventstudent,
            eventvenue: req.body.eventvenue,
            eventdate: req.body.eventdate,
            eventtime: req.body.eventtime,
            shortdescription: req.body.shortdescription,
            description: req.body.description,
            });
        // Save the event to the database
        try {
            const savedEvent = await event.save();
            return next(CreateSuccess(200, "Event Created successfully", savedEvent));
            // Continue with your logic after saving the event...
          } catch (err) {
            console.error('Database error:', err);
          }
        
        
    } catch (error) {
        return next(CreateError(500, "error", error));  
    }
};
