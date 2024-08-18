import React from 'react';

import { leckerliOne } from '../../utils/fonts';

export const ProjectContainer = () => {
  return (
    <div
      className="flex flex-col bg-white w-full items-center justify-center"
      id="portfolio"
    >
      <div className="flex flex-col w-full max-w-[722px] h-[375px] gap-10 lg:justify-center px-[17px] py-[76px] md:py-[92px] md:px-0 xl:px-[62px] xl:max-w-[1440px]">
        {/* container section */}
        <div
          className={`flex flex-row text-grey-200 font-normal md:text-3xl text-2xl py-2 ${leckerliOne.className}`}
        >
          Portfolio...
        </div>

        <div className="flex md:items-end md:justify-between flex-col md:flex-row gap-y-10">
          {/* Text show*/}
          <div className="font-extrabold flex flex-wrap flex-row gap-x-1.5 dark:text-black md:leading-[50px] md:flex-col  md:w-[70%] md:text-[44px] lg:text-[52px] text-3xl">
            I Make Beautiful <div className="md:pt-2">Things!</div>
          </div>
          <button className="h-12 bg-primary hover:bg-sky-500 md:w-60 w-full rounded-3xl px-4 text-white font-bold dark:shadow-blue-900 shadow-lg shadow-blue-300">
            VIEW ALL PROJECTS
          </button>
        </div>
      </div>
    </div>
  );
};
