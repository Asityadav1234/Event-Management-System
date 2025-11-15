# Event Management System — Software Engineering Principles

A documentation for the Event Management System built using standard Software Engineering (SE) principles.

---

## Overview

A web-based system to create and manage events, registrations, and user roles (Admin / Organizer / User). The project demonstrates clear SE practices including modular design, requirement analysis, layered architecture, and testing methodology.

---

## Table of Contents

* [Features](#features)
* [SE Principles Applied](#se-principles-applied)
* [System Architecture](#system-architecture)
* [Tech Stack](#tech-stack)
* [Database Schema](#database-schema)
* [Getting Started](#getting-started)
* [Project Structure](#project-structure)
* [API Endpoints](#api-endpoints)
* [Testing Strategy](#testing-strategy)
* [Future Enhancements](#future-enhancements)
* [Contributors](#contributors)

---

## Features

* User authentication (JWT)
* Role-based access: Admin / Organizer / User
* Create, update, delete, and view events
* Register users for events
* Admin panel for managing events and registrations
* Input validation and secure password handling

---

## SE Principles Applied

### Requirement Analysis

* Functional and non-functional requirements documented
* Use cases and workflow diagrams

### Design Principles

* Single Responsibility Principle (SRP)
* DRY (reuse of services and helpers)
* Layered architecture: Controller → Service → Database
* Database normalization up to 3NF

### Process Model

* Iterative model with regular testing and refinement

---

## System Architecture

```
Frontend (React / HTML-CSS-JS)
        ↓
Backend (Node.js / Express)
        ↓
Database (PostgreSQL / MySQL)
```

* Presentation Layer
* Application Layer
* Database Layer

---

## Tech Stack

**Frontend:** React / HTML / CSS / JavaScript
**Backend:** Node.js + Express
**Database:** PostgreSQL or MySQL
**Tools:** GitHub, VS Code, Postman

---

## Database Schema

### Users

* id, name, email, password_hash, role, created_at

### Events

* id, title, description, start_time, end_time, location, organizer_id

### Registrations

* id, user_id, event_id, status, registered_at

**Relations:**

* Users (1→N) Events
* Users (N→N) Events via Registrations

---

## Getting Started

### 1. Clone Repository

```bash
git clone https://github.com/<your-username>/<repo-name>
cd repo-name
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Configure Environment Variables

Create a `.env` file:

```
PORT=5000
DB_HOST=localhost
DB_USER=youruser
DB_PASS=yourpass
DB_NAME=eventdb
JWT_SECRET=your_secret
```

### 4. Start Server

```bash
npm start
```

### 5. (Optional) Start Frontend

```bash
cd ../frontend
npm install
npm start
```

---

## Project Structure

```
/backend
  /controllers
  /services
  /routes
  /middleware
  /models
  app.js
/frontend
  /src
    /components
    /pages
README.md
```

---

## API Endpoints

### Authentication

* POST /auth/signup — Register a new user
* POST /auth/login — Login and receive JWT

### Events

* GET /events — List all events
* POST /events — Create event
* PUT /events/:id — Update event
* DELETE /events/:id — Delete event

### Registrations

* POST /registrations — Register for an event
* GET /users/:id/registrations — View user registrations

---

## Testing Strategy

* Unit tests for services and utility functions
* Integration tests for API routes
* Manual UI testing using Postman or browser

---

## Future Enhancements

* Payment integration
* QR-based event check-in
* Email/SMS notifications
* Analytics dashboard for admins
* Mobile app version

---

## Contributors

**Asit Yadav (2023UCP1588)**  
**Jatin Bhatia (2023UCP1963)**  
**Prahlad Kumar Prajapat (2023UCP1580)**

---
