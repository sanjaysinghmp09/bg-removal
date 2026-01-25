import mongoose from  "mongoose"

const userSchema = new mongoose.Schema({
    username: {
        typeof : String,
        unique: true 
    } 
    
})