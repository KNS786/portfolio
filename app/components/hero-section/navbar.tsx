"use client";
import Image from "next/image";
import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import blueLogo from "../../assets/logoWhite.svg";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import clsx from "clsx";
import { useHandleScreenWidth } from "./useWindow";

export const NavBarSection = () => {
  const [bgColor, setBgColor] = useState("bg-transparent text-white");
  const [logoColor, setLogoColor] = useState("text-white");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [showMenuItem, setShowMenuItems] = useState(false);

  const { innerWidth } = useHandleScreenWidth();

  const isMobileDevice = innerWidth < 760;
  console.log("isMobileDevice :::",  isMobileDevice);

  useEffect(() => {
    const handleScroll = () => {
      const currentSection = document.getElementById("about");
      if (currentSection) {
        const sectionTop = currentSection.getBoundingClientRect().top;
        if (sectionTop <= 0) {
          setBgColor("bg-white text-black");
          setLogoColor("text-[#0081FF]");
        } else {
          setBgColor("bg-transparent text-white");
          setLogoColor("text-white");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const hideNavItemsVariant = {
    opened: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    closed: {
      opacity: 1,
      y: "0%",
      transition: {
        delay: 1.1,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };
  const mobileMenuVariant = {
    opened: {
      y: "0%",
      transition: {
        delay: 0.15,
        duration: 1.1,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
    closed: {
      y: "-100%",
      transition: {
        delay: 0.35,
        duration: 0.63,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
  };
  const links = [
    { label: "Intro", href: "home-target" },
    { label: "About me", href: "about" },
    { label: "Portfolio", href: "portfolio" },
    { label: "Clients", href: "clients" },
    { label: "Stacks", href: "stacks" },
    { label: "Contacts", href: "contacts" },
  ];
  // const MotionLink = motion(Link);
  return (
    <div
      className={`w-full  h-screen  md:h-[80px]  flex  justify-between px-12  items-center  ${bgColor}`}
    >
      <div className="text-2xl font-bold md:flex gap-2  hidden ">
        {" "}
        {logoColor === "text-white" ? (
          <Image src={logo} width={24} height={28} alt="logo" />
        ) : (
          <Image src={blueLogo} width={24} height={28} alt="logo" />
        )}
        <span className={`${logoColor}`}>DanRay</span>
      </div>

      <ul className="md:flex space-x-6 hidden">
        {links.map((link) => {
          return (
            <motion.li key={link.href}>
              <Link
                to={link.href}
                smooth={true}
                duration={500}
                style={{ textDecoration: "none" }}
                className="cursor-pointer text-sm md:text-lg font-medium  hover:text-primary"
              >
                {" "}
                <motion.span>{link.label} </motion.span>
              </Link>
            </motion.li>
          );
        })}
      </ul>

      {/* mobile navigation */}

      <motion.div
        variants={hideNavItemsVariant}
        className={clsx("md:hidden flex   w-auto  gap   flex-col  h-auto fixed top-0 ", {
          "top-2  w-[330px] justify-between": isMobileDevice 
        })}
      >
        <div className="flex flex-row items-center  justify-between">
          <div className="flex">
            {logoColor === "text-white" ? (
              <Image src={logo} width={14} height={18} alt="logo" />
            ) : (
              <Image src={blueLogo} width={14} height={18} alt="logo" />
            )}
            <span className={`${logoColor}`}>DanRay</span>
          </div>
          <div className={clsx("flex flex-col items-center")}>
           <button onClick={() => {
            setShowMenuItems(!showMenuItem);
          }} className="text-white focus:outline-none">
            <Icon
              icon={!showMenuItem ? "icon-park:hamburger-button" : "mdi:close"}
              width="24px"
              height="24px"
            />
            </button>
            <ul className={clsx("flex flex-col  space-y-2   md:hidden absolute mt-8", {
              "bg-white rounded-xl text-xs font-normal w-20 pl-2":showMenuItem
            })}>
            { showMenuItem && links.map((link) => {
              return (
                <motion.li key={link.href}>
                  <Link
                    to={link.href}
                    smooth={true}
                    duration={500}
                    style={{ textDecoration: "none" }}
                    className="cursor-pointer  text-black lg:text-white text-sm md:text-lg font-medium hover:text-primary"
                  >
                    {" "}
                    <motion.span>{link.label} </motion.span>
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        
          <div>

            </div>
          </div>
        
        </div>

        <div className="flex w-full justify-end">
          <ul className="flex flex-col  space-y-2 items-center   md:hidden absolute mt-8">
            {!isMobileDevice && links.map((link) => {
              return (
                <motion.li key={link.href}>
                  <Link
                    to={link.href}
                    smooth={true}
                    duration={500}
                    style={{ textDecoration: "none" }}
                    className="cursor-pointer  text-black lg:text-white text-sm md:text-lg font-medium hover:text-primary"
                  >
                    {" "}
                    <motion.span>{link.label} </motion.span>
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};
