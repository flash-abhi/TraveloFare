import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Building2,
  Phone,
  ArrowRight,
  Clock,
  Sparkles,
  CheckCircle,
  Globe,
} from "lucide-react";
import { useContact } from "../context/ContactContext";
import "./Hotels.css";

function Hotels() {
  const navigate = useNavigate();
  const { contactSettings } = useContact();

  return (
    <div className="hotels-call-booking">
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
        <div className="hero-flights">
          <div className="flight-plane flight-plane-1">✈️</div>
          <div className="flight-plane flight-plane-2">✈️</div>
          <div className="flight-plane flight-plane-3">✈️</div>
          <div className="flight-plane flight-plane-4">✈️</div>
          <div className="flight-plane flight-plane-5">✈️</div>
        </div>
      </div>

      {/* Content */}
      <div className="coming-soon-container">
        {/* Header Badge */}
        <div className="coming-soon-badge slide-in-down">
          <Sparkles size={16} />
          <span>Hotels Booking Service</span>
        </div>

        {/* Main Title */}
        <h1 className="coming-soon-title slide-in-up">
          Find Your Perfect <span className="highlight">Hotel Stay</span>
        </h1>

        {/* Subtitle */}
        <p
          className="coming-soon-subtitle slide-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          We offer exclusive hotel deals and personalized booking assistance.
          Call our team today to find the best accommodation for your next trip.
        </p>

        {/* Call Us Section */}
        <div
          className="call-section"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="call-card">
            <div className="call-card-content">
              <h3>Ready to Book Your Hotel?</h3>
              <p>
                Our travel experts are here to help you find the perfect stay
              </p>

              <a
                href={`tel:${contactSettings?.tfn?.replace(/[^0-9+]/g, "")}`}
                className="call-us-btn"
              >
                <Phone size={20} />
                <div>
                  <span className="call-label">Call Us Now</span>
                  <span className="call-number">{contactSettings?.tfn}</span>
                </div>
              </a>

              <div className="call-benefits">
                <div className="benefit">
                  <CheckCircle size={16} />
                  <span>Expert Travel Consultants</span>
                </div>
                <div className="benefit">
                  <CheckCircle size={16} />
                  <span>Exclusive Hotel Deals</span>
                </div>
                <div className="benefit">
                  <CheckCircle size={16} />
                  <span>24/7 Customer Support</span>
                </div>
              </div>
            </div>
          </div>

          
        </div>

        {/* CTA */}
        <div
          className="coming-soon-cta slide-in-up"
          style={{ animationDelay: "0.8s" }}
        >
          <p>Or explore our flight deals while you're here</p>
          <button
            className="explore-flights-btn"
            onClick={() => navigate("/flights")}
          >
            Explore Flights <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Footer Message */}
      <div
        className="coming-soon-footer fade-in"
        style={{ animationDelay: "1.2s" }}
      >
        <p>Making travel planning simple and hassle-free.</p>
      </div>
    </div>
  );
}

export default Hotels;
