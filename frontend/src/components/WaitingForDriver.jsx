import React from "react";

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5
        className="text-2xl cursor-pointer text-center absolute top-0 p-1 w-full"
        onClick={() => props.setWaitingForDriver(false)}
      >
        <i class="ri-arrow-down-wide-line"></i>
      </h5>
      <div className="flex items-center justify-between">
        <img className="h-10" src="https://attic.sh/kboy7kzto2fs18ssjuw0z0fxnf89" alt="" />
        <div className="text-right">
          <h2 className="text-lg font-medium capitalize">{props.ride?.captain.fullName.firstName + " " + props.ride?.captain.fullName.lastName + ""}</h2>
          <h4 className="text-xl font-semibold -mt-1 -mb-1">{props.ride?.captain.vehicle.plate}</h4>
          <p className="text-sm text-gray-600">Maruti Suziki Alto</p>
          <h1 className="text-lg font-semibold">{props.ride?.otp}</h1>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center justify-between">
        <div className="w-full mt-4">
          <div className="flex items-center gap-2 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="font-medium text-lg">562,Sector 17</h3>
              <p className="text-sm tezt-gray-600">{props.ride?.pickup}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 p-3 border-b-2">
            <i className="text-lg ri-user-fill"></i>
            <div>
              <h3 className="font-medium text-lg"> Sector 19</h3>
              <p className="text-sm tezt-gray-600">{props.ride?.destination}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 p-3">
            <i className="text-lg ri-currency-line"></i>
            <div>
              <h3 className="font-medium text-lg">₹{props.ride?.fare}</h3>
              <p className="text-sm tezt-gray-600">Cash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitingForDriver;
