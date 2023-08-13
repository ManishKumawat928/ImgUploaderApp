const mongoose = require("mongoose");
mongoose.set('strictQuery',false)
const connectDB = async (MONGO_URI) => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected Successfully");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectDB;