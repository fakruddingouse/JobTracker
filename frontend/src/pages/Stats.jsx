import { useMemo } from 'react';

const Stats = ({ jobs }) => {
  const stats = useMemo(() => {
    const total = jobs.length;

    const pending = jobs.filter(
      j => (j.status || '').toLowerCase() === 'pending'
    ).length;

    const interviewing = jobs.filter(
      j => (j.status || '').toLowerCase() === 'interviewing'
    ).length;

    const declined = jobs.filter(
      j => (j.status || '').toLowerCase() === 'declined'
    ).length;

    const responseRate =
      total > 0 ? ((interviewing / total) * 100).toFixed(0) : 0;

    return { total, pending, interviewing, declined, responseRate };
  }, [jobs]);

  return (
    <div className="stats-container container animate-pop">
      <h2>Application Analytics</h2>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total</h3>
          <p className="stat-number">{stats.total}</p>
        </div>

        <div className="stat-card yellow">
          <h3>Pending</h3>
          <p className="stat-number">{stats.pending}</p>
        </div>

        <div className="stat-card green">
          <h3>Interviews</h3>
          <p className="stat-number">{stats.interviewing}</p>
        </div>

        <div className="stat-card red">
          <h3>Declined</h3>
          <p className="stat-number">{stats.declined}</p>
        </div>
      </div>

      <div className="performance-section">
        <h3>Interview Success Rate: {stats.responseRate}%</h3>

        <div
          className="progress-bar-bg"
          style={{
            background: '#333',
            borderRadius: '10px',
            overflow: 'hidden'
          }}
        >
          <div
            className="progress-bar-fill"
            style={{ width: `${stats.responseRate}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Stats;