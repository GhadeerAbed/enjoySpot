"use client"
import React from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

export const ActivityMap = ({ latitude , longitude  }: { latitude: number; longitude: number }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDcBNvhTn41CVismsIzNM3Fr7ztlE73DRc", // Replace with your API key
  });

  if (!isLoaded) return <p>Loading Map...</p>;

  return (
    <div className="map-container h-[250px] max-w-2xl">
      <GoogleMap
        center={{ lat: latitude, lng: longitude }}
        zoom={12}
        mapContainerStyle={{ width: "100%", height: "100%" }}
      >
        {/* Place a marker at the given coordinates */}
        <Marker position={{ lat: latitude, lng: longitude }} />
      </GoogleMap>
    </div>
  );
};

export default ActivityMap;
