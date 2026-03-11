import { useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = ({ jobs }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  const filteredJobs = jobs.filter((job) => {
    const company = job.company || '';
    const position = job.position || '';
    const status = job.status || '';

    const matchesSearch =
      company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      position.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      filterStatus === 'All' || status === filterStatus;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="container animate-pop">
      <div className="dashboard-controls form-group">
        <input
          type="text"
          placeholder="Search company or position..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="filter-select"
        >
          <option value="All">All Statuses</option>
          <option value="Pending">Pending</option>
          <option value="Interviewing">Interviewing</option>
          <option value="Declined">Declined</option>
        </select>

        <Link to="/add" className="btn-primary">
          Add New Job
        </Link>
      </div>

      <div className="job-grid">
        {filteredJobs.length === 0 ? (
          <p>No jobs found.</p>
        ) : (
          filteredJobs.map((job) => (
            <div key={job._id} className="job-card">
              <h3>{job.company}</h3>
              <p>{job.position}</p>

              <span className={`status ${job.status?.toLowerCase()}`}>
                {job.status}
              </span>

              <Link to={`/job/${job._id}`} className="view-details">
                View Details
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;