import express from "express";
import mongoose from "mongoose";
import routerUser from "./Router/routerUser.js";
import routerCategory from "./Router/routerCategory.js"
import routerProduct from './Router/routerProduct.js'
import cors from 'cors'

const PORT = 5000
const DB_URL = 'mongodb+srv://malik:malik@cluster0.5wsan4n.mongodb.net/coffee-js?retryWrites=true&w=majority&appName=Cluster0'

const app = express()
app.use(cors());

app.use(express.json())
app.use('/api/user', routerUser)
app.use('/api/category', routerCategory)
app.use('/api/product', routerProduct)



async function startApp() {
   try {
      await mongoose.connect(DB_URL)
      app.listen(PORT, () => console.log(`Listen on port ${PORT}`))
   } catch(e) {
      console.log(e)
   }
}

startApp()