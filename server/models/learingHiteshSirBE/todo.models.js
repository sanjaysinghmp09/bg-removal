import mongoose from "mongoose"

const User = new mongoose.Schema({
    
} , {timestamps : true})

export const members = mongoose.model("members" , User )