

import React from "react";
import Image from "next/image";
import card1 from "/public/fourfour.png"
const CodingCard = () => {
  return (
    <div className=" w-[600px] mx-auto h-[450px] p-2 mt-[100px]  bg-transparent  rounded-lg">
      <Image
      src={card1}
      width={600}
      height={450}
      alt="asdasd"
      />
    </div>
  );
};

export default CodingCard;



// // Next.js component using Tailwind CSS to design the card

// const CodingCard = ({ restaurant }) => {
//   return (
//     <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-sm mx-auto">
//       <img
//         src={restaurant.cover}
//         alt="restaurant cover"
//         className="w-full h-48 object-cover"
//       />
//       <div className="p-4">
//         <h3 className="text-lg font-bold mb-2">{restaurant.name}</h3>
//         <p className="text-sm text-gray-600 mb-2">{restaurant.district}</p>
//         <p className="text-sm text-gray-600 mb-4">{restaurant.description}</p>
//         <div className="flex items-center justify-between">
//           <span className="text-lg font-bold text-gray-800">
//             ${restaurant.price}
//           </span>
//           <span className="text-sm text-gray-600">
//             Category: {restaurant.category.name}
//           </span>
//         </div>
//         <div className="mt-4">
//           {restaurant.reviews.map((review, index) => (
//             <div key={index} className="border-t pt-2">
//               <p className="text-sm text-gray-800">{review.note}</p>
//               <p className="text-sm text-gray-500">{review.content}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CodingCard;
