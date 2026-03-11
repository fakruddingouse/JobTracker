import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { createJob } from './api/jobsApi';

const AddJob = ({ setJobs }) => {

  const [formData, setFormData] = useState({
    company: '',
    position: '',
    status: 'Pending',
    date: new Date().toISOString().split('T')[0]
  });

  const navigate = useNavigate();
  const companyInputRef = useRef(null);

  useEffect(() => {
    if (companyInputRef.current) {
      companyInputRef.current.focus();
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const newJob = await createJob(formData);

      setJobs(prev => [...prev, newJob]);

      navigate('/dashboard');

    } catch (error) {
      console.error("Save failed:", error);
    }
  };

  return (
    <div className="form-container animate-pop">

      <h2>New Application</h2>

      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Company</label>
          <input
            type="text"
            ref={companyInputRef}
            value={formData.company}
            onChange={(e) =>
              setFormData({ ...formData, company: e.target.value })
            }
            placeholder="e.g. Google"
            required
          />
        </div>

        <div className="form-group">
          <label>Position</label>
          <input
            type="text"
            value={formData.position}
            onChange={(e) =>
              setFormData({ ...formData, position: e.target.value })
            }
            placeholder="e.g. Frontend Engineer"
            required
          />
        </div>

        <div className="form-group">
          <label>Status</label>
          <select
            value={formData.status}
            onChange={(e) =>
              setFormData({ ...formData, status: e.target.value })
            }
          >
            <option value="Pending">Pending</option>
            <option value="Interviewing">Interviewing</option>
            <option value="Declined">Declined</option>
          </select>
        </div>

        <button type="submit" className="btn-submit">
          Add to Tracker
        </button>

      </form>
    </div>
  );
};

export default AddJob;