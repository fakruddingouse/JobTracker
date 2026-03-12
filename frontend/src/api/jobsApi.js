import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api"
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

// Get all jobs
export const getJobs = async () => {
  const res = await API.get("/jobs");
  return res.data;
};

export const createJob = async (jobData) => {
  const res = await API.post("/jobs", jobData);
  return res.data;
};

export const updateJob = async (id, jobData) => {
  const res = await API.put(`/jobs/${id}`, jobData);
  return res.data;
};

export const deleteJob = async (id) => {
  const res = await API.delete(`/jobs/${id}`);
  return res.data;
};