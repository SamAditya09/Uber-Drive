import React, { useState } from "react";
import { Link } from "react-router";
import axios from "axios";
import { useNavigate } from "react-router";

const ConfirmRidePopUp = (props) => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/rides/start-ride`,
        {
          params: {
            rideId: props.ride._id,
            otp: otp,
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.status === 200) {
        props.setConfirmRidePopPanel(false);
        props.setRidePopUpPanel(false);
        navigate("/captain-riding", {
          state: {
            ride: props.ride,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h5
        className="text-2xl cursor-pointer text-center absolute top-0 p-1 w-full"
        onClick={() => props.setRidePopUpPanel(false)}
      >
        <i class="ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">
        Confirm this ride to Start
      </h3>
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
              <h3 className="font-medium text-lg">562, 2nd Floor, Sector 17</h3>
              <p className="text-sm tezt-gray-600">{props.ride?.pickup}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 p-3 border-b-2">
            <i className="text-lg ri-user-fill"></i>
            <div>
              <h3 className="font-medium text-lg">562, 2nd Floor, Sector 17</h3>
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
        <div className="mt-6 w-full">
          <form onSubmit={submitHandler}>
            <input
              onChange={(e) => setOtp(e.target.value)}
              value={otp}
              type="text"
              placeholder="Enter OTP"
              className="bg-[#eee] px-8 py-2 text-base rounded-lg w-full mt-3"
            />
            <button className="w-full flex justify-center mt-4 p-3 font-semibold text-lg rounded-lg bg-green-500">
              Confirm
            </button>
            <button
              onClick={() => {
                props.setConfirmRidePopPanel(false);
                props.setRidePopUpPanel(false);
              }}
              className="w-full mt-4 p-3 font-semibold text-lg rounded-lg bg-red-400"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRidePopUp;
