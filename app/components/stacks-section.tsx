import React from 'react';
import { cambay, leckerliOne, montserrat } from '../utils/fonts';
import { Icon } from '@iconify/react';
import { StacksCard } from './stacks-card';

export const StacksSection = () => {
  return (
    <div
      id="stacks"
      className={`bg-white w-full grid lg:grid-cols-2 lg:px-[200px] px-5 lg:py-[100px] p-10 ${cambay.className}`}
    >
      <div className="h-full flex flex-col gap-6 p-10 pt-12">
        <div
          className={`lg:text-[28px] text-lg text-grey-200 ${leckerliOne.className}`}
        >
          Stacks...
        </div>
        <div
          className={`lg:text-[52px] font-extrabold  md:text-4xl text-2xl ${montserrat.className}`}
        >
          Basics of my creativity
        </div>
        <div className="text-grey-300">
          I use a sophisticated set of design and development tools to bring
          each vision to life, balancing aesthetics and functionality.
        </div>
      </div>

      <StacksCard
        projectCount={127}
        iconSource={'logos:figma'}
        description={
          'My experience at Figma is reflected in a diverse collection of projects, each of which embodies our commitment to innovation, user experience and design excellence.'
        }
        containerBg={'bg-black'}
        countColor={'white'}
        projectTextColor={'text-grey-300'}
        descriptionColor={'white'}
      />
      <StacksCard
        projectCount={37}
        iconSource={'gg:framer'}
        description={
          'My work at Framer demonstrates a deep understanding of motion and interaction design, resulting in designs that are as intuitive as they are beautiful.'
        }
        containerBg={'bg-primary'}
        countColor={'text-white'}
        projectTextColor={'text-white'}
        descriptionColor={'text-white'}
      />
      <StacksCard
        projectCount={14}
        iconSource={'fa6-brands:webflow'}
        iconColor={'#146EF5'}
        description={
          'Through Webflow, I have developed custom websites that are creative, productive, and easy to use, and that meet a variety of client needs.'
        }
        containerBg={'bg-white'}
        countColor={'text-black'}
        projectTextColor={'text-grey-50'}
        descriptionColor={'text-grey-300'}
      />
    </div>
  );
};
