import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://mused:test1234567@cluster0.xxkkhvy.mongodb.net/blogger');
    console.log("DB Connected");
}