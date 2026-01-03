import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true, 
        },
        email: {
            type: String,
            required: true,
            unique: true, 
        },
        phoneNumber: {
            type: String,
            required: true, 
            unique: true, 
        },
        message: {
            type: String,
        },
    },
    {timestamps : true}
);

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;