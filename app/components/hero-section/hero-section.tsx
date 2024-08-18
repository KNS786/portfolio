"use client";
import React from "react";
import { NavBarSection } from "./navbar";
import { motion } from 'framer-motion';
import AnimatedText from "@/app/shared/ui/animated-text";
import CursorBlinker from "@/app/shared/ui/cursor-blinker";
import AnimatedSparkleSvg from "@/app/shared/ui/animated-sparkle";

const HeroSection = () => {

  const roles = ["Software Engineer", "FullStack Developer", "FrontEnd Developer"];


  return (
    <div
      id="home-target"
      className="relative bg-cover bg-center bg-no-repeat h-screen bg-hero-image w-full"
    >
      <AnimatedSparkleSvg/>
      <div className=" w-full fixed top-0">
        <NavBarSection />
      </div>
      <div className=" container mx-auto absolute w-full top-12 flex m-10 px-10 pt-24">
        <div className="flex-1  mt-8 ">
          <div className="flex flex-col text-white md:gap-10 ">
            <span className={"text-lg  md:text-[28px] font-leckerli"}>
              Hi there!
            </span>
            <span className="text-4xl  font-bold">
              I&#39;m{" "}
              <span className="text-[#0081FF] text-lg md:text-[40px] font-extrabold">
                Navani Nayak
              </span>
            </span>
            <motion.span className="text-lg md:text-[40px]">
              <AnimatedText texts={roles}/>
              <CursorBlinker/>
            </motion.span>
            <p className=" text-sm w-[250px] md:w-[450px]  md:text-2xl">
              Welcome to a space where software engineering and full stack development merge to craft innovative digital solutions. Here, your ideas transform into reality with exceptional technical expertise and creativity.
            </p>
            <div className=" rounded-3xl md:shadow-md  md:bg-[#303030]   text-sm font-semibold  px-4 w-40 py-2 text-center">
              {" "}
              ABOUT ME
            </div>
          </div>
        </div>
        <div className="flex-1"></div>
      </div>
    </div>
  );
};

export default HeroSection;
