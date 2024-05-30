import mongoose from "mongoose";

const Category = new mongoose.Schema({
   name: {type: String, required: true, unique: true},
   photo: {type: String, required: true}
})

export default mongoose.model('Category', Category)