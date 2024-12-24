import React from "react";
import { Link } from "react-router-dom";

const CaptainHome = () => {
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
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start gap-2">
            <img className="h-10 w-10 rounded-full objcet-cover" src="https://d22e6o9mp4t2lx.cloudfront.net/cms/pfp3_d7855f9562.webp" alt="" />
            <h4 className="text-lg font-medium">Aditya</h4>
          </div>
          <div>
            <h4 className="tex-xl font-semibold">₹168.32</h4>
            <p className="text-sm text-gray-600">Earned</p>
          </div>
        </div>
        <div className="flex p-4 mt-6 bg-gray-100 rounded-xl justify-center items-start gap-4">
          <div className="text-center">
          <i className="text-3xl mb-2 font-thin ri-timer-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
          </div>
          <div className="text-center">
          <i className="text-3xl mb-2 font-thin ri-speed-up-fill"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
          </div>
          <div className="text-center">
          <i className="text-3xl mb-2 font-thin ri-booklet-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaptainHome;
