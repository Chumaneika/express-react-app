import Router from 'express'
import UserController from '../Controller/UserController.js'

const router = Router()

router.post('/signup', UserController.create)
router.post('/signin', UserController.signIn)
router.get('/all', UserController.getAll)

export default router