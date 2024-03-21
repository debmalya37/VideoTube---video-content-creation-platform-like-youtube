import  Mongoose, { Schema } from "mongoose";

const userSchema = new Mongoose.Schema({});

export User = Mongoose.model("User", userSchema);