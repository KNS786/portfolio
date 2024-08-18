import React from "react";
import AboutInfo from "./about-info";
import AboutDetails from "./about-details";
import AboutContact from "./about-contact";

const AboutSection = () => {
  return (
    <div
      className="bg-primary text-white  w-full flex flex-col items-center"
      id="about"
    >
      <AboutInfo />
      <AboutDetails />
      <AboutContact />
    </div>
  );
};

export default AboutSection;
