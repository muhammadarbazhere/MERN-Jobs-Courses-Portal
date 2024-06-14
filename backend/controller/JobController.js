// controllers/jobInternshipController.js
const JobInternship = require('../model/JobSchema');

// const createJobInternship = async (req, res) => {
//   try {
//     const { title, description, type, jobOrInternship } = req.body;
//     const jobInternship = new JobInternship({ title, description, type, jobOrInternship });
//     await jobInternship.save();
//     res.status(201).json({ message: 'Job/Internship created successfully', jobInternship });
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to create job/internship', error: error.message });
//   }
// };
const createJobInternship = async (req, res) => {
    try {
      const { title, description, jobOrInternship } = req.body;
  
      if (!title || !description || !jobOrInternship) {
        return res.status(400).json({ message: 'All fields are required' });
      }
  
      const jobInternship = new JobInternship({ title, description, jobOrInternship });
      await jobInternship.save();
      res.status(201).json({ message: 'Job/Internship created successfully', jobInternship });
    } catch (error) {
      console.error('Error in createJobInternship:', error);
      res.status(500).json({ message: 'Failed to create job/internship', error: error.message });
    }
  };
  

const getJobsInternships = async (req, res) => {
  try {
    const jobsInternships = await JobInternship.find();
    res.status(200).json(jobsInternships);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching jobs/internships', error });
  }
};

const getJobInternshipById = async (req, res) => {
  const { id } = req.params;
  try {
    const jobInternship = await JobInternship.findById(id);
    if (!jobInternship) {
      return res.status(404).json({ message: 'Job/Internship not found' });
    }
    res.status(200).json(jobInternship);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching job/internship', error });
  }
};

const updateJobInternship = async (req, res) => {
  const { id } = req.params;
  const { title, description, jobOrInternship, status } = req.body;

  try {
    const updatedJobInternship = await JobInternship.findByIdAndUpdate(
      id,
      { title, description, jobOrInternship, status },
      { new: true }
    );

    if (!updatedJobInternship) {
      return res.status(404).json({ message: 'Job/Internship not found' });
    }

    res.status(200).json(updatedJobInternship);
  } catch (error) {
    res.status(500).json({ message: 'Error updating job/internship', error });
  }
};

const deleteJobInternship = async (req, res) => {
  const { id } = req.params;
  console.log(id);

  try {
    const deletedJobInternship = await JobInternship.findByIdAndDelete(id);
    if (!deletedJobInternship) {
      return res.status(404).json({ message: 'Job/Internship not found' });
    }
    res.status(200).json({ message: 'Job/Internship deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting job/internship', error });
  }
};

module.exports = { createJobInternship, getJobsInternships, getJobInternshipById, updateJobInternship, deleteJobInternship };
