
# NOYACK Dashboard

An AI-powered personal wealth management dashboard built with **Next.js**, **React**, and **TypeScript**.

NOYACK helps users understand and improve their financial health through interactive dashboards, portfolio insights, retirement planning, emergency fund tracking, and an integrated AI Copilot.

---

## Live Demo

🔗 noyack-dashboard.vercel.app

---

## Screenshots

> <img width="2160" height="1500" alt="Overview" src="https://github.com/user-attachments/assets/75634a73-6076-4f88-864f-16498c2a3eeb" />

<img width="2160" height="1500" alt="Library" src="https://github.com/user-attachments/assets/aa0a4fcf-0544-4fed-978c-ab336c9c276a" />

<img width="2160" height="1500" alt="Tools" src="https://github.com/user-attachments/assets/72239b81-d5d4-45b8-8103-ba7bed863b16" />


---

# Features

- AI-powered financial Copilot interface
- Interactive wealth dashboard
- Net Worth tracking
- Cash Available overview
- Debt monitoring
- Emergency Fund tracker
- Retirement planning
- Recent activity feed
- Personalized financial insights
- Responsive interface
- Smooth UI animations

---

# Tech Stack

- Next.js (App Router)
- React
- TypeScript
- CSS
- Framer Motion
- Lucide React

---

# Project Architecture

The application follows a modular, component-driven architecture.

```
src
├── app
├── animations
├── assets
├── components
│   ├── copilot
│   ├── overview
│   ├── layout
│   ├── navigation
│   └── ...
├── styles
├── types
└── util
```

---

# Design Principles

- Component-based architecture
- Strong TypeScript typing
- Reusable UI components
- Parent-managed application state
- Unidirectional React data flow
- Scalable folder organization
- Responsive design

---

# AI Copilot

NOYACK includes a custom-built conversational interface designed to provide personalized financial guidance.

Current functionality includes:

- Interactive chat interface
- Conversation state management
- Modular chat architecture
- Extensible API-ready design

Architecture:

```
CopilotModal
│
├── messages (state)
│
├── Chat
│
└── ChatInput
```

The conversation is managed through a centralized parent component, keeping presentation and interaction responsibilities separated for maintainability and scalability.

---

# Installation

Clone the repository

```bash
git clone https://github.com/araicabenjamin/noyack-dashboard.git
```

Navigate into the project

```bash
cd noyack-dashboard
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

---

# Production Build

```bash
npm run build
```

---

# Future Roadmap

- OpenAI integration
- Authentication
- Database integration
- Portfolio management
- Investment recommendations
- Financial goal tracking
- Transaction history
- Dark mode

---

# Author

**Benjamin Araica**

UX Engineer • Product Designer • Front-End Developer

Portfolio  
https://benjaminux.com

LinkedIn  
https://linkedin.com/in/benjaminaraica

GitHub  
https://github.com/araicabenjamin
