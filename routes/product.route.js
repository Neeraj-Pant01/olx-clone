const { addProduct, getAproduct, getAllProducts, getSellerProducts} = require("../controllers/product.controller");

const router = require("express").Router();

router.post('/add',addProduct)
router.get('/:id',getAproduct)
router.get('/',getAllProducts)

//get products of a user
router.get('/seller/:userId',getSellerProducts)

module.exports = router;