const mongoose = require("mongoose");

const votesSchema = new mongoose.Schema(
  {
    
    voterId: { type: mongoose.Schema.Types.ObjectId, ref: 'Voter' },
  candidateId: { type: mongoose.Schema.Types.ObjectId, ref: 'Candidate' },
    
  },
  
);
const VotesModel = mongoose.model("votes", votesSchema);

module.exports = VotesModel;
