import Image from 'next/image';
import { FaShopify } from 'react-icons/fa'; // Shopify icon from react-icons
import { SiSentry } from 'react-icons/si'; // Sentry icon from react-icons

const CodingCard = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* Main container for the app */}
      <div className="relative w-[600px] mx-auto h-[450px] mt-[0px] p-2 bg-white mb-12 shadow-lg rounded-lg">
        {/* Placeholder background with left menu */}
        <div className="absolute top-0 left-0 w-1/4 h-full bg-blue-100 rounded-lg"></div>

        {/* Content section for service icons */}
        <div className="relative grid grid-cols-2 gap-1 mt-1">

       

      <text>content will be add here </text>
  
        </div>
      </div>
    </div>
  );
};

export default CodingCard;
