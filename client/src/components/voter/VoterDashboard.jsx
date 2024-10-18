

import { Table, Modal, Button } from "flowbite-react"; 
import './VoterDashboard.css';
import axios from 'axios';
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';


export default function VoterDashboard() {
  const [users, setUser] = useState([]); // Candidate list
  const [voterID, setVoterID] = useState(localStorage.getItem('voterID')); // Fetch voter ID from localStorage
  const [votedTo, setVotedTo] = useState(localStorage.getItem('votedTo') || null); // Track if user has voted
  const [modalMessage, setModalMessage] = useState(''); // Message for success/error modal
  const [showModal, setShowModal] = useState(false); // Success/error modal visibility
  const [showConfirmModal, setShowConfirmModal] = useState(false); // Confirmation modal visibility
  const [selectedCandidate, setSelectedCandidate] = useState(null); // Candidate ID for voting

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/v1/candidate/get-candidate");
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching candidates:', error);
      }
    };
    fetchData();
  }, []);

  // Trigger when the Vote button is clicked, but before voting
  const confirmVote = (candidateId) => {
    setSelectedCandidate(candidateId);
    setShowConfirmModal(true); // Open the confirmation modal
  };

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/voting-success'); // Replace with your target route
  };

  const VoteButton = async () => {
    setShowConfirmModal(false); // Close the confirmation modal
    try {
      const response = await axios.post(`http://localhost:4000/api/v1/admin/vote/${selectedCandidate}`, {
        voterID, // Passing the voter ID correctly
        candidateID: selectedCandidate // Passing the candidate ID correctly
      }, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}` // Sending JWT token in headers
        }
      });

      if (response.status === 200) {
        setModalMessage("Your vote has been recorded successfully!"); // Success message
        setShowModal(true); // Show the success modal
        localStorage.setItem('votedTo', selectedCandidate); // Save voted candidate to localStorage
        setVotedTo(selectedCandidate); // Update state to reflect the voted candidate
        // Refetch the updated candidate list after voting
        const updatedUsers = await axios.get("http://localhost:4000/api/v1/candidate/get-candidate");
        setUser(updatedUsers.data);
      } else if (response.status === 400) {
        setModalMessage(response.data.message); // Error message from response
        setShowModal(true); // Show the error modal
      }
    } catch (error) {
      console.error("Error while voting:", error);
      setModalMessage("You have already voted!!"); // Error message for already voted
      setShowModal(true); // Show the error modal
    }

    
  };

  return (
    <div className="flex flex-row">
      <div className="flex-grow border-r-2">
        <div>
          <Table className="w-full min-h-screen">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Candidate Name</th>
                <th>Party Name</th>
                <th>Party Logo</th>
                <th>
                  <div className="md:ml-2">Actions</div>
                </th>
              </tr>
            </thead>
            <Table.Body className="divide-y">
              {users.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}.</td>
                  <td>{user.name}</td>
                  <td>{user.partyName}</td>
                  <td><img src={user.partyLogo} alt="Party Logo" width="50" /></td>
                  <td>
                    <button 
                      className="btn-del" 
                      onClick={() => confirmVote(user._id)} 
                      disabled={votedTo !== null}> {/* Disable button if the user has voted */}
                      Vote
                    </button>
                  </td>
                </tr>
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>

      {/* Success/Error Modal */}
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <Modal.Header>
          Vote Confirmation
        </Modal.Header>
        <Modal.Body>
          <p>{modalMessage}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button  onClick={handleNavigate}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Confirmation Modal for voting */}
      <Modal show={showConfirmModal} onClose={() => setShowConfirmModal(false)}>
        <Modal.Header>
          Confirm Your Vote
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to vote for this candidate?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={VoteButton} >
            Yes, Vote
          </Button>
          <Button color="gray" onClick={() => setShowConfirmModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
