import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

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

          <Route path="/" element={<Home />} />

          <Route
            path="/dashboard"
            element={<Dashboard jobs={jobs} />}
          />

          <Route
            path="/stats"
            element={<Stats jobs={jobs} />}
          />

          <Route
            path="/job/:id"
            element={<JobDetails jobs={jobs} setJobs={setJobs} />}
          />

          <Route
            path="/add"
            element={<AddJob setJobs={setJobs} />}
          />

        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;