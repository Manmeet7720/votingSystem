


// import axios from 'axios';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const AddCandidate = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     dob: '',
//     nationality: '',
//     partyName: '',
//   });
//   const [partyLogo, setPartyLogo] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const MAX_IMAGE_SIZE = 5 * 1024 * 1024; // 5MB

//   // Helper function to calculate age
//   const calculateAge = (dob) => {
//     const birthDate = new Date(dob);
//     const age = new Date().getFullYear() - birthDate.getFullYear();
//     return age;
//   };

//   // Validate form inputs
//   const validateForm = () => {
//     const { name, dob, nationality, partyName } = formData;

//     // Ensure all fields are filled
//     if (!name || !dob || !nationality || !partyName || !partyLogo) {
//       alert('Please fill in all fields.');
//       return false;
//     }

//     // Check age validation
//     const age = calculateAge(dob);
//     if (age < 35) {
//       alert('Candidate must be at least 35 years old.');
//       return false;
//     }

//     // Check nationality validation
//     if (nationality.toLowerCase() !== 'indian') {
//       alert('Candidate must be an Indian national.');
//       return false;
//     }

//     // Validate image file size
//     // if (partyLogo.size > MAX_IMAGE_SIZE) {
//     //   alert('Party logo size must not exceed 5MB.');
//     //   return false;
//     // }

//     return true;
//   };

//   const uploadFile = async () => {
//     const data = new FormData();
//     data.append('file', partyLogo);
//     data.append('upload_preset', 'images_preset');
//     try {
//       const cloudName = 'dnwiocldo';
//       const api = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
//       const response = await axios.post(api, data);
//       const { secure_url } = response.data;
//       return secure_url;
//     } catch (error) {
//       console.log(error);
//       return null;
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     setPartyLogo(e.target.files[0]);
//   };

//   const addCandidate = async (e) => {
//     e.preventDefault();

//     // Validate the form inputs before proceeding
//     if (!validateForm()) {
//       return;
//     }

//     try {
//       setLoading(true);
//       const imageUrl = await uploadFile();

//       if (!imageUrl) {
//         throw new Error('Image upload failed');
//       }

//       // Submit the form data including the uploaded image URL
//       const response = await axios.post('http://localhost:4000/api/v1/candidate/create-candidate', {
//         ...formData,
//         partyLogo: imageUrl,
//       });

//       setLoading(false);
//       alert('Candidate added successfully!');
//       navigate('/candidates');
//     } catch (error) {
//       console.log(error);
//       alert('An error occurred while adding the candidate. Please try again.');
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <center>
//         <h1>Add Candidate</h1>
//         <form onSubmit={addCandidate} encType="multipart/form-data" disabled={loading}>
//           <div>
//             <label>Name:</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               required
//               disabled={loading}
//             />
//           </div>

//           <div>
//             <label>Date of Birth:</label>
//             <input
//               type="date"
//               name="dob"
//               value={formData.dob}
//               onChange={handleInputChange}
//               required
//               disabled={loading}
//             />
//           </div>

//           <div>
//             <label>Nationality:</label>
//             <input
//               type="text"
//               name="nationality"
//               value={formData.nationality}
//               onChange={handleInputChange}
//               required
//               disabled={loading}
//             />
//           </div>

//           <div>
//             <label>Party Name:</label>
//             <input
//               type="text"
//               name="partyName"
//               value={formData.partyName}
//               onChange={handleInputChange}
//               required
//               disabled={loading}
//             />
//           </div>

//           <div>
//             <label>Party Logo:</label>
//             <input
//               type="file"
//               name="partyLogo"
//               accept="image/*"
//               onChange={handleFileChange}
//               required
//               disabled={loading}
//             />
//           </div>

//           <button 
//             type="submit" 
//             style={{
//               ...styles.submitButton, 
//               opacity: loading ? 0.5 : 1, 
//               cursor: loading ? 'not-allowed' : 'pointer'
//             }} 
//             disabled={loading}
//           >
//             {loading ? 'Loading...' : 'Add Candidate'}
//           </button>
//           <button 
//             type="button" 
//             style={{
//               ...styles.closeButton, 
//               opacity: loading ? 0.5 : 1, 
//               cursor: loading ? 'not-allowed' : 'pointer'
//             }} 
//             onClick={() => navigate('/candidates')} 
//             disabled={loading}
//           >
//             Close
//           </button>
//         </form>
//       </center>
//     </div>
//   );
// };

