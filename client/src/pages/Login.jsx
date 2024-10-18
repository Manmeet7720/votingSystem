
// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { Button, Checkbox, Label, TextInput, Modal } from "flowbite-react";

// export default function Login() {
//   const [formData, setFormData] = useState({
//     identifier: "",
//     password: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.id]: e.target.value,
//     });
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const response = await fetch("/api/v1/voter/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         localStorage.setItem("voterID", data.user.voterID);
//         setShowModal(true);
//       } else {
//         const errorData = await response.json();
//         alert(errorData.message);
//       }
//     } catch (error) {
//       console.error("Error during login:", error);
//       alert("Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleModalClose = () => {
//     setShowModal(false);
//     navigate("/voter-dashboard");
//   };

//   return (
//     <div className="flex h-screen items-center justify-center bg-gradient-to-r from-blue-500 to-sky-400">
//       <div className="text-center shadow-lg p-6 rounded-lg bg-white border border-gray-300">
//         <h1 className="font-medium italic text-4xl mb-6 text-sky-600">LOGIN</h1>
//         <form onSubmit={handleLogin} className="flex max-w-md flex-col gap-4 w-80">
//           <div>
//             <div className="mb-2 block">
//               <Label htmlFor="identifier" value="Aadhar No or Voter ID" />
//             </div>
//             <TextInput
//               id="identifier"
//               type="text"
//               placeholder="Enter your Aadhar No or Voter ID"
//               value={formData.identifier}
//               onChange={handleChange}
//               required
//               className="border border-sky-300 rounded-lg focus:outline-none focus:ring focus:ring-sky-500 transition duration-200 hover:border-sky-400"
//             />
//           </div>
//           <div>
//             <div className="mb-2 block">
//               <Label htmlFor="password" value="Password" />
//             </div>
//             <TextInput
//               id="password"
//               type="password"
//               required
//               value={formData.password}
//               onChange={handleChange}
//               className="border border-sky-300 rounded-lg focus:outline-none focus:ring focus:ring-sky-500 transition duration-200 hover:border-sky-400"
//             />
//           </div>
//           <div className="flex items-center gap-2">
//             <Checkbox id="remember" />
//             <Label htmlFor="remember">Remember me</Label>
//           </div>
//           <Button type="submit" className="bg-sky-600 text-white hover:bg-sky-700 transition duration-200">
//             {loading ? "Loading..." : "Submit"}
//           </Button>
//         </form>
//         <div className="flex flex-row justify-center mt-4">
//           <h1 className="text-gray-700">Not Signed In...?</h1>
//           <div className="text-sky-600 ml-2">
//             <Link to="/sign-up">Click here</Link>
//           </div>
//         </div>

//         {/* Modal for successful login */}
//         <Modal show={showModal} size="md" popup onClose={handleModalClose}>
//           <Modal.Header />
//           <Modal.Body>
//             <div>
//               <h3 className="mb-5 text-2xl font-semibold text-sky-600">Login successful!</h3>
//               <div>
//                 <Button onClick={handleModalClose}>
//                   OK
//                 </Button>
//               </div>
//             </div>
//           </Modal.Body>
//         </Modal>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button, Checkbox, Label, TextInput, Modal } from "flowbite-react";
import BackgroundImage from "../image/uploads/vott.jpg"; // Make sure the path is correct

export default function Login() {
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/v1/voter/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("voterID", data.user.voterID);
        setShowModal(true);
      } else {
        const errorData = await response.json();
        alert(errorData.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    navigate("/voter-dashboard");
  };

  return (
    <div
      className="flex h-screen items-center justify-center"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="text-center shadow-lg p-6 rounded-lg bg-white border border-gray-300 bg-opacity-90">
        <h1 className="font-medium italic text-4xl mb-6 text-sky-600">LOGIN</h1>
        <form onSubmit={handleLogin} className="flex max-w-md flex-col gap-4 w-80">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="identifier" value="Aadhar No or Voter ID" />
            </div>
            <TextInput
              id="identifier"
              type="text"
              placeholder="Enter your Aadhar No or Voter ID"
              value={formData.identifier}
              onChange={handleChange}
              required
              className="border border-sky-300 rounded-lg focus:outline-none focus:ring focus:ring-sky-500 transition duration-200 hover:border-sky-400"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Password" />
            </div>
            <TextInput
              id="password"
              type="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="border border-sky-300 rounded-lg focus:outline-none focus:ring focus:ring-sky-500 transition duration-200 hover:border-sky-400"
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button type="submit" className="bg-sky-600 text-white hover:bg-sky-700 transition duration-200">
            {loading ? "Loading..." : "Submit"}
          </Button>
        </form>
        <div className="flex flex-row justify-center mt-4">
          <h1 className="text-gray-700">Not Signed In...?</h1>
          <div className="text-sky-600 ml-2">
            <Link to="/sign-up">Click here</Link>
          </div>
        </div>

        {/* Modal for successful login */}
        <Modal show={showModal} size="md" onClose={handleModalClose}>
          <Modal.Header className="bg-transparent" />
          <Modal.Body className="bg-black bg-opacity-50 rounded-lg"> {/* Semi-transparent background */}
            <div>
              <h3 className="mb-5 text-2xl font-semibold text-white">Login successful!</h3>
              <div>
                <Button onClick={handleModalClose} className="bg-sky-600 text-white hover:bg-sky-700">
                  OK
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}

