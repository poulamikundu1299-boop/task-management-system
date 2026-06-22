# Full-Stack Task Management System

### 📌 Project Status: Final Testing & Optimization Phase
> **Note:** The core backend and frontend architectures are built and functional. I am currently running final payload validations, route testing, and UI optimization checks before full deployment.

---

## 🚀 Project Overview
I am developing a secure, full-stack task management web application using the MERN stack. The platform allows users to create accounts, log in securely, and manage their daily schedules through a clean, responsive dashboard. My main focus is ensuring tight user data privacy and optimizing database routes for smooth, reliable task tracking.

## 🛠️ Tech Stack I'm Using
* **Frontend:** React.js for the dynamic user interface and state management.
* **Styling:** Tailwind CSS for fluid, mobile-friendly layouts.
* **Backend:** Node.js and Express.js for the server framework and API routing.
* **Database:** MongoDB with Mongoose ODM to manage task and user data.
* **Security:** JSON Web Tokens (JWT) for stateless user authentication and route protection.
* **Testing:** Thunder Client for API endpoint stress-testing and payload validation.

---

## 📐 Key Engineering Features Implemented

### 1. User Authentication & Data Privacy
* Implemented stateless **JWT authentication** to securely manage user login sessions.
* Setup client-side **Protected Routes** in React to prevent unauthorized endpoint access and protect dashboard visibility.

### 2. Multi-State CRUD Workflows
* Engineered complete CRUD (Create, Read, Update, Delete) routes to allow seamless creation, editing, and wiping of tasks.
* Stress-tested the backend Express routes via **Thunder Client** to validate schema inputs and consistently maintain clean `HTTP 200 OK` verifications.

### 3. Responsive State Management
* Utilized React component state-management to handle real-time, dynamic task changes instantly.
* Coupled updates with a utility-first Tailwind layout to guarantee visual stability across mobile, tablet, and desktop viewports.

---

## 🗺️ Current Checklist & Roadmap
- [x] Design core database schemas and set up MongoDB connections.
- [x] Build backend Express REST endpoints for user authentication and tasks.
- [x] Connect the React frontend with backend API controllers.
- [ ] Complete final Thunder Client edge-case payload testing (Current Phase 🎯)
- [ ] Optimize minor responsive layout behaviors on small viewports.
