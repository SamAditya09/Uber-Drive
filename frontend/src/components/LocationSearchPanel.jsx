import React from "react";

const LocationSearchPanel = (props) => {
    
  const locations = [
    "Devavrata, Office No 604, Sector 17, Near Uti Institute, Vashi, Navi Mumbai",
    "30/31, Adeswar Estate, Opp Shankar Estate, Amraiwadi",
    "24B, Park Street, New York",
  ];
  return (
    <div>
      {/* sample data */}
      {locations.map((location, index) => (
        <div key={index} onClick={() =>{
            props.setVehiclePanel(true)
            props.setPanelOpen(false)
        }} className="flex border-2 border-gray-500 active:border-black rounded-xl items-center justify-start my-2 gap-2 cursor-pointer">
          <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
            <i class="ri-map-pin-line"></i>
          </h2>
          <h4 className="font-medium">{location}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
