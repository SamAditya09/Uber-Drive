import React from "react";

const LocationSearchPanel = ({
  suggestions,
  setVehiclePanel,
  setPanelOpen,
  setPickup,
  setDestination,
  activeField,
}) => {

  const handleSuggestionClick = (suggestion) => {
    if (activeField === "pickup") {
      setPickup(suggestion);
    } else if (activeField === "destination") {
      setDestination(suggestion);
    }
  }
  return (
    <div>
      {/* Display fetched data */}
      {suggestions.map((location, index) => (
        <div
          key={index}
          onClick={() => {
            handleSuggestionClick(location.description);
          }}
          className="flex border-2 border-gray-500 active:border-black rounded-xl items-center justify-start my-2 gap-2 cursor-pointer"
        >
          <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
            <i class="ri-map-pin-line"></i>
          </h2>
          <h4 className="font-medium">{location.description}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
