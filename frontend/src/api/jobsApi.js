import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api"
});

// Get all jobs
export const getJobs = async () => {
  const res = await API.get("/jobs");
  return res.data;
};

// Get single job
export const getJob = async (id) => {
  const res = await API.get(`/jobs/${id}`);
  return res.data;
};

// Create job
export const createJob = async (jobData) => {
  const res = await API.post("/jobs", jobData);
  return res.data;
};

// Update job
export const updateJob = async (id, jobData) => {
  const res = await API.put(`/jobs/${id}`, jobData);
  return res.data;
};

// Delete job
export const deleteJob = async (id) => {
  const res = await API.delete(`/jobs/${id}`);
  return res.data;
};