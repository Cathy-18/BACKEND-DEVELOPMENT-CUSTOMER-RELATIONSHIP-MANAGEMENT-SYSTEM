📌 Customer Relationship Management (CRM) Backend System
📖 Project Overview

This project is a Backend Development Assignment for building a Customer Relationship Management (CRM) system.

The backend is designed to:

Manage CRM data efficiently

Enforce business logic

Provide RESTful APIs for development and testing

Ensure secure authentication using JWT

Maintain scalability and clear separation of concerns

🛠 Tech Stack

Node.js

Express.js

MongoDB

Mongoose

JWT (JSON Web Token)

bcrypt (Password Hashing)

Jest / Mocha (Testing Framework)

📂 Project Structure
crm-backend/
│
├── app/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── services/
│
├── config/
├── tests/
├── docs/
├── .env
├── package.json
└── server.js

This structure ensures:

Maintainability

Scalability

Clear separation of concerns

🔐 Functional Modules
1️⃣ User Authentication

Secure login

JWT token issuance

Password hashing

2️⃣ Customer Management

CRUD operations for customers:

Create customer

Read customers

Update customer

Delete customer

3️⃣ Case / Assignment Management

Create cases

Update cases

Track cases

🗄 Database Design
Collections
🧑 Users

id

username

password_hash

role

👥 Customers

id

name

contact_info

status

📁 Cases

id

customer_id

assigned_to

priority

status

created_at

MongoDB is used with proper schema design to ensure data integrity.

🔌 API Endpoints
Customer Routes

GET /customers – List all customers

Case Routes

POST /cases – Create a new case

PATCH /cases/:id – Update a case

Authentication

Login endpoint for secure JWT generation

All endpoints follow RESTful API principles.

⚙️ Environment Setup
1️⃣ Clone Repository
git clone https://github.com/Cathy-18/BACKEND-DEVELOPMENT-CUSTOMER-RELATIONSHIP-MANAGEMENT-SYSTEM.git
cd BACKEND-DEVELOPMENT-CUSTOMER-RELATIONSHIP-MANAGEMENT-SYSTEM
2️⃣ Install Dependencies
npm install
3️⃣ Configure Environment Variables

Create a .env file:

MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
4️⃣ Run the Server
npm start

Server will run on configured port.

🧪 Testing

Unit and integration tests are available inside the tests/ directory.

Run tests using:

npm test
🛡 Security Implementation

Password hashing using bcrypt

JWT-based authentication

Environment variables for sensitive credentials

Error handling middleware implemented