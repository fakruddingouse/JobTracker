import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api"
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export const signupUser = async (formData) => {
  const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/signup`, formData);
  return res.data;
};

export const loginUser = async (formData) => {
  const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, formData);
  return res.data;
};

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

