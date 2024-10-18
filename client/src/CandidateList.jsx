import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import './CandidateList.css';
// import EditCandidateModal from './EditCandidateModal'; // Modal for editing

const CandidateList = () => {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingCandidate, setEditingCandidate] = useState(null);

  useEffect(() => {
    // Fetch candidates from backend
    const fetchCandidates = async () => {
      try {
        const response = await axios.get('http://localhost:4444/admin/candidates');
        setCandidates(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching candidates:', error);
        setLoading(false);
      }
    };
    fetchCandidates();
  }, []);

  const openEditModal = (candidate) => {
    setEditingCandidate(candidate);
  };

  const closeEditModal = () => {
    setEditingCandidate(null);
  };

  const handleCandidateUpdate = (updatedCandidate) => {
    setCandidates(candidates.map(candidate => 
      candidate._id === updatedCandidate._id ? updatedCandidate : candidate
    ));
    closeEditModal();
  };

  const handleDeleteCandidate = async (id) => {
    try {
      await axios.delete(`http://localhost:4444/admin/candidates/${id}`);
      setCandidates(candidates.filter(candidate => candidate._id !== id));
    } catch (error) {
      console.error('Error deleting candidate:', error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Candidate List</h2>
      <table className="candidate-table">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Party Logo</th>
            <th>No. of Votes</th>
            <th>Actions</th> {/* Action buttons */}
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate, index) => (
            <tr key={candidate._id}>
              <td>{index + 1}</td> {/* Serial number */}
              <td>{candidate.name}</td>
              <td>
                <img src={candidate.partyLogo} alt={candidate.partyName} className="party-logo" />
              </td>
              <td>{candidate.votes}</td>
              <td>
                <button onClick={() => openEditModal(candidate)}>Edit</button>
                <button onClick={() => handleDeleteCandidate(candidate._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Candidate Modal */}
      {editingCandidate && (
        <EditCandidateModal 
          candidate={editingCandidate} 
          onClose={closeEditModal} 
          onUpdate={handleCandidateUpdate}
        />
      )}
    </div>
  );
};

export default CandidateList;
