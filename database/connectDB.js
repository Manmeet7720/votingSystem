const mongoose = require("mongoose");
const dotenv = require("dotenv");
const colors= require('colors');
dotenv.config();

const mongoDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/elect");
    console.log("MongoDB is Connected".bgGreen);
  } 
  catch (err) {
    console.log("MongoDB connection error:", err.message.bgRed);
    process.exit(1);
  }
};
module.exports = mongoDB;
