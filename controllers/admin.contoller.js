const AdminModel= require('../models/admin.model');
const CandidateModel = require('../models/candidate.model')
const VoterModel = require('../models/voter.model');
const VotesModel = require('../models/votes.model');
const bcrypt= require('bcrypt');
const jwt= require('jsonwebtoken');

const createAdmin = async (req, res) => {
  try {
    const { name, password } = req.body;
    const existingAdmin = await AdminModel.findOne({ name });

    if (existingAdmin) {
      return res.status(400).json({ message: "Admin already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = new AdminModel({
      name,
      password: hashedPassword,
    });

    await newAdmin.save();
	console.log("Admin created successfully");
    res.status(201).json({ message: "Admin created successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

const adminLogin = async (req, res) => {
  try {
    const { name, password } = req.body;
    const isAdmin = await AdminModel.findOne({ name });

    if (!isAdmin) {
      return res.status(400).json({ message: "Wrong username" });
    }

    const correctPassword = await bcrypt.compare(password, isAdmin.password);
    if (!correctPassword) {
      return res.status(400).json({ message: "Wrong password" });
    }
    res.status(200).json({
      message: "Login successful",
      user: {
        name: isAdmin.name,
        _id: isAdmin._id,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

const updateAdmin= async(req,res)=>{
	const {id}= req.params;
	const {name,password}= req.body;
	try{
		const hashedPassword= await bcrypt.hash(password,10);
		const updatedAdmin= await AdminModel.findByIdAndUpdate(id,
			{name,password:hashedPassword},
			{new:true,runValidators:true}
		);
		if(!updatedAdmin){
			return res.status(404).json({message: 'Admin not found'});
		}
		res.status(200).json({message:'Details updated successfully',admin:updatedAdmin})
	}
	catch(err){
    console.log(err.message);
		res.status(500).json({message:'Error updating details',error:err.message});
	}

}

const getAllAdmins = async (req, res) => {
  try {
    const admins = await AdminModel.find();
    res.status(200).json(admins);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

const deleteAdmin = async (req, res) => {
  const { id } = req.params;

  try {
    const admin = await AdminModel.findById(id);
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }
    await AdminModel.findByIdAndDelete(id);

    res.status(200).json({ message: "Admin deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error deleting admin", error: err.message });
  }
};



const authenticateVoter = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Assuming token is in 'Authorization: Bearer <token>'
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.voter = decoded; // Add the voter data to the request
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};



const castVote = async (req, res) => {
  const { voterID, candidateID } = req.body; // Ensuring IDs are passed from the request body
  try {
    const voter = await VoterModel.findOne({ voterID });
    if (!voter) {
      return res.status(400).json({ message: "Voter ID not found" });
    }
    if (voter.voted) {
      return res.status(400).json({ message: "You have already voted." });
    }
    const candidate = await CandidateModel.findById(candidateID); // Using direct ID match
    if (!candidate) {
      return res.status(400).json({ message: "Candidate does not exist" });
    }

    candidate.votes += 1;
    await candidate.save();

    voter.voted = true;
    voter.votedTo = {
      name: candidate.name,
      partyName: candidate.partyName,
      partyLogo: candidate.partyLogo,
    };
    await voter.save();

    return res.status(200).json({
      message: `You successfully voted for ${voter.votedTo.name}`,
    });
  } catch (err) {
    return res.status(500).json({ message: "Server error", error: err.message });
  }
};


module.exports= {createAdmin,updateAdmin,adminLogin,getAllAdmins,deleteAdmin, castVote,authenticateVoter};
