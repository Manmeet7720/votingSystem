
// import { Sidebar } from "flowbite-react";
// import { FaPeopleRoof } from "react-icons/fa6";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { useHistory } from 'react-router-dom';

// import { useState } from "react";

// export default function AdminSidebar() {
//   const history = useHistory();

//   const handleLogout = () => {
//     // Remove JWT token or session data (from localStorage or cookie)
//     localStorage.removeItem('token'); // Assuming token is stored in localStorage
//     // Redirect to login page
//     history.push('/login');
// };

//   return (
//     <div>
//       <Sidebar>
//         <Sidebar.Items>
//           <div className="flex">
//             <h1 className="font-semibold ml-3">Options</h1>
//           </div>
//           <Sidebar.ItemGroup>
//             {/* Sidebar Item with react-router-dom's Link */}
//             <Sidebar.Item
//               as={Link}
//               to="/candidates"
//               icon={FaPeopleRoof}
//               active={location.pathname === "/candidates"}
//             >
//               Elections
//             </Sidebar.Item>

//             {/* Directly use Sidebar.Item without nesting Link */}
//             <Sidebar.Item as={Link} to="/create">
//               Add Candidate
//             </Sidebar.Item>

//             {/* Another Sidebar Item */}
//             <Sidebar.Item>
//               {/* Logout */}
//               <button onClick={handleLogout}>
//             Logout
//         </button>
//             </Sidebar.Item>
//           </Sidebar.ItemGroup>
//         </Sidebar.Items>
//       </Sidebar>
//     </div>
//   );
// }


import { Sidebar } from "flowbite-react";
import { FaPeopleRoof } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

// export default function AdminSidebar() {
//   const navigate = useNavigate(); // useNavigate for v6

//   const handleLogout = () => {
//     // Remove JWT token or session data (from localStorage or cookie)
//     localStorage.removeItem('token'); // Assuming token is stored in localStorage
//     // Redirect to login page
//     navigate('/login');
//   };
export default function AdminSidebar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    localStorage.clear(); // Clear localStorage
      navigate('/admin-login');
    
  };


  return (
    <div>
      <Sidebar>
        <Sidebar.Items>
          <div className="flex">
            <h1 className="font-semibold ml-3">Options</h1>
          </div>
          <Sidebar.ItemGroup>
            {/* Sidebar Item with react-router-dom's Link */}
            <Sidebar.Item
              as={Link}
              to="/candidates"
              icon={FaPeopleRoof}
              active={location.pathname === "/candidates"}
            >
              Elections
            </Sidebar.Item>

            {/* Directly use Sidebar.Item without nesting Link */}
            <Sidebar.Item as={Link} to="/create">
              Add Candidate
            </Sidebar.Item>

            {/* Another Sidebar Item */}
            <Sidebar.Item onClick={handleLogout}>
                Logout
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}
