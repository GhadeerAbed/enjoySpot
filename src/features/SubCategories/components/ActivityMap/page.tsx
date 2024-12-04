"use client"
import React, { useMemo } from "react";
import dynamic from "next/dynamic";
import { useLoadScript } from "@react-google-maps/api";

const GoogleMap = dynamic(() => import("@react-google-maps/api").then(mod => mod.GoogleMap), { ssr: false });
const Marker = dynamic(() => import("@react-google-maps/api").then(mod => mod.Marker), { ssr: false });

interface ActivityMapProps {
  latitude: number;
  longitude: number;
}

export const ActivityMap = ({ latitude, longitude }: ActivityMapProps) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDcBNvhTn41CVismsIzNM3Fr7ztlE73DRc", // Replace with your API key
  });

  const center = useMemo(() => ({ lat: latitude, lng: longitude }), [latitude, longitude]);

  if (!isLoaded) return <p>Loading Map...</p>;

  return (
    <div className="map-container h-[250px] max-w-2xl">
      <GoogleMap
        center={center}
        zoom={12}
        mapContainerStyle={{ width: "100%", height: "100%" }}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export default ActivityMap;