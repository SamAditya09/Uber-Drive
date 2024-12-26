import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import FinishRide from "../components/FinishRide";

const CaptainRiding = () => {
  const [finishRidePanel, setFinishRidePanel] = useState(false);

  const finishRidePanelRef = useRef(null);

  useGSAP(() => {
    if (finishRidePanel) {
      gsap.to(finishRidePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(finishRidePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [finishRidePanel]);
  return (
    <div className="h-screen overflow-hidden relative">
      <div className="fixed flex items-center justify-between w-full p-6">
        <img
          className="w-16"
          src="https://pngimg.com/d/uber_PNG24.png"
          alt="logo"
        />
        <Link
          to={"/captains/logout"}
          className="h-10 w-10 flex items-center justify-center bg-white rounded-full shadow-md"
        >
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-4/5">
        <img
          className="h-full w-full object-cover"
          src="https://s.wsj.net/public/resources/images/BN-XR453_201802_M_20180228165619.gif"
          alt="image"
        />
      </div>
      <div className="h-1/5 p-6 flex items-center justify-between bg-yellow-400"
      onClick={() => setFinishRidePanel(true)}
      >
        <h5 className="text-2xl cursor-pointer text-center absolute mb-[6rem]  w-full p-1">
          <i className="ri-arrow-up-wide-line"></i>
        </h5>
        <h4 className="text-xl font-semibold">4 KM Away</h4>
        <button className="p-3 px-10 font-semibold text-base rounded-lg bg-green-500">
          Complete Ride
        </button>
      </div>
      <div
        ref={finishRidePanelRef}
        className="fixed w-full z-10 bottom-0 bg-white px-3 py-10 pt-12"
      >
        <FinishRide setFinishRidePanel={setFinishRidePanel}  />
      </div>
    </div>
  );
};

export default CaptainRiding;
