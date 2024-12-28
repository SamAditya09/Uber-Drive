const mapService = require("../services/map.service");
const { validationResult } = require("express-validator");

module.exports.getCoordinates = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  const { address } = req.query;

  try {
    const coordinates = await mapService.getAddressCoordinate(address);
    res.status(200).json({ coordinates });
  } catch (error) {
    res.status(400).json({ message: 'Coordinates not found' });
  }
};


module.exports.getDistance = async (req, res) => {
  try {
      const { origin, destination } = req.query;
      const result = await mapService.getDistance(origin, destination);
      res.status(200).send(result);
  } catch (error) {
      console.error("Error in getDistanceTime:", error.message);
      res.status(500).send({ error: error.message });
  }
};

module.exports.getSuggestions = async (req, res,next) => {
  try {
      const { input } = req.query;
      const result = await mapService.getSuggestions(input);
      res.status(200).send(result);
  } catch (error) {
      console.error("Error in getSuggestion:", error.message);
      res.status(500).send({ error: error.message });
  }
};