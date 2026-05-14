import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Mail, Lock, HeartHandshake } from 'lucide-react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(username, password);
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid credentials or server error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center', background: 'var(--gradient-light)' }}>
      <div className="glass-panel animate-fade-in" style={{ padding: '3rem', maxWidth: '400px', width: '100%', borderRadius: '20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'var(--gradient-main)', width: '60px', height: '60px', borderRadius: '50%', color: 'white', marginBottom: '1rem' }}>
            <HeartHandshake size={32} />
          </div>
          <h2 style={{ fontSize: '2rem', color: 'var(--primary)' }}>Welcome Back</h2>
          <p style={{ color: 'var(--text-light)' }}>Sign in to continue your mission</p>
        </div>

        {error && <div style={{ background: '#fee2e2', color: '#ef4444', padding: '10px', borderRadius: '8px', marginBottom: '1rem', fontSize: '0.9rem' }}>{error}</div>}

        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Username</label>
            <div style={{ position: 'relative' }}>
              <Mail style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', color: 'var(--text-light)' }} size={20} />
              <input 
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
                style={{ width: '100%', padding: '12px 12px 12px 40px', borderRadius: '10px', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.8)' }} 
                placeholder="Enter your username"
                required
              />
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Password</label>
            <div style={{ position: 'relative' }}>
              <Lock style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', color: 'var(--text-light)' }} size={20} />
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: '100%', padding: '12px 12px 12px 40px', borderRadius: '10px', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.8)' }} 
                placeholder="Enter your password"
                required
              />
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', fontSize: '0.9rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Forgot Password?</a>
          </div>

          <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '12px' }} disabled={loading}>
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.9rem' }}>
          Don't have an account? <Link to="/register" style={{ color: 'var(--primary)', fontWeight: '600', textDecoration: 'none' }}>Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
