const express = require("express");
const router = express.Router();

const {userSignUp,userLogin} = require("../controller/userController");
const { varifyToken } = require("../middleware/JwtAuth");

// Public route
router.route('/signup').post(userSignUp)
router.route('/login').post(userLogin)

// Protected route  needs jwt token
router.route('/get-profile').post(varifyToken,userLogin)


module.exports = router;