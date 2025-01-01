import React, { useEffect, useState } from 'react'
import {LoadScript, GoogleMap, Marker} from '@react-google-maps/api'

const containerStyle = {
    width: '100%',
    height: '100%',
};

const center = {
    lat: -3.745,
    lng: -38.523
};

const LiveTracking = () => {
    const [currentPosition, setCurrentPosition] = useState(center);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            setCurrentPosition({ ltd: latitude, lng: longitude });
        });

        const watchId = navigator.geolocation.watchPosition((position) => {
            const { latitude, longitude } = position.coords;
            setCurrentPosition({ ltd: latitude, lng: longitude });
        });

        return () => {
            navigator.geolocation.clearWatch(watchId);
        };
    }, []);

    useEffect(() => {
        const updatePosition = () => {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;

                console.log('Position updated:', latitude, longitude);

                setCurrentPosition({ ltd: latitude, lng: longitude });
            });
        };
        updatePosition();
        const intervalId = setInterval(updatePosition, 5000);
    }, []);

  return (
    <div>
      <LoadScript
        googleMapsApiKey={import.meta.env.GOOGLE_MAPS_API_KEY}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={currentPosition}
          zoom={15}
        >
          <Marker position={currentPosition} />
        </GoogleMap>
      </LoadScript>
    </div>
  )
}

export default LiveTracking