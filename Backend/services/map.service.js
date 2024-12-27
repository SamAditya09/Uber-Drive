const axios = require("axios");

module.exports.getAddressCoordinate = async (address) => {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const url = `https://maps.gomaps.pro/maps/api/geocode/json?address=${address}&key=${apiKey}`;

  try {
    const response = await axios.get(url);

    if (response.data.status === "OK" && response.data.results.length > 0) {
      const location = response.data.results[0].geometry.location;
      return { latitude: location.lat, longitude: location.lng };
    } else {
      throw new Error("Address not found");
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports.getDistanceTime = async (origin, destination) => {
  if (!origin || !destination) {
      throw new Error("Origin and destination are required");
  }

  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const url = `https://maps.gomaps.pro/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${apiKey}`;

  try {
      const response = await axios.get(url);

      // Validate the response status
      if (response.data.status !== "OK") {
          throw new Error(`API Error: ${response.data.status}`);
      }

      // Check for routes in the response
      const route = response.data.routes[0];
      if (!route || !route.legs || route.legs.length === 0) {
          throw new Error("No route data found");
      }

      // Extract distance and duration from the first leg
      const leg = route.legs[0];
      return {
          distance: leg.distance.text,
          duration: leg.duration.text,
      };
  } catch (error) {
      console.error("Error in getDistanceTime:", error.message);
      throw error;
  }
};// Implement getDirections function

module.exports.getSuggestions = async (input) => {
  if (!input) {
      throw new Error("Input query is required");
  }

  const apiKey = process.env.GOOGLE_MAPS_API_KEY; // Ensure the API key is set in your environment variables
  const url = `https://maps.gomaps.pro/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`;

  try {
      const response = await axios.get(url);

      // Validate the API response status
      if (response.data.status !== "OK") {
          throw new Error(`API Error: ${response.data.status}`);
      }

      // Extract suggestions from the response
      const suggestions = response.data.predictions;
      if (!suggestions || suggestions.length === 0) {
          throw new Error("No suggestions found");
      }

      // Return the suggestions in a simplified format
      return suggestions
  } catch (error) {
      console.error("Error in getSuggestions:", error.message);
      throw error;
  }
};// Implement getSuggestions function