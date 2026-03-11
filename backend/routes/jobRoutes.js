const express = require("express");
const router = express.Router();

const {
  getJobs,
  createJob,
  updateJob,
  deleteJob
} = require("../controllers/jobController");

router
  .route("/jobs")
  .get(getJobs)
  .post(createJob);

router
  .route("/jobs/:id")
  .put(updateJob)
  .delete(deleteJob);

module.exports = router;