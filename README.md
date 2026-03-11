# AtDrive

AtDrive Coding Assessment

# Full Stack Assessment – MERN Application

This repository contains a **full stack web application** developed as part of a coding assessment.  
The application demonstrates CRUD operations, multi-database integration, RESTful API design, and third-party API integration.

The project follows **standard coding practices, separation of concerns, and modular architecture** to ensure maintainability and scalability.

---

## Application Overview

Shown below is the frontend dashboard of the application, which displays weather data fetched from the Open-Meteo API.

<img width="1344" height="991" alt="Screenshot 2026-03-11 at 23-56-19 frontend" src="https://github.com/user-attachments/assets/ac160ba6-1209-4a0f-82b1-fb11bd08dc86" />

## Tech Stack

### Frontend

- React.js
- Axios
- React Router

### Backend

- Node.js
- Express.js

### Databases

- MongoDB – used for Product and Order data
- MySQL – used for User authentication

### Other Libraries

- bcrypt – password hashing
- mongoose – MongoDB ODM
- mysql2 – MySQL client
- axios – API requests

---

The project is structured using **Separation of Concerns**:

- **Controllers** handle business logic
- **Routes** define API endpoints
- **Models** manage database schema
- **Frontend services** handle API communication

---

# Features

### Product Management

- Create product
- Retrieve products
- Update product
- Delete product

Products are stored in **MongoDB**.

---

### User Authentication

- User Registration
- User Login
- Secure password storage using **bcrypt**

User data is stored in **MySQL**.

---

### Order Management

- Create Order
- Get Order by ID
- Update Order
- Delete Order

Orders are stored in **MongoDB**.

---

### Third Party API Integration

A Open-Meteo open-source weather API - public API is integrated to fetch external data and display it on the dashboard / Home.

# Setup Instructions

## Frontend Setup

```bash
cd frontend
npm install
npm start
```

### Application will run on:

http://localhost:5173/

## Backend Setup

```bash
cd backend
npm install
npm start
```

### Application will run on:

http://localhost:8000/

## MySQL Setup

Create database:

```sql
CREATE DATABASE assessment;
```

Create users table:

```sql
CREATE TABLE users (
id INT AUTO_INCREMENT PRIMARY KEY,
username VARCHAR(255),
password VARCHAR(255)
)
```

# API Documentation

## Product APIs

POST `/api/products` Create a product

GET `/api/products ` Get all products

GET `/api/products/:id` Get product by ID

PUT `/api/products/:id` Update product

DELETE `/api/products/:id` Delete product

### User APIs

POST `/api/users/register` Register user

POST `/api/users/login` Login user

### Order APIs

POST `/api/orders` Create order

GET `/api/orders/:id` Get order by ID

PUT `/api/orders/:id` Update order

DELETE `/api/orders/:id` Delete order
