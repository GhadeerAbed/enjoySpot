import React from "react";
import {
  Activities,
  Blog,
  ContactBanner,
  ExploreMore,
  Hero,
  PackagesSection,
} from "./components/page";
import WeatherDashboard from "./components/WeatherDashboard/page";

export const MainHome = () => {
  return (
    <>
      <Hero />
      <Activities />
      <PackagesSection />
      <Blog />
      <ContactBanner />
      <WeatherDashboard />
      <ExploreMore />
    </>
  );
};

export default MainHome;
