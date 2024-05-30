import mongoose from "mongoose"

const Product = new mongoose.Schema({
   name: {type: String, required: true, unique: true},
   description: {type: String, required: true},
   photo: {type: String},
   price: {type: Number, required: true},
   category: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Category'}
})

export default mongoose.model('Product', Product)