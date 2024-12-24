import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen">
      <Link to={"/home"} className="fixed right-2 top-2 h-10 w-10 flex items-center justify-center bg-white rounded-full shadow-md">
        <i className="text-lg font-medium ri-home-5-line"></i>
      </Link>
      <div className="h-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://cdn.theatlantic.com/thumbor/BlEOtTo9L9mjMLuyCcjG3xYr4qE=/0x48:1231x740/960x540/media/img/mt/2017/04/IMG_7105/original.png"
          alt="image"
        />
      </div>
      <div className="h-1/2 p-4">
        <div className="flex items-center justify-between">
          <img
            className="h-20"
            src="https://attic.sh/kboy7kzto2fs18ssjuw0z0fxnf89"
            alt=""
          />
          <div className="text-right">
            <h2 className="text-lg font-medium">Aditya</h2>
            <h4 className="text-xl font-semibold -mt-1 -mb-1">MUM 123</h4>
            <p className="text-sm text-gray-600">Maruti Suziki Alto</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center justify-between">
          <div className="w-full mt-4">
            
            <div className="flex items-center gap-2 p-3 border-b-2">
              <i className="text-lg ri-user-fill"></i>
              <div>
                <h3 className="font-medium text-lg">
                  562, 2nd Floor, Sector 17
                </h3>
                <p className="text-sm tezt-gray-600">Mumbai</p>
              </div>
            </div>
            <div className="flex items-center gap-2 p-3">
              <i className="text-lg ri-currency-line"></i>
              <div>
                <h3 className="font-medium text-lg">₹72</h3>
                <p className="text-sm tezt-gray-600">Cash</p>
              </div>
            </div>
          </div>
        </div>
        <button className="w-full mt-4 py-2 font-semibold text-base rounded-lg bg-green-500">Make a Payment</button>
      </div>
    </div>
  );
};

export default Riding;