// const styles = {
//   submitButton: {
//     padding: '10px 20px',
//     fontSize: '16px',
//     backgroundColor: '#4CAF50',
//     color: 'white',
//     border: 'none',
//     borderRadius: '5px',
//     marginRight: '10px',
//   },
//   closeButton: {
//     padding: '10px 20px',
//     fontSize: '16px',
//     backgroundColor: '#f44336',
//     color: 'white',
//     border: 'none',
//     borderRadius: '5px',
//   },
// };

// export default AddCandidate;


import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddCandidate = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    nationality: '',
    partyName: '',
  });
  const [partyLogo, setPartyLogo] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const MAX_IMAGE_SIZE = 5 * 1024 * 1024; // 5MB

  // Helper function to calculate age
  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const age = new Date().getFullYear() - birthDate.getFullYear();
    return age;
  };

  // Validate form inputs
  const validateForm = () => {
    const { name, dob, nationality, partyName } = formData;

    // Ensure all fields are filled
    if (!name || !dob || !nationality || !partyName || !partyLogo) {
      alert('Please fill in all fields.');
      return false;
    }

    // Check age validation
    const age = calculateAge(dob);
    if (age < 35) {
      alert('Candidate must be at least 35 years old.');
      return false;
    }

    // Check nationality validation
    if (nationality.toLowerCase() !== 'indian') {
      alert('Candidate must be an Indian national.');
      return false;
    }

    // Validate image file size
    if (partyLogo.size > MAX_IMAGE_SIZE) {
      alert('Party logo size must not exceed 5MB.');
      return false;
    }

    return true;
  };

  const uploadFile = async () => {
    const data = new FormData();
    data.append('file', partyLogo);
    data.append('upload_preset', 'images_preset');
    try {
      const cloudName = 'dnwiocldo';
      const api = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
      const response = await axios.post(api, data);
      const { secure_url } = response.data;
      return secure_url;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setPartyLogo(e.target.files[0]);
  };

  const addCandidate = async (e) => {
    e.preventDefault();

    // Validate the form inputs before proceeding
    if (!validateForm()) {
      return;
    }

    try {
      setLoading(true);
      const imageUrl = await uploadFile();

      if (!imageUrl) {
        throw new Error('Image upload failed');
      }

      // Submit the form data including the uploaded image URL
      await axios.post('http://localhost:4000/api/v1/candidate/create-candidate', {
        ...formData,
        partyLogo: imageUrl,
      });

      setLoading(false);
      alert('Candidate added successfully!');
      navigate('/candidates');
    } catch (error) {
      console.log(error);
      alert('An error occurred while adding the candidate. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-sky-400">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-center text-3xl font-bold text-sky-600 mb-8">Add Candidate</h1>
        <form onSubmit={addCandidate} encType="multipart/form-data">
          {['name', 'dob', 'nationality', 'partyName'].map((field) => (
            <div key={field} className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor={field}>
                {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
              </label>
              <input
                type={field === 'dob' ? 'date' : 'text'}
                name={field}
                value={formData[field]}
                onChange={handleInputChange}
                required
                disabled={loading}
                className="border border-sky-300 rounded-lg p-2 w-full focus:outline-none focus:ring focus:ring-sky-500 transition duration-200"
              />
            </div>
          ))}

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="partyLogo">
              Party Logo:
            </label>
            <input
              type="file"
              name="partyLogo"
              accept="image/*"
              onChange={handleFileChange}
              required
              disabled={loading}
              className="border border-sky-300 rounded-lg p-2 w-full focus:outline-none focus:ring focus:ring-sky-500 transition duration-200"
            />
          </div>

          <button 
            type="submit" 
            className={`w-full bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`} 
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Add Candidate'}
          </button>

          <button 
            type="button" 
            onClick={() => navigate('/candidates')} 
            className={`w-full bg-red-500 text-white p-2 rounded-lg mt-4 hover:bg-red-600 transition duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`} 
            disabled={loading}
          >
            Close
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCandidate;
