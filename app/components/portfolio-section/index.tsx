import React from 'react';
import { ProjectContainer } from './project-container';
import { ImageDetailCard } from './image-detail-card';

import image1 from '../../assets/portfolio-section/svg1.png';
import image2 from '../../assets/portfolio-section/svg2.png';
import image3 from '../../assets/portfolio-section/svg3.png';
import image4 from '../../assets/portfolio-section/svg4.png';
import image5 from '../../assets/portfolio-section/svg5.png';
import image6 from '../../assets/portfolio-section/svg6.png';
import image7 from '../../assets/portfolio-section/svg7.png';
import image8 from '../../assets/portfolio-section/svg8.png';
import image9 from '../../assets/portfolio-section/svg9.png';

const projectImages = [
  {
    img: image1,
    title: 'Web Design',
    description: 'Elegant Dark Website Design',
  },

  {
    img: image2,
    title: ' Brand Identity',
    description: 'Ridged Beer can design',
  },
  {
    img: image3,
    title: 'Brand Identity',
    description: 'Standup Brochure',
  },
  {
    img: image7,
    title: 'Web Design',
    description: 'Landing Page for Mobile Devices',
  },
  {
    img: image5,
    title: 'Web Design',
    description: 'Minimalist Landing Page',
  },
  {
    img: image4,
    title: 'Ui Design',
    description: 'Black Fashion User Interface',
  },

  {
    img: image8,
    title: 'Brand Identity',
    description: 'Box Package Brand Identity Mockup Template',
  },
  {
    img: image6,
    title: 'Ui Design',
    description: 'News Media Interface',
  },
];

export const PortFolioSection = () => {
  return (
    <div className="flex flex-col w-full">
      <ProjectContainer />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {projectImages.map(({ img, title, description }) => (
          <ImageDetailCard key={title} {...{ img, title, description }} />
        ))}
      </div>
    </div>
  );
};
