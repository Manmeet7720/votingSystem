const express = require("express");
const  {signup,login,getVoter}  = require("../controllers/voter.controller");
const router = express.Router();

router.post('/signup',signup);
router.post('/login',login);
router.get('/get-voter',getVoter);

module.exports=router;