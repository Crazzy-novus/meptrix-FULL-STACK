import mongoose, {Schema} from 'mongoose'

const eventSchema = new mongoose.Schema({
    clubId: { type: Schema.Types.ObjectId, required: true, ref: 'Club' },
    eventname: { type: String, required: true },
    club_name: { type: String, required: true },
    eventstudent: { type: String, required: true },
    eventvenue: { type: String, required: true },
    eventdate: { type: Date, required: true },
    eventtime: { type: String, required: true },
    shortdescription: { type: String, required: true, maxlength: 100 },
    description: { type: String, required: false, maxlength: 1000 },
    img: { type: String, required: false },
  });
  export default mongoose.model('Event', eventSchema);