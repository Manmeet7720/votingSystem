


// import { Button } from "flowbite-react";
// import React from "react";
// import { Link } from "react-router-dom";
// import BackgroundImage from "../image/uploads/vote bg.jpg";

// export default function HomePage() {
//   return (

    
//     <div className="flex flex-col min-h-screen bg-sky-400 text-white">

// <main className="flex-grow flex flex-col justify-center items-center text-center space-y-10 py-20">
//         <h1 className="text-5xl font-extrabold tracking-tight lg:text-7xl">
//           Secure & Transparent Voting
//         </h1>
//         <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl">
//           Experience modern, secure, and hassle-free voting from the comfort of your home. 
//           Our system ensures complete transparency, privacy, and ease of use.
//         </p>

//         <div className="flex flex-col md:flex-row gap-5 mt-10">
//           <Link to="/login">
//             <Button 
//               gradientDuoTone="cyanToBlue" 
//               className="w-60 py-3 rounded-full text-lg transition-transform duration-300 transform hover:scale-105"
//             >
//               Login as Voter
//             </Button>
//           </Link>
//           <Link to="/admin-login">
//             <Button 
//               gradientDuoTone="cyanToBlue" 
//               className="w-60 py-3 rounded-full text-lg transition-transform duration-300 transform hover:scale-105"
//             >
//               Login as Admin
//             </Button>
//           </Link>
//         </div>
//       </main>

//       {/* Footer Section (Optional) */}
      
//     </div>
//   );
// }


import { Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import BackgroundImage from "../image/uploads/vote bg.jpg";

 // Replace with your actual image path

export default function HomePage() {
  return (
    <div
      className="relative flex flex-col min-h-screen text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      <main className="relative flex-grow flex flex-col justify-center items-center text-center space-y-10 py-20 z-20">
        <h1 className="text-5xl font-extrabold tracking-tight lg:text-7xl">
          Secure & Transparent Voting
        </h1>
        <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl">
          Experience modern, secure, and hassle-free voting from the comfort of your home. 
          
        </p>

        <div className="flex flex-col md:flex-row gap-5 mt-10">
          <Link to="/login">
            <Button 
              gradientDuoTone="cyanToBlue" 
              className="w-60 py-3 rounded-full text-lg transition-transform duration-300 transform hover:scale-105"
            >
              Login as Voter
            </Button>
          </Link>
          <Link to="/admin-login">
            <Button 
              gradientDuoTone="cyanToBlue" 
              className="w-60 py-3 rounded-full text-lg transition-transform duration-300 transform hover:scale-105"
            >
              Login as Admin
            </Button>
          </Link>
        </div>
      </main>

      {/* Footer Section (Optional) */}
      <footer className="relative text-center text-gray-400 p-4">
        <p>&copy; {new Date().getFullYear()} Matdaan. All rights reserved.</p>
      </footer>
    </div>
  );
}
