const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors= require('cors');
const mongoDB= require('./database/connectDB');
const multer = require('multer');
const cloudinary = require('cloudinary').v2
const PORT = process.env.PORT || 4000;

dotenv.config();
app.use(express.json());
app.use(cors());

app.get('/api/v1/candidate/getOne/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const candidate = await CandidateModel.findById(id);
    if (!candidate) {
      return res.status(404).json({ message: 'Candidate not found' });
    }
    res.json(candidate);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching candidate', error: err.message });
  }
});

app.post('/api/logout', (req, res) => {
  // Assuming you're using cookies for the token
  res.clearCookie('token'); // Clears the token stored in cookies
  res.status(200).json({ message: 'Logout successful' });
});



//Error fetching candidate data: AxiosError {message: 'Request failed with status code 500', name: 'AxiosError', code: 'ERR_BAD_RESPONSE', config: {…}, request: XMLHttpRequest, …}

// const getOneCandidate = async (req, res) => {
//   try {
//     const { id } = req.params;
//     // Check if the provided ID is a valid MongoDB ObjectID
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return res.status(400).json({ message: "Invalid candidate ID" });
//     }

//     const candidate = await CandidateModel.findById(id);
//     if (!candidate) {
//       return res.status(404).json({ message: "Candidate not found" });
//     }

//     res.status(200).json(candidate);
//   } catch (error) {
//     console.error("Error fetching candidate:", error.message);
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };

let storage = multer.diskStorage({
  destination:`client/src/image/`,
  filename: (req, file, cb)=>{
    //cb(null, date.now(+file+originalname))
    cb(null, file.originalname)
  }
})
cloudinary.config({
  cloud_name: 'dn8kapr8c',
  api_key: '977864752863353',
  api_secret: 'pq-GCm5Sz27O9fykMHWppXMLCGk',
});

// Multer Configuration
const upload = multer({ dest: 'uploads/' });


mongoDB();


app.use("/api/v1/admin", require("./routes/admin.route"));
app.use('/api/v1/voter',require('./routes/voter.route'));
app.use('/api/v1/candidate',require('./routes/candidate.route'));

app.post("/upload",upload.single('partyLogo'),(req,res)=>{
  console.log(req.body)
  console.log(req.file.filename)
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.bgCyan);
});
