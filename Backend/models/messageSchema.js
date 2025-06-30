import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name Required"],
        minLength:[3 , "Name must contain atleast 3 letters"],
    },
    email:{
        type:String,
        required:[true,"email Required"],
        validate :[validator.isEmail,"Please provide a valid email"]
    },
    subject:{
        type:String,
        required:[true,"Subject Required"],
        minLength:[5 , "Subject must contain atleast 3 letters"],
    },
    message:{
        type:String,
        required:[true,"Message Required"],
        minLength:[10 , "Message must contain atleast 3 letters"],
    },
});

export const Message = mongoose.model("message",messageSchema);