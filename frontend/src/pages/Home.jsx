import { ArrowRight, Heart, Users, Globe, ShieldAlert, HeartHandshake } from 'lucide-react';

const Home = () => {
  return (
    <div className="home-container animate-fade-in">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div style={{ display: 'inline-block', padding: '8px 16px', background: 'var(--gradient-light)', borderRadius: '20px', color: 'var(--primary)', fontWeight: '600', marginBottom: '20px' }}>
            Empowering Communities Together
          </div>
          <h1 className="hero-title">Be the reason someone smiles today.</h1>
          <p className="hero-subtitle">
            Helping Hands is a modern social welfare platform connecting volunteers, donors, and NGOs to those in need. Join our mission to make the world a better place.
          </p>
          <div style={{ display: 'flex', gap: '15px' }}>
            <button className="btn-primary">
              Donate Now <Heart size={18} />
            </button>
            <button className="btn-outline">
              Become a Volunteer <ArrowRight size={18} />
            </button>
          </div>
          
          <div style={{ display: 'flex', gap: '30px', marginTop: '40px', padding: '20px', background: 'var(--glass-bg)', borderRadius: '15px', border: '1px solid var(--glass-border)' }}>
            <div>
              <h3 style={{ fontSize: '2rem', color: 'var(--primary)' }}>50K+</h3>
              <p style={{ color: 'var(--text-light)' }}>Volunteers</p>
            </div>
            <div>
              <h3 style={{ fontSize: '2rem', color: 'var(--secondary)' }}>$2M+</h3>
              <p style={{ color: 'var(--text-light)' }}>Donations</p>
            </div>
            <div>
              <h3 style={{ fontSize: '2rem', color: 'var(--accent)' }}>100+</h3>
              <p style={{ color: 'var(--text-light)' }}>Active NGOs</p>
            </div>
          </div>
        </div>
        <div className="hero-image">
          {/* Will use the generated image here */}
          <img src="/hero_welfare_image.png" alt="People helping people" style={{ width: '100%', objectFit: 'cover' }} />
        </div>
      </section>

      {/* Services/Modules Section */}
      <section className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>How We Help</h2>
          <p style={{ color: 'var(--text-light)', maxWidth: '600px', margin: '0 auto' }}>
            Our platform provides multiple avenues for you to contribute to society or seek help when you need it most.
          </p>
        </div>
        
        <div className="cards-grid">
          <div className="card glass-panel">
            <div className="card-icon" style={{ background: 'linear-gradient(135deg, #ef4444, #f97316)' }}>
              <Heart />
            </div>
            <h3 className="card-title">Donations</h3>
            <p style={{ color: 'var(--text-light)' }}>Support causes financially with our secure and transparent donation system. Track your impact.</p>
          </div>
          
          <div className="card glass-panel">
            <div className="card-icon" style={{ background: 'linear-gradient(135deg, #3b82f6, #06b6d4)' }}>
              <Users />
            </div>
            <h3 className="card-title">Volunteering</h3>
            <p style={{ color: 'var(--text-light)' }}>Join our network of volunteers. Find nearby requests and offer your skills to help others.</p>
          </div>
          
          <div className="card glass-panel">
            <div className="card-icon" style={{ background: 'linear-gradient(135deg, #8b5cf6, #d946ef)' }}>
              <Globe />
            </div>
            <h3 className="card-title">NGO Events</h3>
            <p style={{ color: 'var(--text-light)' }}>Discover and participate in awareness campaigns, community activities, and charity events.</p>
          </div>
          
          <div className="card glass-panel">
            <div className="card-icon" style={{ background: 'linear-gradient(135deg, #eab308, #f59e0b)' }}>
              <ShieldAlert />
            </div>
            <h3 className="card-title">Emergency Support</h3>
            <p style={{ color: 'var(--text-light)' }}>Immediate assistance system with priority tagging and real-time status updates for urgent needs.</p>
          </div>
        </div>
      </section>
      
      <footer className="footer glass-panel">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary)', marginBottom: '1rem' }}>
          <HeartHandshake size={32} />
          Helping Hands
        </div>
        <p style={{ color: 'var(--text-light)' }}>© 2026 Helping Hands - Social Welfare Management System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
