"use client";
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import axios from "axios";
import { Button } from "@/components/page";

export const ActivityTimePicker = ({ minHours = 2 }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date()); // Default to today
  const [fromHour, setFromHour] = useState<string | null>(null);
  const [toHour, setToHour] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [weatherData, setWeatherData] = useState<any>(null);

  // Handle hour changes for "from" and "to" inputs
  const handleHourChange = (type: "from" | "to", value: string) => {
    if (type === "from") {
      setFromHour(value);
    } else {
      setToHour(value);
    }
  };

  // Calculate difference between selected hours
  const calculateHourDifference = () => {
    if (fromHour && toHour) {
      const [fromH, fromM] = fromHour.split(":").map(Number);
      const [toH, toM] = toHour.split(":").map(Number);

      const fromTime = new Date();
      fromTime.setHours(fromH, fromM);

      const toTime = new Date();
      toTime.setHours(toH, toM);

      const diff = (toTime.getTime() - fromTime.getTime()) / (1000 * 60 * 60); // Difference in hours
      return diff;
    }
    return 0;
  };

  // Fetch weather data for the selected date
  const fetchWeatherData = async (date: Date) => {
    const formattedDate = date.toISOString().split("T")[0]; // Format as YYYY-MM-DD

    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json`,
        {
          params: {
            key: "c0ba69ded7354dd69d894240240510", // Replace with your WeatherAPI key
            q: "Dubai", // Location
            dt: formattedDate, // Specific date
          },
        }
      );

      if (response.data?.forecast?.forecastday?.[0]?.day) {
        setWeatherData(response.data.forecast.forecastday[0].day);
      } else {
        setWeatherData(null); // No weather data available
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  // Fetch weather data whenever the selected date changes
  useEffect(() => {
    if (selectedDate) {
      fetchWeatherData(selectedDate);
    }
  }, [selectedDate]);

  // Handle the booking process
  const handleBookNow = async () => {
    const hours = calculateHourDifference();
    if (hours < minHours) {
      setError(`الحد الأدنى للحجز هو ${minHours} ساعات.`);
      return;
    }

    setError(null);
    setLoading(true);
    setSuccess(false);

    const bookingData = {
      date: selectedDate?.toISOString().split("T")[0],
      from: fromHour,
      to: toHour,
      totalHours: hours,
    };

    try {
      const response = await axios.post("/api/book-activity", bookingData);

      if (response.status === 200) {
        setSuccess(true);
      } else {
        setError("حدث خطأ أثناء الحجز. يرجى المحاولة مرة أخرى.");
      }
    } catch (err) {
      setError("فشل الاتصال بالخادم. حاول لاحقًا.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-[360px]  p-4 space-y-6 bg-[#F8F8F8] rounded-lg shadow-lg">
      {/* Display weather data */}
      {weatherData && (
        <div className="text-primary flex justify-evenly items-center">
          <div>
            <p className="text-sm font-bold">
              {selectedDate?.toLocaleDateString("en-US", { weekday: "long" })}
            </p>
            <p className="text-4xl font-bold">{weatherData.avgtemp_c}°C</p>
            <p className="text-sm font-bold">{weatherData.condition.text}</p>
          </div>
          <div>
            <div>
              <p className="font-medium text-center">Wind</p>
              <p className="text-center">{weatherData.maxwind_kph} km/h</p>
            </div>
            <div>
              <p className="font-medium text-center">Humidity</p>
              <p className="text-center">{weatherData.avghumidity}%</p>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white p-2">
        <Calendar
          onClickDay={(date) => setSelectedDate(date)}
          value={selectedDate}
          className={"!border-none !p-3"}
        />

        <div className="flex justify-between items-center space-x-4 border-t px-2">
          <div className="flex flex-col">
            <input
              type="time"
              value={fromHour || ""}
              onChange={(e) => handleHourChange("from", e.target.value)}
              className="border border-transparent "
              placeholder="From"
            />
          </div>
          <div className="h-9 w-[1px] bg-gray-400 border"></div>
          <div className="flex flex-col">
            <input
              type="time"
              value={toHour || ""}
              onChange={(e) => handleHourChange("to", e.target.value)}
              className="border border-transparent focus:outline-none ring-0"
              placeholder="TO"
            />
          </div>
        </div>
      </div>

      {/* Error message */}
      {error && <div className="text-center text-sm text-red-500">{error}</div>}

      {/* Loading and success messages */}
      {loading && (
        <div className="text-center text-blue-500 text-sm">جاري الحجز...</div>
      )}
      {success && (
        <div className="text-center text-green-500 text-sm">
          تم الحجز بنجاح!
        </div>
      )}

      {/* Total price and booking button */}
      <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center justify-between w-full">
          <p className="text-lg text-primary">Total Price</p>
          <p className="text-xl font-medium">5000 AED</p>
        </div>
        <Button
          className="px-4 py-2 bg-primary text-white"
          onClick={handleBookNow}
          disabled={!selectedDate || !fromHour || !toHour || loading}
        >
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default ActivityTimePicker;
