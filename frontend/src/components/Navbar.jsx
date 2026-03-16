// import { Link, useNavigate } from "react-router-dom";

// const Navbar = ({ token, setToken }) => {  // ✅ Receive token and setToken as props

//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setToken(null);   // ✅ Now defined — triggers App.jsx re-fetch + clears jobs
//     navigate("/login");
//   };

//   return (
//     <nav className="navbar">

//       <h2 className="logo">ProConnect</h2>

//       <div className="nav-links">

//         <Link to="/">Home</Link>

//         {token && <Link to="/dashboard">Dashboard</Link>}
//         {token && <Link to="/stats">Stats</Link>}
//         {token && <Link to="/add">Add Job</Link>}

//         {!token && <Link to="/login">Login</Link>}
//         {!token && <Link to="/signup">Create Account</Link>}

//         {token && (
//           <button onClick={handleLogout} className="btn-secondary">
//             Logout
//           </button>
//         )}

//       </div>

//     </nav>
//   );
// };

// export default Navbar;


import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ token, setToken }) => {  // ✅ Receive token and setToken as props

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);  // ✅ Clears token state → App clears jobs → Navbar updates
    navigate("/login");
  };

  return (
    <nav className="navbar">

      <h2 className="logo">ProConnect</h2>

      <div className="nav-links">

        <Link to="/">Home</Link>

        {token && <Link to="/dashboard">Dashboard</Link>}
        {token && <Link to="/stats">Stats</Link>}
        {token && <Link to="/add">Add Job</Link>}

        {!token && <Link to="/login">Login</Link>}
        {!token && <Link to="/signup">Create Account</Link>}

        {token && (
          <button onClick={handleLogout} className="btn-secondary">
            Logout
          </button>
        )}

      </div>

    </nav>
  );
};

export default Navbar;