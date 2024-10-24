import React from "react";
import Image from "next/image";
import card1 from "/public/cardone1.png"
const ContentTypeCardA = () => {
  return (
    <div className=" w-[600px] mx-auto h-[450px] p-2 mt-[100px]  bg-transparent  rounded-lg">
      <Image
      src={card1}
      width={500}
      height={450}
      alt="asdasd"
      />
    </div>
  );
};

export default ContentTypeCardA;



// <h2 className="text-center text-lg font-semibold text-gray-700 mb-4">Select a field for your Content Type</h2>
//       <div className="grid grid-cols-2 gap-4 ">
//         {/* String */}
//         <div className="flex items-center space-x-2 p-2 bg-yellow-100 rounded-lg">
//           <FaFont className="text-yellow-500" />
//           <span className="text-blue-900 font-medium">String</span>
//         </div>

//         {/* Text */}
//         <div className="flex items-center space-x-2 p-2 bg-yellow-100 rounded-lg">
//           <FaAlignLeft className="text-yellow-500" />
//           <span className="text-blue-900 font-medium">Text</span>
//         </div>

//         {/* Number */}
//         <div className="flex items-center space-x-2 p-2 bg-red-100 rounded-lg">
//           <FaHashtag className="text-red-500" />
//           <span className="text-blue-900 font-medium">Number</span>
//         </div>

//         {/* Boolean */}
//         <div className="flex items-center space-x-2 p-2 bg-red-100 rounded-lg">
//           <FaToggleOn className="text-red-500" />
//           <span className="text-blue-900 font-medium">Boolean</span>
//         </div>

//         {/* Date */}
//         <div className="flex items-center space-x-2 p-2 bg-blue-100 rounded-lg">
//           <FaCalendarAlt className="text-blue-500" />
//           <span className="text-blue-900 font-medium">Date</span>
//         </div>

//         {/* Email */}
//         <div className="flex items-center space-x-2 p-2 bg-blue-100 rounded-lg">
//           <FaEnvelope className="text-blue-500" />
//           <span className="text-blue-900 font-medium">Email</span>
//         </div>

//         {/* Password */}
//         <div className="flex items-center space-x-2 p-2 bg-purple-100 rounded-lg">
//           <FaLock className="text-purple-500" />
//           <span className="text-blue-900 font-medium">Password</span>
//         </div>

//         {/* JSON */}
//         <div className="flex items-center space-x-2 p-2 bg-purple-100 rounded-lg">
//           <FaRegFileCode className="text-purple-500" />
//           <span className="text-blue-900 font-medium">JSON</span>
//         </div>
//       </div>