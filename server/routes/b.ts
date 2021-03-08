import { Router } from 'express'

const router = Router()

/* move home page to angular spa */
router.get('/', (req, res, next) => {
  res.render('b', { title: 'Welcome to angular 1.8.x' })
})

export = router;
