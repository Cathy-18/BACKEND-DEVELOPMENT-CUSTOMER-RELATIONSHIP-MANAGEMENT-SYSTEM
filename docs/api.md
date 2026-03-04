# CRM Backend API Documentation

## Authentication
- POST /api/auth/register - Register a new user
- POST /api/auth/login - Login and get JWT token

## Customers
- GET /api/customers - Get all customers (Protected)
- POST /api/customers - Create a new customer (Protected)
- GET /api/customers/:id - Get customer details (Protected)
- PUT /api/customers/:id - Update customer (Protected)
- DELETE /api/customers/:id - Delete customer (Protected)

## Cases
- GET /api/cases - Get all cases (Protected)
- POST /api/cases - Create a new case (Protected)
- GET /api/cases/:id - Get case details (Protected)
- PATCH /api/cases/:id - Update case status/priority (Protected)
