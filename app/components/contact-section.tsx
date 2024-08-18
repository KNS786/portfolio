import React from 'react';
import { cambay, leckerliOne, montserrat } from '../utils/fonts';
import { Icon } from '@iconify/react';
import { Footer } from './footer';
import Link from 'next/link';
import github from "../assets/about-section/github.png";
import hackerrank from "../assets/about-section/hackerrank.svg";
import instagram from '../assets/about-section/instagram.svg';
import linkedin from '../assets/about-section/linkedin.svg';

export const ContactSection = () => {
  const SocialMediaData = [
    {
      image: "bi:github",
      alt: "github",
      url: 'https://www.github.com/kns786'
    },
    {
      image: "tabler:brand-hackerrank",
      alt: 'hackerrank',
      url: "https://www.hackerrank.com/profile/navanik64"
    },
    {
      image: "uil:linkedin",
      alt: 'linkedin-icon',
      url: 'https://www.linkedin.com/in/navani-k-a24650238/',
    },
    {
      image: "ant-design:instagram-filled",
      alt: 'instagram-icon',
      url: 'https://www.instagram.com/navani_2byte',
    },
  ];

  return (
    <div className="w-full" id="contacts">
      <div
        className={`bg-contact-background w-full h-full lg:px-[50px] lg:py-[100px] text-white flex lg:justify-between lg:flex-row flex-col border-0 py-20 bg-center px-5  bg-cover object-none  ${cambay.className}`}
      >
        <div className="text-white flex flex-col lg:gap-10 gap-5">
          <div
            className={`lg:text-[28px] text-[22px] ${leckerliOne.className}`}
          >
            Contacts...
          </div>
          <div
            className={`lg:text-[52px] text-3xl tracking-tighter ${montserrat.className}`}
          >
            Contact Information
          </div>
          <div className="text-xl">
            <div className="text-grey-300 pb-1">You can find me here:</div>
            <div>TRRA-82,Vazhalakala, Ernakulam,Kerala,India</div>
          </div>
          <div className="flex gap-3 items-end ">
            <span className="text-xl text-grey-300">My time</span>
            <span
              className={`${montserrat.className} text-[32px] font-semibold`}
            >
              6:54 PM
            </span>
          </div>
          <div className="text-xl text-primary"><Link href='navanik64@gmail.com'/>navanik64@gmail.com</div>
          <div className="flex gap-[24px] flex-wrap">
            {SocialMediaData.map((dt) => {
              return (
                <a key={dt.alt} href={dt.url} target="blank" className="link">
                  <Icon
                    icon={dt.image}
                    width={24}
                    height={24}
                    className="hover:text-[yellow] text-grey-300"
                  />
                </a>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-7 mt-16">
          <div
            className={`lg:text-[52px] font-extrabold text-4xl   ${montserrat.className}`}
          >
            Get In Touch
          </div>
          <div className="text-grey-300 text-xl">
            You can contact with me using this form.
          </div>
          <div className="flex gap-10 text-grey-400 ">
            <input
              className=" placeholder:text-grey-400 bg-grey-500 rounded-[28px] lg:h-10 h-14 w-[50%] px-5"
              placeholder="Your Name"
            />
            <input
              className="placeholder:text-grey-400 bg-grey-500 rounded-[28px] lg:h-10 h-14 w-[50%] px-5"
              placeholder="Your Email Address"
            />
          </div>
          <textarea
            className="placeholder:text-grey-400 bg-grey-500 border-0 rounded-[28px] lg:h-24 h-32 w-full p-5"
            placeholder="Type in Your message..."
          />
          <button className="bg-primary font-semibold text-white w-full lg:h-10 h-14 rounded-[28px]">
            SEND
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
