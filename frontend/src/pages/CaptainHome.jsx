import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import CaptainDetails from "./CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";
import { SocketContext } from "../context/SocketContext";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainHome = () => {
  const [ridePopUpPanel, setRidePopUpPanel] = useState(true);
  const [confirmRidePopPanel, setConfirmRidePopPanel] = useState(false);

  const ridePopUpPanelRef = useRef(null);
  const confirmRidePopPanelRef = useRef(null);

  const updateLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        socket.emit("update-location-captain", {
          userId: captain._id,
          location: {
            ltd: position.coords.latitude,
            lng: position.coords.longitude,
          },
        });
      });
    }
  };

  const locationInterval = setInterval(updateLocation, 5000);

  const { socket } = useContext(SocketContext);
  const { captain } = useContext(CaptainDataContext);

  useEffect(() => {
    socket.emit("join", { userType: "captain", userId: captain._id });
  });

  useGSAP(() => {
    if (ridePopUpPanel) {
      gsap.to(ridePopUpPanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(ridePopUpPanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [ridePopUpPanel]);

  useGSAP(() => {
    if (confirmRidePopPanel) {
      gsap.to(confirmRidePopPanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(confirmRidePopPanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [confirmRidePopPanel]);

  return (
    <div className="h-screen">
      <div className="fixed flex items-center justify-between w-full  p-6">
        <img
          className="w-16"
          src="https://pngimg.com/d/uber_PNG24.png"
          alt=""
        />
        <Link
          to={"/captains/logout"}
          className="h-10 w-10 flex items-center justify-center bg-white rounded-full shadow-md"
        >
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-3/5">
        <img
          className="h-full w-full object-cover"
          src="https://s.wsj.net/public/resources/images/BN-XR453_201802_M_20180228165619.gif"
          alt="image"
        />
      </div>
      <div className="h-2/5 p-6">
        <CaptainDetails />
      </div>
      <div
        ref={ridePopUpPanelRef}
        className="fixed w-full z-10 bottom-0 bg-white px-3 py-10 pt-12"
      >
        <RidePopUp
          setRidePopUpPanel={setRidePopUpPanel}
          setConfirmRidePopPanel={setConfirmRidePopPanel}
        />
      </div>
      <div
        ref={confirmRidePopPanelRef}
        className="fixed w-full h-screen z-10 bottom-0 bg-white px-3 py-10 pt-12"
      >
        <ConfirmRidePopUp
          setConfirmRidePopPanel={setConfirmRidePopPanel}
          setRidePopUpPanel={setRidePopUpPanel}
        />
      </div>
    </div>
  );
};

export default CaptainHome;
