import { Router } from 'express'

const router = Router()

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('users2')
})

export default router
