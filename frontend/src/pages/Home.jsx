import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home-container container'>
      <section className='hero animate-pop'>
        <div className="hero-content">
          <h1>Master Your Job Search</h1>
          <p className="hero-subtitle">
            The professional way to track applications, organize interviews, and visualize your career progress in one place.
          </p>
          <div className="cta-group">
            <Link to="/dashboard" className='btn-large'>Go To Dashboard</Link>
            <Link to="/stats" className='btn-large'>View Analytics</Link>
          </div>
        </div>
      </section>

      <section className='features-grid'>
        <div className="feature-card">
          <div className="icon">🚀</div>
          <h3>Full CRUD</h3>
          <p>Create, update and manage every detail of your journey.</p>
        </div>
        <div className="feature-card">
          <div className="icon">📊</div>
          <h3>Live Stats</h3>
          <p>Real-time analytics using useMemo for performance optimization.</p>
        </div>
        <div className="feature-card">
          <div className="icon">🕵️</div>
          <h3>Quick Search</h3>
          <p>Filter through applications instantly with smart search.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;