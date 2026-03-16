// import { Routes, Route } from 'react-router-dom';
// import { useState, useEffect } from 'react';

// import ProtectedRoute from "./components/ProtectedRoute";
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';

// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Home from './pages/Home';
// import Dashboard from './pages/Dashboard';
// import Stats from './pages/Stats';
// import JobDetails from './pages/JobDetails';
// import AddJob from './AddJob';

// import { getJobs } from "./api/jobsApi";

// function App() {

//   const [jobs, setJobs] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // ✅ Track the token in state so useEffect re-runs when it changes
//   const [token, setToken] = useState(localStorage.getItem("token"));

//   useEffect(() => {

//     if (!token) {
//       setJobs([]);        
//       setIsLoading(false);
//       return;
//     }

//     const fetchJobs = async () => {
//       try {
//         const data = await getJobs();
//         setJobs(data);
//       } catch (err) {
//         setError("Could not fetch jobs from server");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchJobs();

//   }, [token]); // ✅ Re-runs whenever token changes (login/logout)

//   if (isLoading) {
//     return (
//       <div className='loading-screen'>
//         <div className='spinner'></div>
//       </div>
//     );
//   }

//   if (error) {
//     return <div className='error-screen'>Error: {error}</div>;
//   }

//   return (
//     <>
//       <Navbar token={token} setToken={setToken} />

//       <main className="container">
//         <Routes>

//           <Route path="/signup" element={<Signup />} />

//           {/* ✅ Pass setToken so Login can notify App when token changes */}
//           <Route path="/login" element={<Login setToken={setToken} />} />

//           <Route path="/" element={<Home />} />

//           <Route
//             path="/dashboard"
//             element={
//               <ProtectedRoute>
//                 <Dashboard jobs={jobs} />
//               </ProtectedRoute>
//             }
//           />

//           <Route
//             path="/stats"
//             element={
//               <ProtectedRoute>
//                 <Stats jobs={jobs} />
//               </ProtectedRoute>
//             }
//           />

//           <Route
//             path="/add"
//             element={
//               <ProtectedRoute>
//                 <AddJob setJobs={setJobs} />
//               </ProtectedRoute>
//             }
//           />

//           <Route
//             path="/job/:id"
//             element={
//               <ProtectedRoute>
//                 <JobDetails jobs={jobs} setJobs={setJobs} />
//               </ProtectedRoute>
//             }
//           />

//         </Routes>
//       </main>

//       <Footer />
//     </>
//   );
// }

// export default App;


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
  const [token, setToken] = useState(localStorage.getItem("token")); // ✅ Track token in state

  useEffect(() => {

    if (!token) {
      setJobs([]);         // ✅ Clear previous user's jobs on logout
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

  }, [token]); // ✅ Re-runs whenever token changes

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
      <Navbar token={token} setToken={setToken} /> {/* ✅ Pass token and setToken */}

      <main className="container">
        <Routes>

          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login setToken={setToken} />} /> {/* ✅ Pass setToken */}

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