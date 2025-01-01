import React from "react";

const RidePopUp = (props) => {
  return (
    <div>
      <h5
        className="text-2xl cursor-pointer text-center absolute top-0 p-1 w-full"
        onClick={() => props.setRidePopUpPanel(false)}
      >
        <i class="ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">New Ride Available!</h3>
      <div className="flex items-center justify-between p-3 bg-yellow-500 rounded-lg mt-4">
        <div className="flex items-center gap-3 ">
          <img
            className="h-20 w-20 rounded-full object-cover"
            src="https://img.freepik.com/free-photo/portrait-man-cartoon-style_23-2151134012.jpg"
            alt=""
          />
          <h2 className="text-lg font-medium">
            {props.ride?.user.fullname.firstname +
              " " +
              props.ride?.user.fullname.lastname +
              ""}
          </h2>
        </div>
        <h5 className="text-lg font-semibold">2.3KM</h5>
      </div>
      <div className="flex flex-col gap-2 items-center justify-between">
        <div className="w-full ">
          <div className="flex items-center gap-2 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="font-medium text-lg">562, Sector 17</h3>
              <p className="text-sm tezt-gray-600">{props.ride?.pickup}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 p-3 border-b-2">
            <i className="text-lg ri-user-fill"></i>
            <div>
              <h3 className="font-medium text-lg"> 2nd Floor, Sector 19</h3>
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
        <div className="flex items-center justify-between w-full mt-5 ">
          <button
            onClick={() => {
              props.setRidePopUpPanel(false);
            }}
            className=" p-3 px-10 font-semibold text-base rounded-lg bg-gray-300"
          >
            Ignore
          </button>
          <button
            onClick={() => {
              props.setConfirmRidePopPanel(true);
              props.confirmedRide()
            }}
            className=" p-3 px-10 font-semibold text-base rounded-lg bg-green-500"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default RidePopUp;
