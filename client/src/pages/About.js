import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1>About Momntum-AI</h1>
          <p className="hero-subtitle">
            Purposeful Innovation. Real Human Needs. Real Solutions.
          </p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-section">
            <h2>Our Story</h2>
            <p>
              At Momntum-AI, we deliver ethical AI solutions that address real-world challenges, 
              empowering both individuals and businesses. Our mission is simple: create innovative, 
              purpose-driven technologies that make life easier, more efficient, and sustainable.
            </p>
            <p>
              We specialize in solving known and hidden problems with AI-driven solutions that focus 
              on business empowerment and sustainability. Our commitment to ethical technology ensures 
              that we serve both people and businesses responsibly.
            </p>
          </div>

          <div className="about-section">
            <h2>What We Do</h2>
            <p>
              We develop AI-driven products that tackle real human needs, from business solutions to 
              personal empowerment. Our flagship product, EAiSER, revolutionizes infrastructure issue 
              reporting, helping businesses streamline operations and enhance productivity.
            </p>
          </div>

          <div className="about-section">
            <h2>Our Approach</h2>
            <div className="approach-grid">
              <div className="approach-card">
                <h3>Problem-Focused</h3>
                <p>We identify and solve real-world challenges that matter to businesses and individuals.</p>
              </div>
              <div className="approach-card">
                <h3>Ethical by Design</h3>
                <p>Every solution we build is grounded in ethical principles and responsible technology practices.</p>
              </div>
              <div className="approach-card">
                <h3>Impact-Driven</h3>
                <p>We measure success by the positive impact our solutions have on people's lives and businesses.</p>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>Our Core Values</h2>
            <div className="values-list">
              <div className="value-item">
                <h3>Purpose-Driven</h3>
                <p>We are committed to delivering meaningful solutions that benefit society and businesses alike.</p>
              </div>
              <div className="value-item">
                <h3>Sustainable Innovation</h3>
                <p>We prioritize solutions that promote long-term sustainability and growth.</p>
              </div>
              <div className="value-item">
                <h3>Empowerment</h3>
                <p>Our products empower individuals and businesses to thrive in a rapidly changing world.</p>
              </div>
            </div>
          </div>

          <div className="about-section mission-statement">
            <h2>Our Mission Statement</h2>
            <p className="mission-quote">
              "At Momntum-AI, we believe that technology should solve problems, not create them. 
              Join us in our mission to deliver impactful, ethical solutions that create a better, 
              smarter future for all."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

