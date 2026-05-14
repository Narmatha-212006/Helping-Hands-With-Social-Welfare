import { Link, useNavigate } from 'react-router-dom';
import { HeartHandshake, User, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar glass-panel">
      <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary)' }}>
        <HeartHandshake size={32} />
        Helping Hands
      </div>
      <ul className="nav-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/requests">Help Requests</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="nav-actions" style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
        <span style={{ fontWeight: '500', color: 'var(--text-main)' }}>Hello, {user?.username}</span>
        <Link to="/dashboard" className="btn-primary" style={{ textDecoration: 'none', padding: '8px 16px' }}>
          <User size={18} /> Dashboard
        </Link>
        <button onClick={handleLogout} className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '8px 16px' }}>
          <LogOut size={18} /> Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
