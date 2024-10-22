

import React from "react";
import Image from "next/image";
import card1 from "/public/secondsecond.png"
const ContentTypeCardA = () => {
  return (
    <div className=" w-[600px] mx-auto h-[450px] p-2 mt-[100px]  bg-transparent  rounded-lg">
      <Image
      src={card1}
      width={650}
      height={450}
      alt="asdasd"
      />
    </div>
  );
};

export default ContentTypeCardA;



























// import React from "react";
// import { FaBold, FaItalic, FaUnderline, FaCode, FaImage } from "react-icons/fa";

// const ContentFormCard = () => {
//   return (
//     <div className="w-[600px] mx-auto h-[450px] p-4 bg-white rounded-lg shadow-xl">
//       {/* Header with the Save Button */}
//       <div className="flex justify-between items-center mb-4">
//         <div className="w-4 h-4 flex space-x-1">
//           <span className="block w-2 h-2 rounded-full bg-red-400"></span>
//           <span className="block w-2 h-2 rounded-full bg-yellow-400"></span>
//           <span className="block w-2 h-2 rounded-full bg-green-400"></span>
//         </div>
//         <button className="px-4 py-2 text-white bg-[#99d9ea] rounded-md">Save</button>
//       </div>

//       {/* Name and Categories */}
//       <div className="grid grid-cols-2 gap-4 mb-4">
//         <div className="flex flex-col">
//           <label className="text-sm font-semibold text-blue-900">Name</label>
//           <input
//             type="text"
//             placeholder="Type your title"
//             className="p-2 mt-2 border rounded-lg bg-gray-100 focus:ring focus:ring-blue-200"
//           />
//         </div>

//         <div className="flex flex-col">
//           <label className="text-sm font-semibold text-blue-900">Categories</label>
//           <input
//             type="text"
//             placeholder="Type your categories"
//             className="p-2 mt-2 border rounded-lg bg-gray-100 focus:ring focus:ring-blue-200"
//           />
//         </div>
//       </div>

//       {/* Description */}
//       <div className="mb-4">
//         <label className="text-sm font-semibold text-blue-900">Description</label>
//         <div className="p-4 mt-2 border rounded-lg bg-gray-100">
//           <div className="flex space-x-2 mb-2">
//             <button className="text-gray-500 hover:text-black">
//               <FaBold />
//             </button>
//             <button className="text-gray-500 hover:text-black">
//               <FaItalic />
//             </button>
//             <button className="text-gray-500 hover:text-black">
//               <FaUnderline />
//             </button>
//             <button className="text-gray-500 hover:text-black">
//               <FaCode />
//             </button>
//             <button className="text-gray-500 hover:text-black">
//               <FaImage />
//             </button>
//           </div>
//           <textarea
//             placeholder="Type your description"
//             className="w-full h-24 p-2 border-none bg-gray-100 focus:outline-none resize-none"
//           ></textarea>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContentFormCard;




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