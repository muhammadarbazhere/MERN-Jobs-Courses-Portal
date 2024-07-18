const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const path = require("path");

const userRoutes = require("./routes/UserRoutes");
const courseRoutes = require("./routes/CourseRoutes");
const jobInternshipRoutes = require('./routes/JobRoutes');

const applyJobRoutes = require('./routes/applyJobRoutes');
const cartRoutes = require('./routes/cartRoutes');

const app = express();
const port = 3000;

app.use(cors({ credentials: true, origin: true })); // Ensure all origins
app.use(cookieParser());
app.use(express.json());

app.use("/route/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/route", userRoutes);
app.use("/route/courses", courseRoutes);
app.use("/route/cart", cartRoutes); 
app.use('/route/jobs-internships', jobInternshipRoutes);
app.use("/route/form", applyJobRoutes);

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connection successful");
  } catch (error) {
    console.log("Connection error", error);
  }
}
connectDB();

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
