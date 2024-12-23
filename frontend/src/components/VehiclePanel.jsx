import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
        <h5 className="text-2xl cursor-pointer text-center absolute top-0 p-1 w-full" onClick={() => props.setVehiclePanel(false)}><i class="ri-arrow-down-wide-line"></i></h5>
        <h3 className="text-2xl font-semibold mb-5">Choose a Ride</h3>
        <div onClick={() => props.setConfirmedRidePanel(true)} className="flex border-2 mb-2 active:border-black cursor-pointer rounded-xl w-full items-center justify-between p-3">
          <img className="h-20" src="https://attic.sh/kboy7kzto2fs18ssjuw0z0fxnf89" alt="" />
          <div className="w-1/2">
            <h4 className="font-medium text-sm">UberGo <span><i className="ri-user-3-fill"></i>4</span></h4>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-medium text-xs text-gray-700">Affordable, compact, and eco-friendly </p>
          </div>
          <h2 className="font-semibold text-xl ">₹190.20</h2>
        </div>
        <div onClick={() => props.setConfirmedRidePanel(true)} className="flex border-2 mb-2 active:border-black cursor-pointer rounded-xl w-full items-center justify-between p-3">
          <img className="h-20" src="https://5.imimg.com/data5/SELLER/Default/2024/2/388894014/IQ/PY/UO/9653610/ape-city-cng-auto-rickshaw-230-cc-500x500.png" alt="" />
          <div className="w-1/2">
            <h4 className="font-medium text-sm">UberGo <span><i className="ri-user-3-fill"></i>3</span></h4>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-medium text-xs text-gray-700">Affordable, compact, and eco-friendly </p>
          </div>
          <h2 className="font-semibold text-xl ">₹120</h2>
        </div>
        <div onClick={() => props.setConfirmedRidePanel(true)} className="flex border-2 mb-2 active:border-black cursor-pointer rounded-xl w-full items-center justify-between p-3">
          <img className="h-20" src="https://www.shutterstock.com/image-vector/commercial-motorcycle-taxi-driver-flat-260nw-1144442252.jpg" alt="" />
          <div className=" w-1/2">
            <h4 className="font-medium text-sm">UberGo <span><i className="ri-user-3-fill"></i>2</span></h4>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-medium text-xs text-gray-700">Affordable, compact, and eco-friendly </p>
          </div>
          <h2 className="font-semibold text-xl ">₹75</h2>
        </div>
    </div>
  )
}

export default VehiclePanel