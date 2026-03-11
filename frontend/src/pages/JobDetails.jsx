import { useParams, useNavigate } from 'react-router-dom';

import { deleteJob, updateJob } from '../api/jobsApi';

const JobDetails = ({ jobs, setJobs }) => {

  const { id } = useParams();
  const navigate = useNavigate();

  const job = jobs.find((j) => j._id === id);

  if (!job) {
    return (
      <div className="container">
        <h2>Job Not Found...</h2>
      </div>
    );
  }

  const handleDelete = async () => {

    if (!window.confirm("Delete this application?")) return;

    try {

      await deleteJob(id);

      setJobs(prev => prev.filter(j => j._id !== id));

      navigate('/dashboard');

    } catch (error) {
      console.error("Delete failed:", error);
    }

  };

  const handleStatusChange = async (newStatus) => {

    try {

      const updatedJob = await updateJob(id, {
        ...job,
        status: newStatus
      });

      setJobs(prev =>
        prev.map(j => j._id === id ? updatedJob : j)
      );

    } catch (error) {
      console.error("Update failed:", error);
    }

  };

  return (
    <div className="container animate-pop">

      <div className="details-header">
        <button
          onClick={() => navigate(-1)}
          className="btn-secondary"
        >
          ← Back
        </button>

        <button
          onClick={handleDelete}
          className="btn-danger"
        >
          Delete App
        </button>
      </div>

      <div className="card-large">
        <h1>{job.company}</h1>

        <p>{job.position}</p>

        <select
          value={job.status}
          onChange={(e) =>
            handleStatusChange(e.target.value)
          }
          className="status-select"
        >
          <option value="Pending">Pending</option>
          <option value="Interviewing">Interviewing</option>
          <option value="Declined">Declined</option>
        </select>
      </div>

      <div className="info-grid">
        <div className="info-item">
          <strong>Applied on:</strong> {job.date}
        </div>
      </div>

    </div>
  );
};

export default JobDetails;