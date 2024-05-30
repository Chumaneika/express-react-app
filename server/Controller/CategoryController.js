import Category from '../Models/Category.js'

class CategoryController {
   async create(req, res) {
      try {
         const {name} = req.body
         const category = await Category.create({name})
         res.json(category)
      } catch(e) {
         res.status(404).json("Page not found")
      }
   }

   async update(req, res) {
      try {
         const category = req.body
         if(!category._id) {
            res.status(400).json({message: "Id doesn't exits"})
         }
         const updateCategory = await Category.findByIdAndUpdate(category._id, category, {new: true})
         res.json(updateCategory)
      } catch(e) {
         res.status(500).json(e)
      }
   }

   async delete(req, res) {
      try {
         const {id} = req.params
         if (!id) {
            res.status(400).json({message: "It does not exits"})
         }
         const category = await Category.findByIdAndDelete(id)
         res.json(category)
      } catch(e) {
         res.status(500).json(e)
      }
   }

   async getAll(req, res) {
      try {
         const categories = await Category.find()
         res.json(categories)
      } catch (e) {
         res.status(404).json("Page not Found")
      }
   }
}

export default new CategoryController