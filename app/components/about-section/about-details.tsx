import React from 'react';
import interfaceIcon from '../../assets/about-section/interface.svg';
import identityIcon from '../../assets/about-section/identity.svg';
import webFlowIcon from '../../assets/about-section/webflow.svg';
import Image, { StaticImageData } from 'next/image';
import { Cambay } from 'next/font/google';
import { cambay, montserrat } from '../../utils/fonts';


const ProjectServiceCard = ({ image, title, description } : { image: StaticImageData; title: string; description: string;}) => (
  <div className="flex flex-col gap-7 xl:flex-row">
      <Image
        src={image}
        alt={title}
        className="w-[60px] h-[60px]"
      />
        <div className="text-lg">
          <div className={`font-bold mb-4 ${montserrat.className}`}>
            {title}
          </div>
          <div className={`${cambay.className}`}>
              {description}
          </div>
          </div>
        </div>
)

const AboutDetails = () => {

  const projectServices = [
    {
      image: interfaceIcon,
      title: 'Web Design & User Interface',
      description: 'Creating captivating, easy-to- navigate websites that enhance user experience and foster business growth.',
    },
    {
      image: identityIcon,
      title: 'FullStack Development',
      description: 'Developing products from the ground up with comprehensive frontend and backend development solutions.',
    },
    {
      image: webFlowIcon,
      title: 'Framer & Webflow Templates',
      description: 'Designing custom, responsive templates with Framer and Webflow for dynamic and efficient web solutions.',
    }, 
  ]


  return (
    <div className="bg-blue-500 w-full h-auto flex flex-col items-center">
      <div className=" max-w-[722px] bg-blue-500 flex justify-center px-[17px] py-[76px] md:py-[92px] md:px-0 xl:px-[62px] xl:max-w-[1440px]">
        <div className="flex flex-col gap-11 md:flex-row md:gap-7">
          {
            projectServices.map(({ image, title, description}) => (
              <ProjectServiceCard key={title} image={image} title={title} description={description}/>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default AboutDetails;
