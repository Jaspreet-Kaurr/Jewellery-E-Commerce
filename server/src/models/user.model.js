// Defines data structure for MongoDB (Mongoose)

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  
    firstName: { 
         type: String,
         required: true,
        },
    lastName: { 
        type: String, 
        required: true,
         },
    password: { 
        type: String,
         required: true,
         },
    email: { 
        type: String,
        required: true,
        unique: true,
        },
    mobile: { 
            type: String,
        },
}, { timestamps: true });


// lets create table for this schema
// const User = mongoose.model("users", userSchema);
// module.exports = User;

// ES6 export - single line export
export default mongoose.model("User", userSchema);