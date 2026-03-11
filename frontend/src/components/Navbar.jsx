import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink to="/" className="nav-logo">
          Pro-Connect<span>.</span>
        </NavLink>
        
        <div className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/stats">Stats</NavLink>
          <NavLink to="/add" className="nav-add-btn">+ Add Job</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;