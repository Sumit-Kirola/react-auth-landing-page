React Authentication System (Landing Page)

This project is a basic authentication system built using React for the frontend and Node.js with Express for the backend.
It includes User Registration and User Login functionality with secure password storage.

---

Tech Stack

Frontend:

- React
- Tailwind CSS
- Axios / Fetch API

Backend:

- Node.js
- Express.js

Database:
 MySQL

---

Features

- User Registration
- User Login
- Password Hashing for secure storage
- API integration between frontend and backend
- Simple and clean UI
- Responsive layout using Tailwind CSS

---

API Endpoints

Register User

POST /api/register

Request Body:

- name
- email
- password

Login User

POST /api/login

Request Body:

- email
- password

On successful login, the server returns a success message (token optional).

---

Project Structure

react-auth-landing-page
│
├── frontend
│   ├── src
│   ├── components
│   ├── pages
│   └── App.jsx
│
├── backend
│   ├── routes
│   ├── controllers
│   └── server.js
│
└── README.md

---

Installation and Setup

1️⃣ Clone the repository

git clone https://github.com/Sumit-Kirola/react-auth-landing-page.git

---

2️⃣ Run Backend

cd backend
npm install
node server.js

Backend will run on:

http://localhost:5000

---

3️⃣ Run Frontend

cd frontend
npm install
npm run dev

Frontend will run on:

http://localhost:5173




Author

Developed as part of internship assignment.
