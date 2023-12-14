import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

const BookedCar = ({ bookedCarData }) => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    if (bookedCarData) {
      mapboxgl.accessToken = 'pk.eyJ1IjoiYWRhcnNoYTE4NiIsImEiOiJjbHExMHNnZ2swMHg2Mm1ueDR2Z2M5M3pwIn0.aLPBHJx5ovdEQn7ETQWt2w';
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [0, 0],
        zoom: 2,
      });

      new mapboxgl.Marker().setLngLat([bookedCarData.startLng, bookedCarData.startLat]).addTo(map);
      new mapboxgl.Marker().setLngLat([bookedCarData.endLng, bookedCarData.endLat]).addTo(map);

      const bounds = [
        [bookedCarData.startLng, bookedCarData.startLat],
        [bookedCarData.endLng, bookedCarData.endLat],
      ];
      map.fitBounds(bounds, { padding: 50 });
    }
  }, [bookedCarData]);

  return (
    <div>
      {bookedCarData ? (
        <>
          <h5>Booked Car Details</h5>
          <p>Driver Name: {bookedCarData.driverName}</p>
          <p>Car Number: {bookedCarData.driver_car_id}</p>
          <p>Drive From: {bookedCarData.driveFrom}</p>
          <p>Drive To: {bookedCarData.driveTo}</p>
          <p>Drive Time: {bookedCarData.driveStartTime}</p>
          <p>Number of Seats: {bookedCarData.noSeats}</p>
          <div ref={mapContainerRef} style={{ height: '400px', width: '100%', marginTop: '20px', border: '1px solid #ccc' }} />
        </>
      ) : (
        <p>No booked car data available</p>
      )}
    </div>
  );
};

export default BookedCar;