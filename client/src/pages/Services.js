import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container">
          <h1>Our Services & Solutions</h1>
          <p className="hero-subtitle">
            AI-driven solutions that empower businesses and individuals
          </p>
        </div>
      </section>

      <section className="services-content">
        <div className="container">
          {/* EAiSER Product */}
          <div className="service-featured">
            <div className="service-featured-content">
              <div className="service-badge">Flagship Product</div>
              <h2>EAiSER</h2>
              <h3>Infrastructure Issue Reporting Revolutionized</h3>
              <p>
                EAiSER is our flagship product that revolutionizes infrastructure issue reporting. 
                It helps businesses streamline operations and enhance productivity by making issue 
                reporting more efficient, actionable, and intelligent.
              </p>
              <div className="service-features">
                <div className="service-feature-item">
                  <span className="feature-icon">⚡</span>
                  <div>
                    <h4>Streamlined Operations</h4>
                    <p>Reduce reporting time and improve efficiency</p>
                  </div>
                </div>
                <div className="service-feature-item">
                  <span className="feature-icon">🤖</span>
                  <div>
                    <h4>AI-Powered Intelligence</h4>
                    <p>Smart issue detection and resolution recommendations</p>
                  </div>
                </div>
                <div className="service-feature-item">
                  <span className="feature-icon">📊</span>
                  <div>
                    <h4>Enhanced Productivity</h4>
                    <p>Real-time insights and analytics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Services */}
          <div className="services-grid">
            <h2 className="section-title">What We Offer</h2>
            <div className="services-list">
              <div className="service-card">
                <div className="service-icon">💼</div>
                <h3>Business Solutions</h3>
                <p>
                  AI-driven products designed to solve real business challenges, from operations 
                  to customer engagement. We help businesses streamline processes and enhance productivity.
                </p>
              </div>
              <div className="service-card">
                <div className="service-icon">👤</div>
                <h3>Personal Empowerment</h3>
                <p>
                  Technology solutions that empower individuals to achieve more, work smarter, 
                  and make better decisions in their personal and professional lives.
                </p>
              </div>
              <div className="service-card">
                <div className="service-icon">🌱</div>
                <h3>Sustainability Solutions</h3>
                <p>
                  AI solutions focused on promoting long-term sustainability and growth, helping 
                  businesses operate more efficiently while reducing environmental impact.
                </p>
              </div>
              <div className="service-card">
                <div className="service-icon">🔧</div>
                <h3>Custom AI Development</h3>
                <p>
                  Tailored AI solutions designed to meet your specific needs. We work with you 
                  to understand your challenges and develop custom solutions.
                </p>
              </div>
              <div className="service-card">
                <div className="service-icon">🛡️</div>
                <h3>Ethical AI Consulting</h3>
                <p>
                  Guidance on implementing ethical AI practices in your organization, ensuring 
                  your technology serves both people and business responsibly.
                </p>
              </div>
              <div className="service-card">
                <div className="service-icon">📈</div>
                <h3>Business Intelligence</h3>
                <p>
                  Transform your data into actionable insights with AI-powered analytics and 
                  reporting solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Why Our Services */}
          <div className="why-services">
            <h2 className="section-title">Why Choose Our Services?</h2>
            <div className="why-grid">
              <div className="why-item">
                <h3>Innovative Solutions</h3>
                <p>We develop AI-driven products that tackle real human needs, from business solutions to personal empowerment.</p>
              </div>
              <div className="why-item">
                <h3>Ethical Technology</h3>
                <p>Our solutions are built with a strong ethical foundation, ensuring we serve both people and businesses responsibly.</p>
              </div>
              <div className="why-item">
                <h3>Real Impact</h3>
                <p>We aim to solve the world's most pressing issues with technologies that improve lives and drive business success.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="services-cta">
            <h2>Ready to Transform Your Business?</h2>
            <p>Let's discuss how our solutions can help you achieve your goals.</p>
            <Link to="/contact" className="btn btn-primary btn-large">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

