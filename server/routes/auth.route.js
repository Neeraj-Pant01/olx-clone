const router = require("express").Router()
const {register, login, getAUser} = require("../controllers/auth.controller")

router.post('/register',register)
router.post('/login',login)
router.get('/:id',getAUser)

module.exports = router;