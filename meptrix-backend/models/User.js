import { Int32 } from 'mongodb';
import mongoose, {Schema} from 'mongoose'

const UserSchema = mongoose.Schema(
    { 
        email: {
            type:String,
            required: true,
            unique: true
        },
        password: {
            type:String,
            required: true
        },
        profileImage: {
            type: String,
            required: false,
            default: "https://wallpapers.com/images/featured/naruto-profile-pictures-sa1tekghfajrr928.jpg"
        },
        isAdmin: {
            type: Boolean,
            required: true,
            default: false
        },
        roles:{ 
            type: [Schema.Types.ObjectId], // type of primary key is objectId and it is forign key of Role model
            required: true,
            ref: 'Role'
         }, // refering to Role model
        name: {
            type: String,
            required: false,
            default: this.email
        },
        headTag: {
            type: String,
            required: false,
            maxLength: 500,
            default: "Student"
        },
        
        branch: {
            type: String,
            required: false,
            default: "Engineering"
        },
        year: {
            type: int,
            required: false,
            default: 0
        },
        skills: {
            type: [String],
            required: false,
            default: []
        },
        about: {
            type: String,
            required: false,
            default: "I am a student of Engineering"
        },
        links: {
            type: [String],
            required: false,
            default: []
        },

    },
    {
        timestamps: true  // To store creared or modifiesd time of the record
    }
);
export default mongoose.model('User', UserSchema); // Exporting the model