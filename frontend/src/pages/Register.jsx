import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Mail, Lock, User, HeartHandshake } from 'lucide-react';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    name: '',
    role: 'user'
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const apiData = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        name: formData.name,
        role: formData.role.toUpperCase()
      };
      await register(apiData);
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center', background: 'var(--gradient-light)', padding: '2rem 0' }}>
      <div className="glass-panel animate-fade-in" style={{ padding: '2.5rem', maxWidth: '500px', width: '100%', borderRadius: '20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'var(--gradient-main)', width: '60px', height: '60px', borderRadius: '50%', color: 'white', marginBottom: '1rem' }}>
            <HeartHandshake size={32} />
          </div>
          <h2 style={{ fontSize: '2rem', color: 'var(--primary)' }}>Join Us Today</h2>
          <p style={{ color: 'var(--text-light)' }}>Create an account to start making an impact</p>
        </div>

        {error && <div style={{ background: '#fee2e2', color: '#ef4444', padding: '10px', borderRadius: '8px', marginBottom: '1rem', fontSize: '0.9rem' }}>{error}</div>}

        <form onSubmit={handleRegister}>
          <div style={{ marginBottom: '1.2rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Full Name</label>
            <div style={{ position: 'relative' }}>
              <User style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', color: 'var(--text-light)' }} size={20} />
              <input 
                type="text" 
                name="name"
                value={formData.name} 
                onChange={handleChange}
                style={{ width: '100%', padding: '10px 10px 10px 40px', borderRadius: '10px', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.8)' }} 
                placeholder="John Doe"
                required
              />
            </div>
          </div>

          <div style={{ marginBottom: '1.2rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Username</label>
            <div style={{ position: 'relative' }}>
              <User style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', color: 'var(--text-light)' }} size={20} />
              <input 
                type="text" 
                name="username"
                value={formData.username} 
                onChange={handleChange}
                style={{ width: '100%', padding: '10px 10px 10px 40px', borderRadius: '10px', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.8)' }} 
                placeholder="johndoe123"
                required
              />
            </div>
          </div>

          <div style={{ marginBottom: '1.2rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email</label>
            <div style={{ position: 'relative' }}>
              <Mail style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', color: 'var(--text-light)' }} size={20} />
              <input 
                type="email" 
                name="email"
                value={formData.email} 
                onChange={handleChange}
                style={{ width: '100%', padding: '10px 10px 10px 40px', borderRadius: '10px', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.8)' }} 
                placeholder="john@example.com"
                required
              />
            </div>
          </div>

          <div style={{ marginBottom: '1.2rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Password</label>
            <div style={{ position: 'relative' }}>
              <Lock style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', color: 'var(--text-light)' }} size={20} />
              <input 
                type="password" 
                name="password"
                value={formData.password} 
                onChange={handleChange}
                style={{ width: '100%', padding: '10px 10px 10px 40px', borderRadius: '10px', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.8)' }} 
                placeholder="Secure password"
                required
              />
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>I want to join as a:</label>
            <select 
              name="role" 
              value={formData.role} 
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', borderRadius: '10px', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.8)' }}
            >
              <option value="user">Needy Person (User)</option>
              <option value="volunteer">Volunteer</option>
              <option value="donor">Donor</option>
            </select>
          </div>

          <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '12px' }} disabled={loading}>
            {loading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.9rem' }}>
          Already have an account? <Link to="/login" style={{ color: 'var(--primary)', fontWeight: '600', textDecoration: 'none' }}>Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
