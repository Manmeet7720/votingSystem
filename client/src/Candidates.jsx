



import React, { useState, useEffect  } from "react";
//import {  useParams } from 'react-router-dom';
import AdminSidebar from "./components/admin/AdminSidebar";
import { Table } from "flowbite-react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast"
import './Candidate.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';


const handleModalClose = () => {
  navigate("/CandidatesAdd");
};



//onst { id } = useParams();
export default function Candidates() {
  const [users, setUser] = useState([]); // Correct setUser here

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => { // Corrected typo here
      try {
        const response = await axios.get("http://localhost:4000/api/v1/candidate/get-candidate");
        setUser(response.data); // Correct setUser
      } catch (error) {
        console.error('Error fetching candidates:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs once when the component mounts

// const handleDelete = async(id)=>{
//   const data = await axios.get(`http://localhost:4000/api/v1/candidate/delete-candidate/${id}`)
//   window.alert("candidate deleted sucessfully!!")
// }

const DeleteCandidate = async(id) => {
  if(window.confirm("Are you sure that you want to delete that user?")){
    await axios.delete(`http://localhost:4000/api/v1/candidate/delete-candidate/${id}`)
    // if(response.status==200){
    //   window.alert("Candidate deleted sucessfullty!!")
    //   Candidates();
    // }
    .then((response)=>{
      setUser((prevUser)=>prevUser.filter((user)=>user._id!==id))
      window.alert("Candidate deleted sucessfullty!!")
      toast.success(response.data.msg,{position:'top-right'})
    })
    .catch((error)=>{
      console.log(error);
    })
  }
}
  return (
    <div className="flex flex-row">
      <AdminSidebar className="h-full" />
      <div className="flex flex-col flex-grow">
        <div className="">
          <Table className="min-h-screen border-b">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Party Logo</th>
                <th>Candidate Name</th>
                <th>Party Name</th>
                <th>No. of Votes</th>
                <th>
                  <div className="md:ml-2">Actions</div>
                </th>
              </tr>
            </thead>
            <Table.Body className="divide-y">
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}.</td>
                  <td><img src={user.partyLogo} alt="Party Logo" width="50" /></td>
                  <td>{user.name}</td>
                  <td>{user.partyName}</td>
                  <td>{user.votes}</td>
                  <td>
                    <button className="btn-del" onClick={()=>DeleteCandidate(user._id)} ><FontAwesomeIcon icon={faTrash} /></button>
                    <Link to={`/update/`+user._id} className="link-edit"><FontAwesomeIcon icon={faEdit} /></Link>
                  </td>
                </tr>
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  );
}
