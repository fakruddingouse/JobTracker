import { Link, useNavigate } from "react-router-dom";

import { deleteAccount } from '../api/jobsApi';

const Navbar = ({ token, setToken, user, setUser }) => {  

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);  
    setUser(null);  
    navigate("/login");
  };

  const handleDeleteAccount = async () => {
    if (!window.confirm(
            "Are you sure you want to delete your account? This will permanently delete your account and all your jobs. This cannot be undone."
    )) return;

    try {
      await deleteAccount();
      
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setToken(null);
      setUser(null);
      navigate("/signup");
      alert("Your account has been deleted successfully.")

    } catch (error) {
      alert("Failed to delete account. Please try again.");
    }
  }

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

        {token && user && (
          <span className="user-greeting">Hello, {user.name}</span>
        )}

        {token && (
          <button onClick={handleLogout} className="btn-secondary">
            Logout
          </button>
        )}
        
        {token && (
          <button onClick={handleDeleteAccount} className="btn-danger">
            Delete Account
          </button>
        )}

      </div>

    </nav>
  );
};

export default Navbar;


  