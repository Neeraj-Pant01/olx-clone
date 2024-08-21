const { addProduct, getAproduct, getAllProducts} = require("../controllers/product.controller");

const router = require("express").Router();

router.post('/add',addProduct)
router.get('/:id',getAproduct)
router.get('/',getAllProducts)

module.exports = router;