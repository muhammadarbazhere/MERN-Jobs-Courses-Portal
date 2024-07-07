// UserController.js

const nodemailer = require("nodemailer");
const User = require("../model/UserModel");
const multer = require("multer");
const path = require("path");
require("dotenv").config();



// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_ADMIN,
    pass: process.env.EMAIL_PASS, // Use the app-specific password here
  },
});

// Apply for a job
const applyJob = async (req, res) => {
  const { firstName, email } = req.body;
  const resume = req.file; // Get the file object from req.file

  try {
    // Save application data to the database or perform other operations

    // Send email notification about job application
    const mailOptions = {
      from: process.env.EMAIL_ADMIN,
      to: process.env.EMAIL_ADMIN, // Send to admin's email for notification
      subject: "New Job Application Received",
      text: `New job application received from ${firstName} (${email}). Please review the application.`,
      attachments: [
        {
          filename: resume.originalname,
          content: resume.buffer, // Ensure you have access to the resume buffer
        },
      ],
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error sending email:", error);
        return res.status(500).json({
          message:
            "Error sending email. Application submitted but email sending failed.",
        });
      }
      console.log("Email sent:", info.response);
    });

    res.status(201).json({ message: "Application submitted successfully" });
  } catch (error) {
    console.error("Error submitting application:", error);
    res.status(500).json({ message: "Server error" });
  }
};


module.exports = {
  applyJob,
};
