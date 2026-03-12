import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Stats from './pages/Stats';
import JobDetails from './pages/JobDetails';
import AddJob from './AddJob';

import { getJobs } from "./api/jobsApi";

function App() {

  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(() => {

  const token = localStorage.getItem("token");

  if (!token) {
    setIsLoading(false);
    return;
  }

  const fetchJobs = async () => {
    try {
      const data = await getJobs();
      setJobs(data);
    } catch (err) {
      setError("Could not fetch jobs from server");
    } finally {
      setIsLoading(false);
    }
  };

  fetchJobs();

  }, []);

  if (isLoading) {
    return (
      <div className='loading-screen'>
        <div className='spinner'></div>
      </div>
    );
  }

  if (error) {
    return <div className='error-screen'>Error: {error}</div>;
  }

  return (
    <>
      <Navbar />

      <main className="container">
        <Routes>

          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          <Route path="/" element={<Home />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard jobs={jobs} />
              </ProtectedRoute>
            }
          />

          <Route
            path="/stats"
            element={
              <ProtectedRoute>
                <Stats jobs={jobs} />
              </ProtectedRoute>
            }
          />

          <Route
            path="/add"
            element={
              <ProtectedRoute>
                <AddJob setJobs={setJobs} />
              </ProtectedRoute>
            }
          />

          <Route
            path="/job/:id"
            element={
              <ProtectedRoute>
                <JobDetails jobs={jobs} setJobs={setJobs} />
              </ProtectedRoute>
            }
          />

        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;