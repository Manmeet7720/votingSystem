// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   Button,
//   Checkbox,
//   Label,
//   TextInput,
//   Select,
//   Modal,
// } from "flowbite-react";
// import { Link } from "react-router-dom";

// export default function Login() {
//   const [formData, setFormData] = useState({
//     name: "",
//     dob: "",
//     phoneNo: "",
//     aadharNo: "",
//     password: "",
//     nationality: "",
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

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const response = await fetch(
//         "/api/v1/voter/signup",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         }
//       );

//       if (response.ok) {
//         setShowModal(true); 
//       } else {
//         const errorData = await response.json();
//         alert(errorData.message);
//       }
//     } catch (error) {
//       console.error("Error during signup:", error);
//       alert("Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleModalClose = () => {
//     setShowModal(false);
//     navigate("/login"); 
//   };

//   return (
//     <div className="flex p-6 mt-4 mb-4 items-center justify-center">
//       <div className="text-center">
//         <h1 className="font-medium italic text-4xl mb-10">SIGN UP</h1>
//         <form
//           onSubmit={handleSignup}
//           className="flex max-w-md flex-col gap-4 mt-4 w-80"
//         >
//           <div>
//             <div className="mb-2 block">
//               <Label htmlFor="name" value="Name" />
//             </div>
//             <TextInput
//               id="name"
//               type="text"
//               placeholder="Your name"
//               required
//               value={formData.name}
//               onChange={handleChange}
//             />
//           </div>
//           <div>
//             <div className="mb-2 block">
//               <Label htmlFor="dob" value="Date of Birth" />
//             </div>
//             <TextInput
//               id="dob"
//               type="date"
//               required
//               value={formData.dob}
//               onChange={handleChange}
//             />
//           </div>
//           <div>
//             <div className="mb-2 block">
//               <Label htmlFor="phoneNo" value="Phone Number" />
//             </div>
//             <TextInput
//               id="phoneNo"
//               type="tel"
//               placeholder="Your phone number"
//               required
//               value={formData.phoneNo}
//               onChange={handleChange}
//             />
//           </div>
//           <div>
//             <div className="mb-2 block">
//               <Label htmlFor="aadharNo" value="Aadhar Number" />
//             </div>
//             <TextInput
//               id="aadharNo"
//               type="text"
//               placeholder="Your Aadhar number"
//               required
//               value={formData.aadharNo}
//               onChange={handleChange}
//             />
//           </div>
//           <div>
//             <div className="mb-2 block">
//               <Label htmlFor="password" value="Password" />
//             </div>
//             <TextInput
//               id="password"
//               type="password"
//               placeholder="Your password"
//               required
//               value={formData.password}
//               onChange={handleChange}
//             />
//           </div>
//           <div>
//             <div className="mb-2 block">
//               <Label htmlFor="nationality" value="Nationality" />
//             </div>
//             <Select
//               id="nationality"
//               required
//               value={formData.nationality}
//               onChange={handleChange}
//             >
//               <option value="" disabled>
//                 Select your nationality
//               </option>
//               <option value="Indian">Indian</option>
//               <option value="American">American</option>
//               <option value="British">British</option>
//             </Select>
//           </div>
//           <div className="flex items-center gap-2">
//             <Checkbox id="remember" />
//             <Label htmlFor="remember">Remember me</Label>
//           </div>
//           <Button
//             gradientDuoTone="purpleToPink"
//             type="submit"
//           >
//            Sign up
//           </Button>
//         </form>
//         <div className="flex flex-row justify-center mt-4">
//           <h1>Have an account...?</h1>
//           <div >
//             <Link to="/login">Click here</Link>
//           </div>
//         </div>

//         <Modal show={showModal} onClose={handleModalClose}>
//           <Modal.Header />
//           <Modal.Body>
//             <div >
//               <h3>
//                 Sign up successful!
//               </h3>
//               <div className="justify-center flex">
//                 <Button
//                   onClick={handleModalClose}
//                 >
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
import { useNavigate } from "react-router-dom";
import {
  Button,
  Checkbox,
  Label,
  TextInput,
  Select,
  Modal,
} from "flowbite-react";
import { Link } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    phoneNo: "",
    aadharNo: "",
    password: "",
    nationality: "",
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

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/v1/voter/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowModal(true);
      } else {
        const errorData = await response.json();
        alert(errorData.message);
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h1 className="font-bold text-4xl text-blue-600 text-center mb-8">
          SIGN UP
        </h1>
        <form
          onSubmit={handleSignup}
          className="flex flex-col gap-6"
        >
          <div>
            <Label
              htmlFor="name"
              value="Name"
              className="text-blue-600 font-semibold"
            />
            <TextInput
              id="name"
              type="text"
              placeholder="Your name"
              required
              value={formData.name}
              onChange={handleChange}
              className="border-blue-300 focus:border-blue-600 focus:ring-blue-600"
            />
          </div>
          <div>
            <Label
              htmlFor="dob"
              value="Date of Birth"
              className="text-blue-600 font-semibold"
            />
            <TextInput
              id="dob"
              type="date"
              required
              value={formData.dob}
              onChange={handleChange}
              className="border-blue-300 focus:border-blue-600 focus:ring-blue-600"
            />
          </div>
          <div>
            <Label
              htmlFor="phoneNo"
              value="Phone Number"
              className="text-blue-600 font-semibold"
            />
            <TextInput
              id="phoneNo"
              type="tel"
              placeholder="Your phone number"
              required
              value={formData.phoneNo}
              onChange={handleChange}
              className="border-blue-300 focus:border-blue-600 focus:ring-blue-600"
            />
          </div>
          <div>
            <Label
              htmlFor="aadharNo"
              value="Aadhar Number"
              className="text-blue-600 font-semibold"
            />
            <TextInput
              id="aadharNo"
              type="text"
              placeholder="Your Aadhar number"
              required
              value={formData.aadharNo}
              onChange={handleChange}
              className="border-blue-300 focus:border-blue-600 focus:ring-blue-600"
            />
          </div>
          <div>
            <Label
              htmlFor="password"
              value="Password"
              className="text-blue-600 font-semibold"
            />
            <TextInput
              id="password"
              type="password"
              placeholder="Your password"
              required
              value={formData.password}
              onChange={handleChange}
              className="border-blue-300 focus:border-blue-600 focus:ring-blue-600"
            />
          </div>
          <div>
            <Label
              htmlFor="nationality"
              value="Nationality"
              className="text-blue-600 font-semibold"
            />
            <Select
              id="nationality"
              required
              value={formData.nationality}
              onChange={handleChange}
              className="border-blue-300 focus:border-blue-600 focus:ring-blue-600"
            >
              <option value="" disabled>
                Select your nationality
              </option>
              <option value="Indian">Indian</option>
              <option value="American">American</option>
              <option value="British">British</option>
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="remember"
              className="border-blue-300 text-blue-600"
            />
            <Label
              htmlFor="remember"
              className="text-blue-600 font-semibold"
            >
              Remember me
            </Label>
          </div>
          <Button
            gradientDuoTone="blueToCyan"
            type="submit"
            className="w-full"
            disabled={loading}
          >
            {loading ? "Signing up..." : "Sign up"}
          </Button>
        </form>
        <div className="flex justify-center mt-6">
          <h1 className="text-blue-600 mr-1">Have an account?</h1>
          <Link to="/login" className="text-blue-700 font-semibold">
            Click here
          </Link>
        </div>

        <Modal show={showModal} onClose={handleModalClose}>
          <Modal.Header className="text-blue-600" />
          <Modal.Body>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-blue-600">
                Sign up successful!
              </h3>
              <div className="flex justify-center mt-4">
                <Button
                  onClick={handleModalClose}
                  gradientDuoTone="blueToCyan"
                >
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
