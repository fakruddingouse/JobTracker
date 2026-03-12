const Job = require("../models/Job");

// GET all jobs of logged in user
const getJobs = async (req, res) => {
  try {

    const jobs = await Job.find({ user: req.user.id }).sort({ date: -1 });

    res.status(200).json(jobs);

  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch jobs",
      error: error.message
    });
  }
};


// CREATE job for logged in user
const createJob = async (req, res) => {
  try {

    const job = new Job({
      ...req.body,
      user: req.user.id
    });

    const savedJob = await job.save();

    res.status(201).json(savedJob);

  } catch (error) {
    res.status(400).json({
      message: "Failed to create job",
      error: error.message
    });
  }
};


// UPDATE job only if it belongs to user
const updateJob = async (req, res) => {
  try {

    const updatedJob = await Job.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedJob) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.status(200).json(updatedJob);

  } catch (error) {
    res.status(400).json({
      message: "Failed to update job",
      error: error.message
    });
  }
};


// DELETE job only if it belongs to user
const deleteJob = async (req, res) => {
  try {

    const deletedJob = await Job.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id
    });

    if (!deletedJob) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.status(200).json({
      message: "Job deleted successfully"
    });

  } catch (error) {
    res.status(500).json({
      message: "Failed to delete job",
      error: error.message
    });
  }
};

module.exports = {
  getJobs,
  createJob,
  updateJob,
  deleteJob
};