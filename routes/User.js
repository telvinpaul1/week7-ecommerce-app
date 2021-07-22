const exprerss = require('express')
const router = exprerss.Router();
const { signup, signin } = require('../conrtoller/User')

router.post('/signup', signup)
router.post('/signin', signin)

module.exports = router;