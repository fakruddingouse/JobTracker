import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
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