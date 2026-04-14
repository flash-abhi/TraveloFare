import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Building2, 
  Mail, 
  ArrowRight, 
  Bell,
  Sparkles,
  Lock,
  Zap,
  CheckCircle
} from 'lucide-react';
import './Hotels.css';

function Hotels() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleNotify = (e) => {
    e.preventDefault();
    if (!email) {
      alert('Please enter your email address');
      return;
    }
    
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setSubscribed(true);
      setEmail('');
      setLoading(false);
      setTimeout(() => setSubscribed(false), 3000);
    }, 1000);
  };

  return (
    <div className="hotels-coming-soon">
      {/* Background Elements */}
      <div className="coming-soon-bg">
        <div className="bg-gradient"></div>
        <div className="animated-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
        <div className="floating-icons">
          {[...Array(12)].map((_, i) => (
            <div key={i} className={`float-icon float-icon-${i + 1}`}>
              <Building2 size={32} />
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="coming-soon-container">
        {/* Header Badge */}
        <div className="coming-soon-badge slide-in-down">
          <Sparkles size={16} />
          <span>Exciting New Feature</span>
        </div>

        {/* Main Title */}
        <h1 className="coming-soon-title slide-in-up">
          Hotels Coming <span className="highlight">Soon</span>
        </h1>

        {/* Subtitle */}
        <p className="coming-soon-subtitle slide-in-up" style={{ animationDelay: '0.2s' }}>
          We're building the most comprehensive hotel booking experience for you.
          Book stays at luxury resorts, budget-friendly hotels, and everything in between.
        </p>

       
        {/* Email Notification Form */}
        <form className="notify-form slide-in-up" style={{ animationDelay: '0.6s' }} onSubmit={handleNotify}>
          <div className="input-wrapper">
            <Mail size={20} className="input-icon" />
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              className="notify-input"
            />
          </div>
          <button type="submit" className="notify-btn" disabled={loading}>
            {loading ? (
              <>
                <span className="loader"></span>
                Subscribing...
              </>
            ) : subscribed ? (
              <>
                <CheckCircle size={18} />
                Subscribed!
              </>
            ) : (
              <>
                <Bell size={18} />
                Notify Me
              </>
            )}
          </button>
        </form>

        {/* Subscription Success Message */}
        {subscribed && (
          <div className="success-message pop-in">
            <CheckCircle size={20} />
            <span>We'll notify you when hotels are live!</span>
          </div>
        )}

        {/* CTA */}
        <div className="coming-soon-cta slide-in-up" style={{ animationDelay: '0.8s' }}>
          <p>Meanwhile, explore our amazing flight deals</p>
          <button 
            className="explore-flights-btn"
            onClick={() => navigate('/flights')}
          >
            Explore Flights <ArrowRight size={18} />
          </button>
        </div>

        {/* Countdown Timer */}
        <div className="coming-soon-timer slide-in-up" style={{ animationDelay: '1s' }}>
          <div className="timer-label">Coming in</div>
          <div className="timer-boxes">
            <div className="timer-box pulse">
              <span className="timer-value">2</span>
              <span className="timer-label-small">Months</span>
            </div>
            <div className="timer-divider">:</div>
            <div className="timer-box pulse">
              <span className="timer-value">45</span>
              <span className="timer-label-small">Days</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Message */}
      <div className="coming-soon-footer fade-in" style={{ animationDelay: '1.2s' }}>
        <p>Building the future of travel, one booking at a time.</p>
      </div>
    </div>
  );
}

export default Hotels;
