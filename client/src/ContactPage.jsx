import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulating an API call here. In real-world scenarios, you can use Axios or Fetch API to send this data to your backend.
    setTimeout(() => {
      setLoading(false);
      alert('Thank you for contacting us!');
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <div style={styles.container}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            style={styles.input}
            disabled={loading}
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            style={styles.input}
            disabled={loading}
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            style={styles.textarea}
            disabled={loading}
          />
        </div>

        <button
          type="submit"
          style={{
            ...styles.submitButton,
            opacity: loading ? 0.5 : 1,
            cursor: loading ? 'not-allowed' : 'pointer',
          }}
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

// Inline CSS styles
const styles = {
  container: {
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'center',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
    textAlign: 'left',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    minHeight: '100px',
    boxSizing: 'border-box',
  },
  submitButton: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  },
};

export default ContactUs;


// import React, { useState } from 'react';
// // import BackgroundImage from './image/uploads/contact2.jpg'; // Ensure the correct path to your image

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });
//   const [loading, setLoading] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     // Simulating an API call here. In real-world scenarios, you can use Axios or Fetch API to send this data to your backend.
//     setTimeout(() => {
//       setLoading(false);
//       alert('Thank you for contacting us!');
//       setFormData({ name: '', email: '', message: '' });
//     }, 2000);
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.heading}>Contact Us</h2>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <div style={styles.formGroup}>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//             required
//             style={styles.input}
//             disabled={loading}
//           />
//         </div>

//         <div style={styles.formGroup}>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             required
//             style={styles.input}
//             disabled={loading}
//           />
//         </div>

//         <div style={styles.formGroup}>
//           <label htmlFor="message">Message:</label>
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleInputChange}
//             required
//             style={styles.textarea}
//             disabled={loading}
//           />
//         </div>

//         <button
//           type="submit"
//           style={{
//             ...styles.submitButton,
//             opacity: loading ? 0.5 : 1,
//             cursor: loading ? 'not-allowed' : 'pointer',
//           }}
//           disabled={loading}
//         >
//           {loading ? 'Sending...' : 'Submit'}
//         </button>
//       </form>
//     </div>
//   );
// };

// // Inline CSS styles
// const styles = {
//   container: {
//     padding: '20px',
//     maxWidth: '600px',
//     margin: '0 auto',
//     textAlign: 'center',
//     border: '1px solid #ccc',
//     borderRadius: '8px',
//     backgroundColor: 'rgba(255, 255, 255, 0.8)', // Optional: light background for better contrast
//     backdropFilter: 'blur(5px)', // Optional: blur effect for background
//     position: 'relative', // Allows positioning child elements
//     zIndex: 1, // Ensures content is above the background
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   formGroup: {
//     marginBottom: '15px',
//     textAlign: 'left',
//   },
//   input: {
//     width: '100%',
//     padding: '10px',
//     fontSize: '16px',
//     borderRadius: '4px',
//     border: '1px solid #ccc',
//     boxSizing: 'border-box',
//   },
//   textarea: {
//     width: '100%',
//     padding: '10px',
//     fontSize: '16px',
//     borderRadius: '4px',
//     border: '1px solid #ccc',
//     minHeight: '100px',
//     boxSizing: 'border-box',
//   },
//   submitButton: {
//     padding: '10px 20px',
//     fontSize: '16px',
//     backgroundColor: '#4CAF50',
//     color: 'white',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     marginTop: '10px',
//   },
//   heading: {
//     color: '#333',
//     marginBottom: '20px',
//   },
// };

// // Apply background image to body or container
// document.body.style.backgroundImage = `url(${BackgroundImage})`;
// document.body.style.backgroundSize = 'cover';
// document.body.style.backgroundPosition = 'center';
// document.body.style.height = '100vh';
// document.body.style.margin = '0';

// export default ContactUs;
