


import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const CandidateUpdate = () => {
  const { id } = useParams(); // Get the candidate ID from the URL
  const [formData, setFormData] = useState({
    name: '',
    partyName: '',
  });
  const [partyLogo, setPartyLogo] = useState(null); // For logo file handling
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // Error state
  const navigate = useNavigate();

  // Fetch existing candidate details to pre-populate the form
  useEffect(() => {
    const fetchCandidate = async (id) => {
      try {
        console.log("Fetching candidate with ID:", id); // Debug log
        const response = await axios.get(`http://localhost:4000/api/v1/candidate/getOne/${id}`);
        setFormData({
          name: response.data.name,
          partyName: response.data.partyName,
        });
      } catch (error) {
        console.error('Error fetching candidate data:', error);
        setError('Failed to fetch candidate data.');
      }
    };

    if (id) {
      fetchCandidate(id);
    } else {
      console.error("Candidate ID is undefined"); // Log in case the ID is not passed
    }
  }, [id]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file input for party logo
  const handleFileChange = (e) => {
    setPartyLogo(e.target.files[0]);
  };

  // Handle logo file upload
  const uploadFile = async () => {
    if (!partyLogo) return null;

    const data = new FormData();
    data.append('file', partyLogo);
    data.append('upload_preset', 'images_preset'); // Adjust this to your Cloudinary preset
    try {
      const cloudName = 'dnwiocldo'; // Replace with your Cloudinary cloud name
      const api = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
      const response = await axios.post(api, data);
      return response.data.secure_url; // Return the URL of the uploaded image
    } catch (error) {
      console.error('Error uploading logo:', error);
      setError('Failed to upload logo. Please try again.');
      return null;
    }
  };

  // Handle form submission for updating the candidate
  const handleUpdateCandidate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Reset error state

    try {
      // Upload the logo if a new one is selected
      const imageUrl = await uploadFile();

      const updatedData = { ...formData };
      if (imageUrl) {
        updatedData.partyLogo = imageUrl; // Add the new logo URL if uploaded
      }

      // Send the update request
      await axios.put(`http://localhost:4000/api/v1/candidate/update-candidate/${id}`, updatedData);
      setLoading(false);
      window.alert('Candidate updated successfully!');
      navigate('/candidates'); // Redirect back to the candidates list
    } catch (error) {
      console.error('Error updating candidate:', error);
      setLoading(false);
      setError('Failed to update candidate. Please try again later.');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Update Candidate</h2>
      {/* {error && <p style={styles.errorMessage}>{error}</p>} Display error message if exists */}
      <form onSubmit={handleUpdateCandidate} encType="multipart/form-data">
        <div style={styles.formGroup}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label>Party Name:</label>
          <input
            type="text"
            name="partyName"
            value={formData.partyName}
            onChange={handleInputChange}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label>Party Logo:</label>
          <input
            type="file"
            name="partyLogo"
            accept="image/*"
            onChange={handleFileChange}
            style={styles.input}
          />
        </div>

        <button type="submit" style={{ ...styles.submitButton, opacity: loading ? 0.6 : 1 }} disabled={loading}>
          {loading ? 'Updating...' : 'Update Candidate'}
        </button>
        <button type="button" style={styles.closeButton} onClick={() => navigate('/candidates')}>
          Close
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f9fafb', // Light background color
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1.5rem',
    color: '#1d4ed8', // Blue color
  },
  formGroup: {
    marginBottom: '1rem',
    width: '100%',
  },
  input: {
    width: '100%',
    padding: '0.5rem',
    border: '1px solid #d1d5db', // Light gray border
    borderRadius: '0.375rem', // Rounded corners
    transition: 'border-color 0.2s',
  },
  submitButton: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    backgroundColor: '#4caf50', // Green color
    color: 'white',
    border: 'none',
    borderRadius: '0.375rem', // Rounded corners
    cursor: 'pointer',
    marginRight: '1rem',
    transition: 'background-color 0.2s',
  },
  closeButton: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    backgroundColor: '#f44336', // Red color
    color: 'white',
    border: 'none',
    borderRadius: '0.375rem', // Rounded corners
    cursor: 'pointer',
  },
  errorMessage: {
    color: 'red', // Red color for error messages
    marginBottom: '1rem',
  },
};

export default CandidateUpdate;
