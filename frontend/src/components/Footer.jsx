import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>Pro-Connect<span>.</span></h3>
          <p>The ultimate tool for junior developers to track, manage, and optimize their job application journey.</p>
        </div>

        <div className="footer-links">
          <h4>Navigation</h4>
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/stats">Analytics</Link>
        </div>

        <div className="footer-social">
          <h4>Social</h4>
          <div className="social-icons">
            <a href="https://github.com/fakruddingouse" target="_blank" rel="noreferrer">GitHub</a>
            <a href="http://linkedin.com/in/baba-fakruddin-488092301/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://twitter.com/babafakruddin_1" target="_blank" rel="noreferrer">Twitter</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom"> 
        <p>&copy; {new Date().getFullYear()} Pro-Connect. Built by Baba Fakruddin.</p>
      </div>
    </footer>
  );
};

export default Footer;