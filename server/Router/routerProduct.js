import Router from 'express';
import ProductsController from '../Controller/ProductController.js'

const router = Router()

router.get('/all', ProductsController.getAll)
router.get('/:id', ProductsController.getOne)
router.get('/by-category/:id', ProductsController.getByCategory)
router.post('/create', ProductsController.create)
router.put('/update', ProductsController.update)


export default router