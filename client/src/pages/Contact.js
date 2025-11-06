import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
      const response = await axios.post(`${apiUrl}/api/contact`, formData);
      setStatus({ type: 'success', message: response.data.message });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: error.response?.data?.error || 'Something went wrong. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1>Get in Touch</h1>
          <p className="hero-subtitle">
            We'd love to hear from you. Let's discuss how we can help.
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info">
              <h2>Contact Information</h2>
              <p className="contact-description">
                At Momntum-AI, we're committed to delivering impactful, ethical solutions. 
                Whether you have a question about our services, want to learn more about EAiSER, 
                or are interested in partnering with us, we're here to help.
              </p>

              <div className="contact-details">
                <div className="contact-detail-item">
                  <div className="detail-icon">💬</div>
                  <div>
                    <h3>Chat with Us</h3>
                    <p>Use our chatbot in the bottom right corner for instant assistance</p>
                  </div>
                </div>
                <div className="contact-detail-item">
                  <div className="detail-icon">📧</div>
                  <div>
                    <h3>Email Us</h3>
                    <p>Fill out the form and we'll get back to you within 24 hours</p>
                  </div>
                </div>
                <div className="contact-detail-item">
                  <div className="detail-icon">🤝</div>
                  <div>
                    <h3>Partner with Us</h3>
                    <p>Interested in collaboration? Let's discuss opportunities</p>
                  </div>
                </div>
              </div>

              <div className="contact-values">
                <h3>Our Commitment</h3>
                <ul>
                  <li>✓ Purpose-Driven Solutions</li>
                  <li>✓ Ethical Technology</li>
                  <li>✓ Real Impact</li>
                  <li>✓ Sustainable Innovation</li>
                </ul>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Send us a Message</h2>
                
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                {status.message && (
                  <div className={`form-status ${status.type}`}>
                    {status.message}
                  </div>
                )}

                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

