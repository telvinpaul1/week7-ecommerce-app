const exprerss = require('express')
const router = exprerss.Router();
const { getAllProducts, postProuct, updateProduct, deleteProduct } = require('../conrtoller/Product')

router.get('/', getAllProducts)
router.post('/', postProuct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)

module.exports = router;