// import { Footer } from "flowbite-react";
// import { Link } from "react-router-dom";
// import {
//   BsFacebook,
//   BsInstagram,
//   BsTwitter,
//   BsGithub,
// } from "react-icons/bs";
// export default function FooterCom() {
//   return (
//     <Footer
//       container
//       className="footer border-t-8 border-teal-500 bg-slate-200"
//     >
//       <div className="w-full max-w-7xl mx-auto">
//         <div className="grid w-full justify-between sm:flex md:grid-cols-1">
//           <div className="mt-5">
//             <Link
//               to="/"
//             >
//               <span>Voting System</span>
//             </Link>
//           </div>
//           <div className="grid grid-cols-1 gap-8 mt-4 sm:grid-cols-2 md:grid-cols-3 sm:gap-6">
//             <div className="mt-2 sm:mt-0">
//               <Footer.Title title="About" />
//               <Footer.LinkGroup col>
//                 <Footer.Link
//                   href="https://www.eci.gov.in/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Election Commission Of India
//                 </Footer.Link>
//                 <Footer.Link
//                   href="/about"
//                   // target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Voting System
//                 </Footer.Link>
//               </Footer.LinkGroup>
//             </div>
//             <div>
//               <Footer.Title title="Follow us" />
//               <Footer.LinkGroup col>
//                 <Footer.Link href="#">Github</Footer.Link>
//                 <Footer.Link href="#">Discord</Footer.Link>
//               </Footer.LinkGroup>
//             </div>
//             <div>
//               <Footer.Title title="Legal" />
//               <Footer.LinkGroup col>
//                 <Footer.Link
//                   href="/privacy-policy"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Privacy Policy
//                 </Footer.Link>
//                 <Footer.Link
//                   href="/terms-and-conditions"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Terms &amp; Conditions
//                 </Footer.Link>
//               </Footer.LinkGroup>
//             </div>
//           </div>
//         </div>
//         <Footer.Divider />
//         <div className="w-full sm:flex sm:items-center sm:justify-between">
//           <div className="flex space-x-1">
//             <Footer.Copyright
//               href="#"
//               by="Voting System"
//               year={new Date().getFullYear()}
//             />
//           </div>
//           <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
//             <Footer.Icon href="#" icon={BsFacebook} />
//             <Footer.Icon href="#" icon={BsInstagram} />
//             <Footer.Icon href="#" icon={BsTwitter} />
//             <Footer.Icon href="#" icon={BsGithub} />
//           </div>
//         </div>
//       </div>
//     </Footer>
//   );
// }



// import { Footer } from "flowbite-react";
// import { Link } from "react-router-dom";
// import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";

// export default function FooterCom() {
//   return (
//     <Footer
//       container
//       className="footer border-t-8 border-teal-500 bg-slate-200"
//     >
//       <div className="w-full max-w-7xl mx-auto p-6">
//         <div className="grid w-full justify-between sm:flex md:grid-cols-1">
//           <div className="mt-5">
//             <Link to="/">
//               <span className="font-bold text-lg">Voting System</span>
//             </Link>
//           </div>
//           <div className="grid grid-cols-1 gap-8 mt-4 sm:grid-cols-2 md:grid-cols-3 sm:gap-6">
//             {/* About Section */}
//             <div className="mt-2 sm:mt-0">
//               <Footer.Title title="About" />
//               <Footer.LinkGroup col>
//                 <Footer.Link
//                   href="https://www.eci.gov.in/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Election Commission Of India
//                 </Footer.Link>
//                 <Footer.Link href="/about">Voting System</Footer.Link>
//               </Footer.LinkGroup>
//             </div>
//             {/* Follow Us Section */}
//             <div>
//               <Footer.Title title="Follow us" />
//               <Footer.LinkGroup col>
//                 <Footer.Link href="https://github.com/" target="_blank" rel="noopener noreferrer">
//                   Github
//                 </Footer.Link>
//                 <Footer.Link href="https://discord.com/" target="_blank" rel="noopener noreferrer">
//                   Discord
//                 </Footer.Link>
//               </Footer.LinkGroup>
//             </div>
//             {/* Legal Section */}
//             <div>
//               <Footer.Title title="Legal" />
//               <Footer.LinkGroup col>
//                 <Footer.Link
//                   href="/privacy-policy"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Privacy Policy
//                 </Footer.Link>
//                 <Footer.Link
//                   href="/terms-and-conditions"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Terms & Conditions
//                 </Footer.Link>
//               </Footer.LinkGroup>
//             </div>
//           </div>
//         </div>

//         <Footer.Divider />

//         {/* Footer Bottom Section */}
//         <div className="w-full sm:flex sm:items-center sm:justify-between">
//           <div className="flex space-x-1">
//             <Footer.Copyright
//               href="#"
//               by="Voting System"
//               year={new Date().getFullYear()}
//             />
//           </div>
//           {/* Social Media Icons */}
//           <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
//             <Footer.Icon href="#" icon={BsFacebook} />
//             <Footer.Icon href="#" icon={BsInstagram} />
//             <Footer.Icon href="#" icon={BsTwitter} />
//             <Footer.Icon href="#" icon={BsGithub} />
//           </div>
//         </div>
//       </div>
//     </Footer>
//   );
// }


import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";

export default function FooterCom() {
  return (
    // <footer className="bg-white text-black py-4">
    //     <div className="container mx-auto text-center">
    //       <Link to="/" className="text-xl font-bold">
    //         Voting System
    //       </Link>
    //       <div className="mt-2">
    //         &copy; {new Date().getFullYear()} All Rights Reserved.
    //       </div>
    //     </div>
    //   </footer>

    <footer className="bg-sky-900 text-gray-300 p-5">
        <div className="flex justify-center space-x-6">
          <Link to="/" className="hover:text-white">Home</Link>
          <Link to="/about" className="hover:text-white">About Us</Link>
          <Link to="/contact" className="hover:text-white">Contact Us</Link>
        </div>
        <div className="text-center mt-4">
          &copy; 2024 Voting Portal. All rights reserved.
        </div>
      </footer>
  );
  
}
