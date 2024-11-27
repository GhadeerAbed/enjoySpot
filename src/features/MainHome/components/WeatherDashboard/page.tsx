"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

export const WeatherDashboard = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          "https://api.weatherapi.com/v1/forecast.json",
          {
            params: {
              key: "c0ba69ded7354dd69d894240240510", 
              q: "Dubai", // Replace with your desired location
              days: 1, // Number of forecast days
              aqi: "no",
              alerts: "no",
            },
          }
        );
        setWeather(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeather();
  }, []);

  if (!weather) {
    return <div>Loading...</div>;
  }

  const { temp_c, condition, last_updated, humidity, wind_kph } =
    weather.current;
  const { sunrise, sunset } = weather.forecast.forecastday[0].astro;
  const day = weather.forecast.forecastday[0];

  return (
    <div className=" p-8 bg-gray-100 ">
      <div className="max-w-7xl mx-auto  ">
        <h2 className="text-xl text-primary mb-5 pl-[120px]">
          <strong>Weather in:</strong> UAE, Dubai
        </h2>
        <div className="flex justify-around">
        <div className="flex">
          <div>
            <p className="font-bold text-primary -mb-7">
              {new Date(day.date).toLocaleDateString("en-US", {
                weekday: "long",
              })}
            </p>
            <div className="text-[80px] font-bold text-primary">{temp_c}°</div>
            <p className="text-sm text-primary -mt-4">
              Last updated: {last_updated}
            </p>
          </div>
          <div className="flex justify-end items-center">
            <img
              src={day.day.condition.icon}
              alt={day.day.condition.text}
              className="w-32 h-32"
            />
            <div className=" text-primary font-bold -ml-7 mt-20 ">
              {day.day.condition.text}
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col">
            <p className="text-primary font-medium">Sunrise</p> <p className="text-[#757575]">{sunrise}</p>
          </div>
          <div className="flex flex-col">
            <p className="text-primary font-medium">Sunset</p>
            <p className="text-[#757575]"> {sunset}</p>
          </div>
          <div className="flex flex-col">
            <p className="text-primary font-medium">High</p>
            <p className="text-[#757575]"> {day.day.maxtemp_c}°C</p>
          </div>
          <div className="flex flex-col">
            <p className="text-primary font-medium">Low </p>
            <p className="text-[#757575]">{day.day.mintemp_c}°C</p>
          </div>
          <div className="flex flex-col">
            <p className="text-primary font-medium">Humidity</p>
            <p className="text-[#757575]"> {humidity}%</p>
          </div>
          <div className="flex flex-col">
            <p className="text-primary font-medium">Wind</p>
            <p className="text-[#757575]"> {wind_kph} km/h</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDashboard;
