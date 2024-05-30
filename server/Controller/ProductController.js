import Product from "../Models/Product.js"

class ProductController {
   async create(req, res) {
      try {
         const {name, description, photo, price, category} = req.body
         const product = await Product.create({name, description, photo, price, category})
         res.json(product)
      } catch(e) {
         res.status(404).json("Page not found")
      }
   }

   async getAll(req, res) {
      try {
         const products = await Product.find()
         res.json(products)
      } catch(e) {
         res.status(500).json(e)
      }
   }

   async getByCategory(req, res) {
      try {
         const { id } = req.params;
         if (!id) {
            return res.status(400).json({ message: 'Идентификатор категории не указан' });
         }
         const products = await Product.find({ category: id }).populate('category');
         if (!products || products.length === 0) {
            return res.status(404).json({ message: 'Продукты для предоставленного идентификатора категории не найдены' });
         }
         res.json(products);
      } catch (error) {
         console.error('Ошибка при получении продуктов по категории:', error);
         res.status(500).json({ message: 'Внутренняя ошибка сервера' });
      }
   }
   

   async getOne(req, res) {
      try {
         const {id} = req.params
         if (!id) {
            res.status(400).json({message: 'Id does not product'})
         }
         const product = await Product.findId(id)
         res.json(product)
      } catch(e) {
         res.status(500).json(e)
      }
   }

   async update(req, res) {
      try {
         const product = req.body
         if(!product._id) {
            res.status(400).json({message: "Id doesn't exits"})
         }
         const updateProduct = await Product.findByIdAndUpdate(product._id, product, {new: true})
         res.json(updateProduct)
      } catch(e) {
         res.status(500).json(e)
      }
   }
}

export default new ProductController