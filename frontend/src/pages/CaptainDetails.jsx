import React from 'react'

const CaptainDetails = () => {
  return (
    <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start gap-2">
            <img className="h-10 w-10 rounded-full objcet-cover" src="https://d22e6o9mp4t2lx.cloudfront.net/cms/pfp3_d7855f9562.webp" alt="" />
            <h4 className="text-lg font-medium">Aditya</h4>
          </div>
          <div>
            <h4 className="text-xl font-semibold">₹168.32</h4>
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
  )
}

export default CaptainDetails