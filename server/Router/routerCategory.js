import Router from 'express'
import CategoryController from '../Controller/CategoryController.js'

const router = Router()

router.get('/all', CategoryController.getAll)
router.post('/create', CategoryController.create)
router.put('/update', CategoryController.update)
router.delete('/delete/:id', CategoryController.delete)

export default router