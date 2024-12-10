const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const captainController = require('../controllers/captain.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/register',[
    body("fullName.firstName").isLength({min:3}).withMessage("Name must be at least 3 characters long"),
    body("email").isEmail().withMessage("Invalid email address"),
    body("password").isLength({min:6}).withMessage("Password must be at least 6 characters long"),
    body("vehicle.color").isLength({min:3}).withMessage("color must be at least 3 characters long"),
    body("vehicle.plate").isLength({min:3}).withMessage("plate must be at least 3 characters long"),
    body("vehicle.capacity").isNumeric().withMessage("capacity must be a number"),
    body("vehicle.vehicleType").isIn(['car', 'motorcycle', 'auto']).withMessage("vehicleType must be 'car', 'motorcycle', or 'auto'"),
],captainController.registerCaptain);

router.post('/login',[
    body("email").isEmail().withMessage("Invalid email address"),
    body("password").isLength({min:6}).withMessage("Password must be at least 6 characters long"),
]
,captainController.loginCaptain);

router.get('/profile',authMiddleware.authCaptain,captainController.getCaptainProfile);

router.post('/logout',captainController.logoutCaptain);

module.exports = router;