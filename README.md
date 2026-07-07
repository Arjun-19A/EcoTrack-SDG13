# 🌱 EcoTrack - Carbon Footprint Monitoring Platform

## 📌 Project Overview

**EcoTrack** is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) web application developed to support **United Nations Sustainable Development Goal 13: Climate Action**.

The platform helps users understand their environmental impact by calculating and tracking their personal carbon footprint based on daily activities such as transportation, electricity consumption, and waste generation.

EcoTrack encourages sustainable habits by providing users with insights into their emissions and helping them take steps toward reducing their carbon footprint.

---

# 🌍 Sustainable Development Goal

## SDG 13 - Climate Action

### Goal:
Take urgent action to combat climate change and its impacts.

### Problem Addressed:

Many individuals contribute to carbon emissions through everyday activities but lack awareness about their environmental impact. Without proper tracking and understanding, people find it difficult to adopt sustainable lifestyles.

EcoTrack provides a simple digital platform where users can measure, monitor, and improve their environmental behavior.

---

# ✨ Features

## 🔐 User Authentication

- Secure user registration and login system.
- JWT-based authentication.
- Protected routes for authorized users.

---

## 🌍 Carbon Footprint Calculator

Users can calculate their approximate carbon emissions based on:

- Transportation usage
- Electricity consumption
- Waste generation

The system calculates the estimated carbon footprint and stores the results.

---

## 📊 Dashboard Analytics

The dashboard provides:

- User activity summary
- Carbon emission overview
- Sustainability progress tracking
- Environmental insights

---

## 📈 Carbon History Tracking

Users can view their previous calculations and monitor changes in their carbon footprint over time.

---

## 🏆 Achievements System

Users can unlock sustainability achievements based on their environmental progress.

Examples:

- Eco Starter
- Tree Saver
- Green Champion

---

## ⚙️ User Settings

Users can manage:

- Notification preferences
- Sustainability tracking preferences

---

# 🛠️ Technology Stack

## Frontend

| Technology | Purpose |
|---|---|
| React.js | User Interface |
| React Router | Navigation |
| Axios | API Communication |
| CSS3 | Styling |
| Framer Motion | Animations |
| React Icons | UI Icons |
| Chart.js | Data Visualization |

---

## Backend

| Technology | Purpose |
|---|---|
| Node.js | Runtime Environment |
| Express.js | Backend Framework |
| JWT | Authentication |
| Bcrypt | Password Encryption |
| Mongoose | MongoDB Object Modeling |

---

## Database

| Technology | Purpose |
|---|---|
| MongoDB Atlas | Cloud Database |

Collections:

```
ecotrack

├── users
│
└── activities
```

---

# 📂 Project Structure

```
EcoTrack-SDG13

│
├── client
│   │
│   ├── public
│   │
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── styles
│   │   ├── context
│   │   └── services
│   │
│   └── package.json
│
├── server
│   │
│   ├── config
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
├── README.md
└── .gitignore
```

---

# 🚀 Installation & Setup

## 1. Clone Repository

```bash
git clone https://github.com/Arjun-19A/EcoTrack-SDG13.git
```

Move into project:

```bash
cd EcoTrack-SDG13
```

---

# Frontend Setup

Navigate to client:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Start React application:

```bash
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# Backend Setup

Open another terminal.

Navigate to server:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Create `.env` file:

```env
PORT=5000

MONGO_URI=your_mongodb_atlas_connection_string

JWT_SECRET=your_secret_key
```

Start server:

```bash
npm run dev
```

Backend runs on:

```
http://localhost:5000
```

---

# 🔑 Environment Variables

The backend requires:

| Variable | Description |
|-|-|
| PORT | Backend server port |
| MONGO_URI | MongoDB Atlas connection string |
| JWT_SECRET | Secret key for authentication |

---

# 🔮 Future Scope

Future improvements:

- AI-based sustainability recommendations
- Real-time carbon tracking using IoT devices
- Integration with smart home systems
- Community challenges and leaderboards
- Advanced environmental analytics

---

# 🎯 Project Impact

EcoTrack helps individuals understand their contribution to climate change and motivates them to adopt environmentally responsible habits.

By promoting awareness and sustainable decision-making, the project supports the objectives of **SDG 13 - Climate Action**.

---

# 📄 License

This project is developed for educational and internship purposes.
