import { use, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmedRide from "../components/ConfirmedRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmedRidePanel, setConfirmedRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);

  const panelRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmedRidePanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(() => {
    if (panelOpen) {
       gsap.to(panelRef.current, {
        height:'70%'
       })
    }else{
      gsap.to(panelRef.current, {
        height:'0%'
       })
    }
  }, [panelOpen]);

useGSAP(() => {
  if (vehiclePanel) {
     gsap.to(vehiclePanelRef.current, {
      transform:'translateY(0)'
     })
  }else{
    gsap.to(vehiclePanelRef.current, {
      transform:'translateY(100%)'
     })
  }
}, [vehiclePanel]);

useGSAP(() => {
  if (confirmedRidePanel) {
     gsap.to(confirmedRidePanelRef.current, {
      transform:'translateY(0)'
     })
  }else{
    gsap.to(confirmedRidePanelRef.current, {
      transform:'translateY(100%)'
     })
  }
}, [confirmedRidePanel]);

useGSAP(() => {
  if (vehicleFound) {
     gsap.to(vehicleFoundRef.current, {
      transform:'translateY(0)'
     })
  }else{
    gsap.to(vehicleFoundRef.current, {
      transform:'translateY(100%)'
     })
  }
}, [vehicleFound]);

useGSAP(() => {
  if (waitingForDriver) {
     gsap.to(waitingForDriverRef.current, {
      transform:'translateY(0)'
     })
  }else{
    gsap.to(waitingForDriverRef.current, {
      transform:'translateY(100%)'
     })
  }
}, [waitingForDriver]); 
  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-20 absolute left-5"
        src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg"
        alt=""
      />
      <div className="h-screen w-screen">
        <img
          className="h-full w-full object-cover"
          src="https://cdn.theatlantic.com/thumbor/BlEOtTo9L9mjMLuyCcjG3xYr4qE=/0x48:1231x740/960x540/media/img/mt/2017/04/IMG_7105/original.png"
          alt="image"
        />
      </div>
      <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="h-[30%] bg-white p-5 relative">
          <h5  onClick={() => setPanelOpen(!panelOpen)} className=" absolute right-6 top-3 text-2xl cursor-pointer">
          <i className={panelOpen ? "ri-arrow-down-wide-line" : "ri-arrow-up-wide-line"}></i>
          </h5>
          <h4 className="text-3xl font-semibold">Find a Trip</h4>
          <form action="" onSubmit={(e) => submitHandler(e)}>
            <div className="line absolute h-16 w-1 top-[39%] left-10 bg-gray-500 rounded-full"></div>
            <input
              onClick={() => setPanelOpen(true)}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="bg-[#eee] px-8 py-2 text-base rounded-lg w-full mt-3"
              type="text"
              placeholder="Add a Pickup Location"
            />
            <input
              onClick={() => setPanelOpen(true)}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-[#eee] px-8 py-2 text-base rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter your Destination"
            />
          </form>
        </div>
        <div ref={panelRef} className="bg-white h-0 p-5">
          <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel} />
        </div>
      </div>
      <div ref={vehiclePanelRef} className="fixed w-full z-10 bottom-0 bg-white px-3 py-6">
        <VehiclePanel setConfirmedRidePanel={setConfirmedRidePanel} setVehiclePanel={setVehiclePanel} />
      </div>
      <div ref={confirmedRidePanelRef} className="fixed w-full z-10 bottom-0 bg-white px-3 py-6">
        <ConfirmedRide setConfirmedRidePanel={setConfirmedRidePanel} setVehicleFound={setVehicleFound}/>
      </div>
      <div ref={vehicleFoundRef}  className="fixed w-full z-10 bottom-0 bg-white px-3 py-6">
        <LookingForDriver setVehicleFound={setVehicleFound} />
      </div>
      <div ref={waitingForDriverRef}   className="fixed w-full z-10 bottom-0 bg-white px-3 py-6">
        <WaitingForDriver waitingForDriver={waitingForDriver} />
      </div>
    </div>
  );
};

export default Home;
