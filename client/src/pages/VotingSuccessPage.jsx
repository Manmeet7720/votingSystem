import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function VotingSuccessPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve the voted candidate details from state or set fallback values
  const candidate = location.state?.candidate || { name: 'Unknown', partyName: 'Unknown', partyLogo: null };

  const handleLogout = () => {
    localStorage.clear(); // Clear localStorage
    navigate('/'); // Redirect to login page
  };

  return (
    <div style={styles.successPage}>
      <h1 style={styles.title}>Thank you for voting!</h1>
      <div style={styles.candidateDetails}>
        <h2 style={styles.subTitle}>Voted Candidate Details:</h2>
        <p><strong>Name:</strong> {candidate.name !== 'Unknown' ? candidate.name : 'Unknown'}</p>
        <p><strong>Party Name:</strong> {candidate.partyName !== 'Unknown' ? candidate.partyName : 'Unknown'}</p>
        {candidate.partyLogo ? (
          <img src={candidate.partyLogo} alt="Party Logo" width="100" style={styles.partyLogo} />
        ) : (
          <p>No logo available</p>
        )}
      </div>
      <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
    </div>
  );
}

const styles = {
  successPage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f9f9f9',
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  },
  title: {
    color: '#2e7d32', // Success green color
    fontSize: '2.5rem',
    marginBottom: '20px'
  },
  candidateDetails: {
    backgroundColor: '#ffffff',
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '20px',
    width: '100%',
    maxWidth: '500px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center'
  },
  subTitle: {
    color: '#333',
    fontSize: '1.8rem',
    marginBottom: '15px'
  },
  partyLogo: {
    marginTop: '10px',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)'
  },
  logoutButton: {
    marginTop: '30px',
    padding: '10px 20px',
    backgroundColor: '#e53935', // Logout button red color
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1.1rem',
    transition: 'background-color 0.3s ease'
  }
};
