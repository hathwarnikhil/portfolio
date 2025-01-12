import React from 'react';
import './StatsSection.css';

const StatsSection = ({ stats }) => {
  return (
    <section className="stats-section">
      {stats.map((stat, index) => (
        <div key={index} className="stat-card">
          <h2>{stat.value}</h2>
          <p>{stat.label}</p>
        </div>
      ))}
    </section>
  );
};

export default StatsSection;