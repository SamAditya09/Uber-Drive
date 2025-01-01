const rideModel = require("../models/ride.model");
const mapService = require("./map.service");
const crypto = require("crypto");

async function getFare(pickup, destination) {
  if (!pickup || !destination) {
    throw new Error("Pickup and destination are required");
  }

  try {
    const distanceTime = await mapService.getDistanceTime(pickup, destination);
    console.log("Distance and time details:", distanceTime);

    const baseFare = {
      auto: 15,
      car: 30,
      motorcycle: 20,
    };

    const perKmRate = {
      auto: 8,
      car: 10,
      motorcycle: 5,
    };

    const perMinRate = {
      auto: 4,
      car: 5,
      motorcycle: 3,
    };

    // Ensure distance and duration are numbers
    const distance = distanceTime.distance;
    const duration = distanceTime.duration;

    if (isNaN(distance) || isNaN(duration)) {
      console.error("Invalid distance or duration:", { distance, duration });
      throw new Error("Invalid distance or duration received from map service");
    }

    const fare = {
      auto:
        baseFare.auto + distance * perKmRate.auto + duration * perMinRate.auto,
      car: baseFare.car + distance * perKmRate.car + duration * perMinRate.car,
      motorcycle:
        baseFare.motorcycle +
        distance * perKmRate.motorcycle +
        duration * perMinRate.motorcycle,
    };

    return fare;
  } catch (error) {
    console.error("Error in getFare:", error.message);
    throw new Error(
      "Failed to calculate fare due to an issue with map service"
    );
  }
}

module.exports.getFare = getFare;

function getOtp(num) {
  function generateOtp(num) {
    const otp = crypto
      .randomInt(Math.pow(10, num - 1), Math.pow(10, num))
      .toString();
    return otp;
  }
  return generateOtp(num);
}

module.exports.createRide = async ({
  user,
  pickup,
  destination,
  vehicleType,
}) => {
  if (!user || !pickup || !destination || !vehicleType) {
    throw new Error("All fields are required");
  }

  try {
    const fare = await getFare(pickup, destination);

    if (!fare[vehicleType]) {
      throw new Error("Invalid vehicle type");
    }

    const ride = await rideModel.create({
      user,
      pickup,
      destination,
      otp: getOtp(6),
      fare: fare[vehicleType],
      vehicleType,
    });

    return ride;
  } catch (error) {
    console.error("Error in createRide service:", error.message);
    throw error;
  }
};

module.exports.confirmedRide = async ({ rideId, captain }) => {
  if (!rideId) {
    throw new Error("Ride id is required");
  }
  try {
    const ride = await rideModel
      .findOneAndUpdate(
        { _id: rideId },
        { status: "accepted", captain: captain._id },
        { new: true }
      )
      .populate("user")
      .populate("captain")
      .select("+otp");
    if (!ride) {
      throw new Error("Ride not found");
    }
    return ride;
  } catch (error) {
    console.error("Error in confirmedRide service:", error.message);
    throw error;
  }
};

module.exports.startRide = async ({ rideId, otp, captain }) => {
  if (!rideId || !otp) {
    throw new Error("Ride id and otp are required");
  }
  try {
    const ride = await rideModel
      .findOne({ _id: rideId })
      .populate("user")
      .populate("captain")
      .select("+otp");
    if (!ride) {
      throw new Error("Ride not found");
    }
    if (ride.status !== "accepted") {
      throw new Error("Ride is not accepted");
    }
    if (ride.otp !== otp) {
      throw new Error("Invalid OTP");
    }

    await rideModel.findOneAndUpdate({ _id: rideId }, { status: "ongoing" });

    return ride;
  } catch (error) {
    console.error("Error in startRide service:", error.message);
    throw error;
  }
};

module.exports.endRide = async ({ rideId, captain }) => {
  if (!rideId) {
    throw new Error("Ride id is required");
  }
  try {
    const ride = await rideModel
      .findOne({ 
        _id: rideId,
        captain: captain._id
      })
      .populate("user")
      .populate("captain");
    if (!ride) {
      throw new Error("Ride not found");
    }
    if (ride.status !== "ongoing") {
      throw new Error("Ride is not ongoing");
    }
    
    await rideModel.findOneAndUpdate({ _id: rideId }, { status: "completed" }); 

    return ride;
  } catch (error) {
    console.error("Error in endRide service:", error.message);
    throw error;
  }
};
