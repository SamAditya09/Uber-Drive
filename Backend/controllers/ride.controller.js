const rideService = require("../services/ride.service");
const mapService = require("../services/map.service");
const { validationResult } = require("express-validator");
const {sendMessageToSocketId} = require("../socket");
const rideModel = require("../models/ride.model");

module.exports.createRide = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { pickup, destination, vehicleType } = req.body;

  try {
    const ride = await rideService.createRide({
      user: req.user._id,
      pickup,
      destination,
      vehicleType,
    });
    res.status(201).json({ ride });

    const pickupCoordinates = await mapService.getAddressCoordinate(pickup);

    console.log(pickupCoordinates);

    const captainInRadius = await mapService.getCaptainsInTheRadius(
      pickupCoordinates.ltd,
      pickupCoordinates.lng,
      10000
    );

    ride.otp = ""
    const rideWithUser = await rideModel.findOne({ _id: ride._id }).populate("user");

    captainInRadius.map(captain => {
      sendMessageToSocketId(captain.socketId, {
        event: "new-ride",
        data: rideWithUser
      })
    })
    
    // console.log(captainInRadius);
  } catch (error) {
    console.error("Error in createRide controller:", error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports.getFare = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { pickup, destination } = req.query;

  try {
    const fare = await rideService.getFare(pickup, destination);
    return res.status(200).json({ fare });
  } catch (error) {
    console.error("Error in getFare controller:", error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports.confirmedRide = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { rideId } = req.body;

  try {
    const confirmedRide = await rideService.confirmedRide({rideId,captain: req.captain});
    sendMessageToSocketId(confirmedRide.user.socketId, {
      event: "ride-confirmed",
      data: confirmedRide
    })
    return res.status(200).json({ confirmedRide });
  } catch (error) {
    console.error("Error in confirmedRide controller:", error);    
    return res.status(500).json({ error: error.message });
  }
}
