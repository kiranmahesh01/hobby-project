const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Chatbot responses - intelligent keyword matching
const getChatbotResponse = (message) => {
  const lowerMessage = message.toLowerCase();
  
  // Greetings
  if (lowerMessage.match(/\b(hi|hello|hey|greetings)\b/)) {
    return "Hello! Welcome to Momntum-AI. How can I help you today?";
  }
  
  // About company
  if (lowerMessage.match(/\b(about|who|what|company|mission)\b/)) {
    return "Momntum-AI delivers ethical AI solutions that address real-world challenges. We specialize in innovative, purpose-driven technologies that empower both individuals and businesses. Our mission is to create solutions that make life easier, more efficient, and sustainable.";
  }
  
  // EAiSER product
  if (lowerMessage.match(/\b(eaiser|product|flagship|infrastructure)\b/)) {
    return "EAiSER is our flagship product that revolutionizes infrastructure issue reporting. It helps businesses streamline operations and enhance productivity by making issue reporting more efficient and actionable.";
  }
  
  // Services
  if (lowerMessage.match(/\b(service|solution|offer|provide|what do you)\b/)) {
    return "We develop AI-driven products that tackle real human needs, from business solutions to personal empowerment. Our solutions focus on business empowerment, sustainability, and ethical technology.";
  }
  
  // Contact
  if (lowerMessage.match(/\b(contact|reach|email|phone|address|location)\b/)) {
    return "You can reach us through our contact form on the website. We'd love to hear from you and discuss how we can help with your AI needs!";
  }
  
  // Pricing
  if (lowerMessage.match(/\b(price|cost|pricing|fee|how much)\b/)) {
    return "Our pricing varies based on your specific needs. Please contact us through our contact form, and we'll provide a customized solution that fits your requirements.";
  }
  
  // Values
  if (lowerMessage.match(/\b(value|ethic|sustainable|purpose|empowerment)\b/)) {
    return "Our core values include being purpose-driven, prioritizing sustainable innovation, and empowering individuals and businesses. We believe technology should solve problems, not create them.";
  }
  
  // Help
  if (lowerMessage.match(/\b(help|support|assist|problem|issue)\b/)) {
    return "I'm here to help! You can ask me about our company, products, services, or values. What would you like to know?";
  }
  
  // Default response
  return "Thank you for your message! I'm here to help you learn more about Momntum-AI. You can ask me about our company, products, services, or how we can help your business. How can I assist you?";
};

// API Routes
app.post('/api/chat', (req, res) => {
  try {
    const { message } = req.body;
    
    if (!message || message.trim() === '') {
      return res.status(400).json({ error: 'Message is required' });
    }
    
    const response = getChatbotResponse(message);
    
    // Simulate slight delay for realism
    setTimeout(() => {
      res.json({ response });
    }, 500);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    
    // In production, you would send an email or save to database
    console.log('Contact form submission:', { name, email, message });
    
    res.json({ 
      success: true, 
      message: 'Thank you for contacting us! We will get back to you soon.' 
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Momntum-AI API is running' });
});

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

