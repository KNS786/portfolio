import React from 'react';
import { cambay, montserrat } from '../utils/fonts';

import { Icon } from '@iconify/react';

export const StacksCard: React.FC<{
  projectCount: number;
  iconSource: string;
  description: string;
  containerBg: string;
  countColor: string;
  projectTextColor: string;
  descriptionColor: string;
  iconColor?: string;
}> = ({
  projectCount,
  iconSource,
  description,
  containerBg,
  countColor,
  projectTextColor,
  descriptionColor,
  iconColor,
}) => {
  return (
    <div
      className={`${containerBg} text-white flex flex-col gap-5 p-10 w-full`}
    >
      <Icon
        icon={iconSource}
        width={64}
        height={64}
        color={iconColor ? iconColor : ''}
      />
      <div
        className={`lg:text-[52px] font-extrabold text-4xl  ${countColor} ${montserrat.className}`}
      >
        {projectCount}{' '}
        <span
          className={`lg:text-[24px] text-lg font-normal w-full ${projectTextColor} ${cambay.className}`}
        >
          projects completed
        </span>
      </div>
      <div className={`${descriptionColor}`}>{description}</div>
    </div>
  );
};
