const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require("./db/conn");
require("dotenv").config();

const UploadRouter = require("./routes/UploadRoute");

//connect to db
const MONGO_URI = process.env.MONGO_URI;
connectDB(MONGO_URI);

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use(UploadRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});
