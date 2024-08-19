import React from 'react';
import { ProjectContainer } from './project-container';
import { ImageDetailCard } from './image-detail-card';

import image1 from '../../assets/portfolio-section/mobile-app-totalqsr.png';
import image2 from '../../assets/portfolio-section/schedule-web-totalqsr.png';
import image3 from '../../assets/portfolio-section/tutora-mobile-app.jpeg';

const projectImages = [
  {
    img: image1,
    title: 'Hybrid Mobile App Development(Ionic React)',
    description: 'Product Development for totalqsr platform',
  },

  {
    img: image2,
    title: 'Web app development',
    description: 'Developed ui and functionality for web app screens schedule,timesheet & tips',
  },
  {
    img: image3,
    title: 'React Native Mobile app development',
    description: 'Learning platform for online teacher and students',
  },
];

export const PortFolioSection = () => {
  return (
    <div className="flex flex-col w-full">
      <ProjectContainer />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projectImages.map(({ img, title, description }) => (
          <ImageDetailCard key={title} {...{ img, title, description }} />
        ))}
      </div>
    </div>
  );
};
