import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-scroll";

export const Footer = () => {
  return (
    <div className="lg:px-[240px] text-grey-300 absolute w-full gap-8 items-center lg:flex-row py-10 bg-center md:px-5 px-3 bg-grey-600 flex flex-col-reverse justify-between">
      <div className="text-center">
        © 2024 Navani Nayak — Personal Framer Template. Developed by{" "}
        <span className="text-primary">Navani Nayak</span>
      </div>
      <div className="flex gap-2 items-center">
        <div>
          Back to top{" "}
        </div>
      <Link
        to={"home-target"}
                smooth={true}
                duration={500}
                style={{ textDecoration: "none" }}
                className="cursor-pointer text-sm md:text-lg font-medium  hover:text-primary"
              >
        <Icon
          icon="material-symbols-light:keyboard-arrow-up"
          style={{ color: "#707070" }}
          fontSize={25}
        />

      </Link>
      </div>
    </div>
  );
};
