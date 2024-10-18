


// import { useState } from "react";
// import { Button, Checkbox, Label, TextInput, Modal } from "flowbite-react";
// import { useNavigate } from "react-router-dom";
// import BackgroundImage from "../image/uploads/vote bg.jpg";


// export default function AdminLogin() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await fetch("/api/v1/admin/admin-login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ name: username, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setShowModal(true);
//       } else {
//         setError(data.message || "Login failed");
//       }
//     } catch (err) {
//       setError("An error occurred");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleModalClose = () => {
//     setShowModal(false);
//     navigate("/candidates");
//   };

//   return (
//     <div className="flex h-screen items-center justify-center bg-gradient-to-r from-blue-500 to-sky-400">
//       <div className="text-center shadow-lg p-6 rounded-lg bg-white border border-gray-300">
//         <h1 className="font-medium italic text-4xl mb-6 text-sky-600">ADMIN LOGIN</h1>
//         <form
//           className="flex max-w-md flex-col gap-4 w-80"
//           onSubmit={handleSubmit}
//         >
//           <div>
//             <div className="mb-2 block">
//               <Label htmlFor="username" value="Username" />
//             </div>
//             <TextInput
//               id="username"
//               type="text"
//               placeholder="Enter your username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
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
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="border border-sky-300 rounded-lg focus:outline-none focus:ring focus:ring-sky-500 transition duration-200 hover:border-sky-400"
//             />
//           </div>
//           <div className="flex items-center gap-2">
//             <Checkbox id="remember" />
//             <Label htmlFor="remember">Remember me</Label>
//           </div>
//           <Button
//             type="submit"
//             disabled={loading}
//             className="bg-sky-600 text-white hover:bg-sky-700 transition duration-200"
//           >
//             {loading ? "Loading..." : "Submit"}
//           </Button>
//         </form>

//         {error && <p className="text-red-500 mt-4">{error}</p>}

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
import { Button, Checkbox, Label, TextInput, Modal } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import BackgroundImage from "../image/uploads/vote2.jpeg"; // Ensure the image path is correct

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/v1/admin/admin-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setShowModal(true);
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      setError("An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    navigate("/candidates");
  };

  return (
    <div
      className="flex h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="text-center shadow-lg p-6 rounded-lg bg-white border border-gray-300 opacity-90">
        <h1 className="font-medium italic text-4xl mb-6 text-sky-600">ADMIN LOGIN</h1>
        <form
          className="flex max-w-md flex-col gap-4 w-80"
          onSubmit={handleSubmit}
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="username" value="Username" />
            </div>
            <TextInput
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border border-sky-300 rounded-lg focus:outline-none focus:ring focus:ring-sky-500 transition duration-200 hover:border-sky-400"
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button
            type="submit"
            disabled={loading}
            className="bg-sky-600 text-white hover:bg-sky-700 transition duration-200"
          >
            {loading ? "Loading..." : "Submit"}
          </Button>
        </form>

        {error && <p className="text-red-500 mt-4">{error}</p>}

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
