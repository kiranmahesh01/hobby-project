import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Purposeful Innovation.<br />
              <span className="hero-accent">Real Human Needs.</span><br />
              Real Solutions.
            </h1>
            <p className="hero-subtitle">
              At Momntum-AI, we deliver ethical AI solutions that address real-world challenges, 
              empowering both individuals and businesses to thrive in a rapidly changing world.
            </p>
            <div className="hero-buttons">
              <Link to="/services" className="btn btn-primary">Explore Solutions</Link>
              <Link to="/contact" className="btn btn-secondary">Get in Touch</Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card">
              <div className="card-icon">🤖</div>
              <h3>AI-Powered</h3>
              <p>Innovative solutions</p>
            </div>
            <div className="hero-card">
              <div className="card-icon">🌱</div>
              <h3>Sustainable</h3>
              <p>Long-term growth</p>
            </div>
            <div className="hero-card">
              <div className="card-icon">⚡</div>
              <h3>Efficient</h3>
              <p>Streamlined operations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission">
        <div className="container">
          <h2 className="section-title">Our Mission</h2>
          <p className="mission-text">
            We are committed to creating innovative, purpose-driven technologies that make life easier, 
            more efficient, and sustainable. Our mission is simple: solve the world's most pressing issues 
            with technologies that improve lives and drive business success.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose">
        <div className="container">
          <h2 className="section-title">Why Choose Momntum-AI?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">💡</div>
              <h3>Innovative Solutions</h3>
              <p>We develop AI-driven products that tackle real human needs, from business solutions to personal empowerment.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Ethical Technology</h3>
              <p>Our solutions are built with a strong ethical foundation, ensuring we serve both people and businesses responsibly.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Real Impact</h3>
              <p>We aim to solve the world's most pressing issues with technologies that improve lives and drive business success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* EAiSER Product Section */}
      <section className="product">
        <div className="container">
          <div className="product-content">
            <div className="product-text">
              <h2 className="section-title">EAiSER: Our Flagship Product</h2>
              <p className="product-description">
                EAiSER revolutionizes infrastructure issue reporting, helping businesses streamline operations 
                and enhance productivity. Our AI-powered platform makes reporting and resolving issues faster, 
                smarter, and more efficient.
              </p>
              <Link to="/services" className="btn btn-primary">Learn More</Link>
            </div>
            <div className="product-visual">
              <div className="product-card">
                <h4>Streamlined Operations</h4>
                <p>Reduce reporting time by up to 70%</p>
              </div>
              <div className="product-card">
                <h4>Enhanced Productivity</h4>
                <p>AI-powered issue resolution</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Purpose-Driven</h3>
              <p>We are committed to delivering meaningful solutions that benefit society and businesses alike.</p>
            </div>
            <div className="value-card">
              <h3>Sustainable Innovation</h3>
              <p>We prioritize solutions that promote long-term sustainability and growth.</p>
            </div>
            <div className="value-card">
              <h3>Empowerment</h3>
              <p>Our products empower individuals and businesses to thrive in a rapidly changing world.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Ready to Transform Your Business?</h2>
          <p>Join us in our mission to deliver impactful, ethical solutions that create a better, smarter future for all.</p>
          <Link to="/contact" className="btn btn-primary btn-large">Get Started Today</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

