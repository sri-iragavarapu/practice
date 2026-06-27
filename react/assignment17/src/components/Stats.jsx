function Stats({ stats }) {
  return (
    <div className="profile">
      <h3>Statistics</h3>

<p>📋 Total Habits: {stats.total}</p>
<p>✅ Completed: {stats.completed}</p>
<p>⏳ Pending: {stats.pending}</p>
    
    </div>
  );
}

export default Stats;