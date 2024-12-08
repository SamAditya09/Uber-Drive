const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/register',[
    body("fullName").isLength({min:3}).withMessage("Name must be at least 3 characters long"),
    body("email").isEmail().withMessage("Invalid email address"),
    body("password").isLength({min:6}).withMessage("Password must be at least 6 characters long"),
],userController.registerUer);

router.post('/login',[
    body("email").isEmail().withMessage("Invalid email address"),
    body("password").isLength({min:6}).withMessage("Password must be at least 6 characters long"),
]
,userController.loginUser);


router.get('/profile',authMiddleware.authUser,userController.getUserProfile);
router.get('/logout',authMiddleware.authUser,userController.logoutUser);


module.exports = router;