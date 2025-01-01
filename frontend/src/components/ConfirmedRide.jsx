import React from "react";

const ConfirmedRide = (props) => {
  console.log("ConfirmedRide vehicleType:", props.vehicleType);

  return (
    <div>
      <h5
        className="text-2xl cursor-pointer text-center absolute top-0 p-1 w-full"
        onClick={() => props.setConfirmedRidePanel(false)}
      >
        <i class="ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Confirm Your Ride</h3>
      <div className="flex flex-col gap-2 items-center justify-between">
        <img
          className="h-[10rem] "
          src="https://attic.sh/kboy7kzto2fs18ssjuw0z0fxnf89"
          alt=""
        />
        <div className="w-full mt-4">
          <div className="flex items-center gap-2 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="font-medium text-lg">562, 2nd Floor, Sector 17</h3>
              <p className="text-sm tezt-gray-600">{props.pickup}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 p-3 border-b-2">
            <i className="text-lg ri-user-fill"></i>
            <div>
              <h3 className="font-medium text-lg">562, 2nd Floor, Sector 17</h3>
              <p className="text-sm tezt-gray-600">{props.destination}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 p-3">
            <i className="text-lg ri-currency-line"></i>
            <div>
              <h3 className="font-medium text-lg">₹{props.fare[props.vehicleType]}</h3>
              <p className="text-sm tezt-gray-600">Cash</p>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            props.setVehicleFound(true);
            props.setConfirmedRidePanel(false);
            props.createRide(props.vehicleType);
          }}
          className="w-full mt-4 py-2 font-semibold text-base rounded-lg bg-green-500"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmedRide;
