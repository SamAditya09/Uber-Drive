import { useContext, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import axios from "axios";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmedRide from "../components/ConfirmedRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";
import { SocketContext } from "../context/SocketContext";
import { UserDataContext } from "../context/UserContext";
import { useNavigate } from "react-router";
import LiveTracking from "../components/LiveTracking";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmedRidePanel, setConfirmedRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);
  const [pickupSuggestions, setPicupSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const [activeField, setActiveField] = useState(null);
  const [fare, setFare] = useState({ car: 0, auto: 0, motorcycle: 0 });
  const [vehicleType, setVehicleType] = useState(null);
  const [ride, setRide] = useState(null);
  const navigate = useNavigate();

  const { socket } = useContext(SocketContext);
  const { user } = useContext(UserDataContext);

  useEffect(() => {
    socket.emit("join", { userType: "user", userId: user._id });
  }, [user]);

  socket.on("ride-confirmed", (ride) => {
    setVehicleFound(false);
    setWaitingForDriver(true);
    setRide(ride);
  });

  socket.on("ride-started", (ride) => {
    setWaitingForDriver(false);
    navigate("/riding", {
      state: {
        ride,
      },
    });
  });

  const panelRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmedRidePanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const handlePickupChange = async (e) => {
    setPickup(e.target.value);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`,
        {
          params: {
            input: e.target.value,
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setPicupSuggestions(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDestinationChange = async (e) => {
    setDestination(e.target.value);

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`,
        {
          params: {
            input: e.target.value,
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setDestinationSuggestions(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: "70%",
      });
    } else {
      gsap.to(panelRef.current, {
        height: "0%",
      });
    }
  }, [panelOpen]);

  useGSAP(() => {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehiclePanel]);

  useGSAP(() => {
    if (confirmedRidePanel) {
      gsap.to(confirmedRidePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(confirmedRidePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [confirmedRidePanel]);

  useGSAP(() => {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehicleFound]);

  useGSAP(() => {
    if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [waitingForDriver]);

  async function findTrip() {
    setVehiclePanel(true);
    setPanelOpen(false);

    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/rides/get-fare`,
      {
        params: {
          pickup,
          destination,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log(response.data);

    setFare(response.data.fare);
  }
  useEffect(() => {
    console.log("Component re-rendered"); // Debugging purposes only
  }, []);

  useEffect(() => {
    if (vehicleType) {
      console.log("Vehicle Type selected:", vehicleType);
    } else {
      console.log("Vehicle Type is missing or invalid");
    }
  }, [vehicleType]);
  async function createRide(vehicleType) {
    console.log("Vehicle Type Selected in createRide:", vehicleType);

    if (!vehicleType) {
      console.error("Vehicle Type is missing or invalid");
      return;
    }

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/rides/create`,
      {
        pickup,
        destination,
        vehicleType,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log("Ride created successfully:", response.data);
  }
  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-20 absolute left-5"
        src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg"
        alt=""
      />
      <div className="h-screen w-screen">
        <LiveTracking />
      </div>
      <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="h-[30%] bg-white p-5 relative">
          <h5
            onClick={() => setPanelOpen(!panelOpen)}
            className=" absolute right-6 top-3 text-2xl cursor-pointer"
          >
            <i
              className={
                panelOpen ? "ri-arrow-down-wide-line" : "ri-arrow-up-wide-line"
              }
            ></i>
          </h5>
          <h4 className="text-3xl font-semibold">Find a Trip</h4>
          <form action="" onSubmit={(e) => submitHandler(e)}>
            <div className="line absolute h-16 w-1 top-[39%] left-10 bg-gray-500 rounded-full"></div>
            <input
              onClick={() => {
                setPanelOpen(true);
                setActiveField("pickup");
              }}
              value={pickup}
              onChange={handlePickupChange}
              className="bg-[#eee] px-8 py-2 text-base rounded-lg w-full mt-3"
              type="text"
              placeholder="Add a Pickup Location"
            />
            <input
              onClick={() => {
                setPanelOpen(true);
                setActiveField("destination");
              }}
              value={destination}
              onChange={handleDestinationChange}
              className="bg-[#eee] px-8 py-2 text-base rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter your Destination"
            />
          </form>
          <button
            onClick={findTrip}
            className="bg-black text-white px-4 py-2 rounded-lg mt-3 w-full"
          >
            Find Trip
          </button>
        </div>
        <div ref={panelRef} className="bg-white h-0 p-5">
          <LocationSearchPanel
            suggestions={
              activeField === "pickup"
                ? pickupSuggestions
                : destinationSuggestions
            }
            setPanelOpen={setPanelOpen}
            setVehiclePanel={setVehiclePanel}
            setPickup={setPickup}
            setDestination={setDestination}
            activeField={activeField}
          />
        </div>
      </div>
      <div
        ref={vehiclePanelRef}
        className="fixed w-full z-10 bottom-0 bg-white px-3 py-6"
      >
        <VehiclePanel
          setConfirmedRidePanel={setConfirmedRidePanel}
          selectVehicle={setVehicleType}
          fare={fare}
          setVehiclePanel={setVehiclePanel}
        />
      </div>
      <div
        ref={confirmedRidePanelRef}
        className="fixed w-full z-10 bottom-0 bg-white px-3 py-6"
      >
        <ConfirmedRide
          createRide={createRide}
          pickup={pickup}
          destination={destination}
          fare={fare}
          vehicleType={vehicleType}
          setConfirmedRidePanel={setConfirmedRidePanel}
          setVehicleFound={setVehicleFound}
        />
      </div>
      <div
        ref={vehicleFoundRef}
        className="fixed w-full z-10 bottom-0 bg-white px-3 py-6"
      >
        <LookingForDriver
          createRide={createRide}
          pickup={pickup}
          destination={destination}
          fare={fare}
          vehicleType={vehicleType}
          setVehicleFound={setVehicleFound}
        />
      </div>
      <div
        ref={waitingForDriverRef}
        className="fixed w-full z-10 bottom-0 bg-white px-3 py-6"
      >
        <WaitingForDriver
          ride={ride}
          setWaitingForDriver={setWaitingForDriver}
          setVehicleFound={setVehicleFound}
          waitingForDriver={waitingForDriver}
        />
      </div>
    </div>
  );
};

export default Home;
