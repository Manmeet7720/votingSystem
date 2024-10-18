// const express= require('express');
// const {
//   createCandidate,
//   updateCandidate,
//   getCandidate,
//   deleteCandidate,
//   getOneCandidate,
// } = require("../controllers/candidate.controller");
// const router= express.Router();

// router.post('/create-candidate',createCandidate);
// router.get("/get-candidate", getCandidate);
// router.get("/getOne/:id",getOneCandidate);
// router.put("/update-candidate/:id", updateCandidate);
// router.delete("/delete-candidate/:id", deleteCandidate);

// module.exports= router;


const express = require('express');
const {
  createCandidate,
  getOneCandidate,
  updateCandidate,
  getCandidate,
  deleteCandidate,
} = require('../controllers/candidate.controller');

const router = express.Router();

// Route to create a new candidate
router.post('/create-candidate', createCandidate);

// Route to get all candidates
router.get('/get-candidate/', getCandidate);

// Route to get a single candidate by ID
router.get('/getOne/:id', getOneCandidate);

// Route to update a candidate by ID
router.put('/update-candidate/:id', updateCandidate);

// Route to delete a candidate by ID
router.delete('/delete-candidate/:id', deleteCandidate);

// router.post('/vote/:id', jwtAuthMiddleware, (req,res)=>{
//   candidateId = req.params.id;

// })

module.exports = router;
