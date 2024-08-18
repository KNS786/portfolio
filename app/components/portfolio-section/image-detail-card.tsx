import Image, { StaticImageData } from 'next/image';
import { leckerliOne } from '../../utils/fonts';

export const ImageDetailCard = ({
  img,
  title,
  description,
}: {
  img: StaticImageData;
  title: string;
  description: string;
}) => {
  return (
    <div className="relative fit overflow-hidden group cursor-pointer">
      <Image
        src={img}
        alt="Image"
        className="relative lg:object-none w-full h-auto transition-all duration-700 ease-in-out transform group-hover:blur-sm group-hover:scale-125"
      />
      <div className="absolute w-full h-full inset-0 flex items-center justify-center opacity-0 bg-gray-800 bg-opacity-75 transition-opacity duration-500 group-hover:opacity-100">
        <div className="flex flex-col justify-end w-full ml-4 text-white h-full py-5">
          <h5
            className={`mx-2 sm:text-sm lg:text-xl md:text-lg  font-normal ${leckerliOne.className} text-gray-200 `}
          >
            {title}
          </h5>
          <h2 className=" flex justify-start font-extrabold mx-2 lg:text-3xl sm:text-2xl ">
            {description}
          </h2>
        </div>
      </div>
    </div>
  );
};
