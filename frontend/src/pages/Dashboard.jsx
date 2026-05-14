import { Activity, CreditCard, Clock, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import api from '../services/api';

const Dashboard = () => {
  const [stats, setStats] = useState({
    activeRequests: 0,
    upcomingEvents: 0,
    totalVolunteers: 0,
    totalDonations: 0
  });

  useEffect(() => {
    api.get('/public/dashboard-stats')
      .then(res => setStats(res.data))
      .catch(console.error);
  }, []);
  return (
    <div className="container animate-fade-in" style={{ padding: '2rem 1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h2 style={{ fontSize: '2rem' }}>User Dashboard</h2>
          <p style={{ color: 'var(--text-light)' }}>Welcome back! Here's your activity summary.</p>
        </div>
        <button className="btn-primary">New Request</button>
      </div>

      <div className="cards-grid" style={{ paddingTop: '1rem', paddingBottom: '2rem' }}>
        <div className="card glass-panel" style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '1.5rem' }}>
          <div className="card-icon" style={{ marginBottom: 0, background: 'var(--primary)' }}>
            <Activity />
          </div>
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0' }}>{stats.activeRequests}</h3>
            <p style={{ color: 'var(--text-light)', margin: 0 }}>Active Requests</p>
          </div>
        </div>
        
        <div className="card glass-panel" style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '1.5rem' }}>
          <div className="card-icon" style={{ marginBottom: 0, background: 'var(--secondary)' }}>
            <CreditCard />
          </div>
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0' }}>${stats.totalDonations}</h3>
            <p style={{ color: 'var(--text-light)', margin: 0 }}>Total Donated</p>
          </div>
        </div>

        <div className="card glass-panel" style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '1.5rem' }}>
          <div className="card-icon" style={{ marginBottom: 0, background: 'var(--accent)' }}>
            <Clock />
          </div>
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0' }}>{stats.upcomingEvents}</h3>
            <p style={{ color: 'var(--text-light)', margin: 0 }}>Upcoming Events</p>
          </div>
        </div>
      </div>

      <div className="glass-panel" style={{ padding: '2rem' }}>
        <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Recent Activity</h3>
        <ul style={{ listStyle: 'none' }}>
          <li style={{ display: 'flex', gap: '15px', padding: '1rem 0', borderBottom: '1px solid var(--glass-border)' }}>
            <CheckCircle color="var(--primary)" />
            <div>
              <p style={{ fontWeight: '500' }}>Your donation of $50 was successful.</p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>2 days ago</p>
            </div>
          </li>
          <li style={{ display: 'flex', gap: '15px', padding: '1rem 0', borderBottom: '1px solid var(--glass-border)' }}>
            <Clock color="var(--accent)" />
            <div>
              <p style={{ fontWeight: '500' }}>Emergency Help Request: "Medical Supplies Needed" is pending approval.</p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>5 days ago</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
