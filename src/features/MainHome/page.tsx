import React from "react";
import {
  Activities,
  Blog,
  ContactBanner,
  ExploreMore,
  Hero,
  PackagesSection,
} from "./components/page";

export const MainHome = () => {
  return (
    <>
      <Hero />
      <Activities />
      <PackagesSection />
      <Blog />
      <ContactBanner />
      <ExploreMore />
    </>
  );
};

export default MainHome;
