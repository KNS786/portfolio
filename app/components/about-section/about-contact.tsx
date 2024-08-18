import Image from 'next/image';
import React from 'react';
import facebook from '../../assets/about-section/facebook.svg';
import twitter from '../../assets/about-section/twitter.svg';
import linkedin from '../../assets/about-section/linkedin.svg';
import dribble from '../../assets/about-section/dribble.svg';
import behance from '../../assets/about-section/behance.svg';
import pinInterest from '../../assets/about-section/pin-interest.svg';
import instagram from '../../assets/about-section/instagram.svg';
import youtube from '../../assets/about-section/youtube.svg';
import github from "../../assets/about-section/github.png";
import hackerrank from "../../assets/about-section/hackerrank.svg";
import { cambay } from '../../utils/fonts';

const AboutContact = () => {
  const SocialMediaData = [
    {
      image: github,
      alt: "github",
      url: 'https://www.github.com/kns786'
    },
    {
      image: hackerrank,
      alt: 'hackerrank',
      url: "https://www.hackerrank.com/profile/navanik64"
    },
    {
      image: linkedin,
      alt: 'linkedin-icon',
      url: 'https://www.linkedin.com/in/navani-k-a24650238/',
    },
    {
      image: instagram,
      alt: 'instagram-icon',
      url: 'https://www.instagram.com/navani_2byte',
    },
  ];

  return (
    <div className="w-full max-w-[722px] bg-primary flex box-border px-[17px] py-[76px] md:py-[92px] md:px-0 xl:px-[62px] xl:max-w-[1440px]">
      <div className="w-full flex flex-col gap-7 justify-between md:flex-row">
        <div className={`text-2xl ${cambay.className}`}>
          If you like my works Follow me:
        </div>
        <div className="flex gap-x-[20px] gap-y-7 flex-wrap  md:w-[255px] md:gap-x-7 md:justify-end xl:w-fit">
          {SocialMediaData.map((data, index) => (
            <a key={index} href={data.url} target="blank">
              <Image
                src={data.image}
                alt={data.alt}
                className="cursor-pointer"
                style={{
                  width: 24,
                  height: 24
                }}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutContact;
