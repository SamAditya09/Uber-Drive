const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');
const mapController = require('../controllers/map.controller');
const {query} = require('express-validator');

router.get('/get-coordinates',
    query('address').isLength({min:3}).withMessage("Name must be at least 3 characters long"),
     authMiddleware.authUser, mapController.getCoordinates
);

router.get('/get-distance-time', 
    query('origin').isString().isLength({min:3}),
    query('destination').isString().isLength({min:3}),
    authMiddleware.authUser, mapController.getDistance
);

router.get('/get-suggestions',
    query('input').isString().isLength({min:3}),
    authMiddleware.authUser, mapController.getSuggestions
)
module.exports = router;