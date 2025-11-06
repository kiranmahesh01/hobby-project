# Momntum-AI Website

A modern, full-stack website for Momntum-AI featuring a beautiful frontend, robust backend API, and an intelligent customer chatbot.

## 🚀 Features

- **Modern React Frontend**: Beautiful, responsive UI with smooth animations
- **Express Backend API**: RESTful API for chatbot and contact form
- **Intelligent Chatbot**: AI-powered customer support chatbot with keyword matching
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Contact Form**: Functional contact form with backend integration

## 📁 Project Structure

```
hobby-project/
├── client/                 # React frontend application
│   ├── public/
│   ├── src/
│   │   ├── components/    # Reusable components (Navbar, Footer, Chatbot)
│   │   ├── pages/         # Page components (Home, About, Services, Contact)
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── server/                # Express backend API
│   ├── index.js          # Main server file
│   └── package.json
├── package.json          # Root package.json for running both
└── README.md
```

## 🛠️ Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Setup Steps

1. **Install all dependencies:**
   ```bash
   npm run install-all
   ```

   Or install manually:
   ```bash
   npm install
   cd server && npm install
   cd ../client && npm install
   ```

2. **Create environment file (optional):**
   ```bash
   cd server
   cp .env.example .env
   ```
   Edit `.env` if needed (default port is 5000)

3. **Start the development servers:**
   ```bash
   npm run dev
   ```

   This will start:
   - Backend server on `http://localhost:5000`
   - Frontend React app on `http://localhost:3000`

## 📝 Available Scripts

### Root Level
- `npm run dev` - Start both frontend and backend in development mode
- `npm run install-all` - Install dependencies for all projects
- `npm run build` - Build the React app for production

### Server (Backend)
- `cd server && npm start` - Start production server
- `cd server && npm run dev` - Start development server with nodemon

### Client (Frontend)
- `cd client && npm start` - Start React development server
- `cd client && npm run build` - Build for production

## 🎯 Usage

1. **Access the website**: Open `http://localhost:3000` in your browser
2. **Use the chatbot**: Click the chat icon in the bottom right corner
3. **Contact form**: Fill out the contact form on the Contact page
4. **Navigation**: Use the navbar to explore different pages

## 🤖 Chatbot Features

The chatbot can respond to queries about:
- Company information and mission
- Products and services (especially EAiSER)
- Contact information
- Pricing inquiries
- Company values and ethics
- General help and support

## 🎨 Pages

- **Home**: Hero section, mission, features, and call-to-action
- **About**: Company story, values, and mission statement
- **Services**: Detailed service offerings and EAiSER product information
- **Contact**: Contact form and company information

## 🔧 Technology Stack

### Frontend
- React 18
- React Router DOM
- Axios
- CSS3 (Custom styling)

### Backend
- Node.js
- Express.js
- CORS
- Axios

## 📦 Production Build

To build for production:

```bash
# Build the React app
cd client && npm run build

# The build folder will be created in client/build
# The server is configured to serve these files in production mode
```

## 🌐 Deployment

1. Build the React app: `cd client && npm run build`
2. Set `NODE_ENV=production` in your server `.env` file
3. Start the server: `cd server && npm start`
4. The server will serve the built React app on the configured port

## 📄 License

MIT License - see LICENSE file for details

## 🤝 Contributing

This is a project for Momntum-AI. For questions or support, please use the contact form on the website.

---

**Momntum-AI** - Purposeful Innovation. Real Human Needs. Real Solutions.
