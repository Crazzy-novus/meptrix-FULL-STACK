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
            ref: 'Role' // refering to Role model
        },
    },
    {
        timestamps: true  // To store creared or modifiesd time of the record
    }
);
export default mongoose.model('User', UserSchema); // Exporting the model