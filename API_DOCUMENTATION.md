# Helping Hands REST API Documentation

## Authentication Endpoints

### 1. Register a new user
*   **Endpoint**: `POST /api/auth/register`
*   **Description**: Register a new user (Donor, Volunteer, or User).
*   **Request Body**:
    ```json
    {
      "username": "john_doe",
      "password": "securepassword",
      "email": "john@example.com",
      "fullName": "John Doe",
      "role": "ROLE_USER"
    }
    ```
*   **Response (200 OK)**:
    ```json
    {
      "message": "User registered successfully!"
    }
    ```

### 2. Login User
*   **Endpoint**: `POST /api/auth/login`
*   **Description**: Authenticate user and return JWT token.
*   **Request Body**:
    ```json
    {
      "username": "john_doe",
      "password": "securepassword"
    }
    ```
*   **Response (200 OK)**:
    ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5c...",
      "username": "john_doe",
      "role": "ROLE_USER"
    }
    ```

## Help Requests

### 3. Create a Help Request
*   **Endpoint**: `POST /api/requests`
*   **Headers**: `Authorization: Bearer <token>`
*   **Request Body**:
    ```json
    {
      "title": "Need Medical Supplies",
      "description": "Require oxygen cylinders and medicines urgently.",
      "location": "New York, NY",
      "isEmergency": true
    }
    ```
*   **Response (201 Created)**: Returns the created request object.

### 4. Get All Requests
*   **Endpoint**: `GET /api/requests`
*   **Query Params**: `?status=PENDING&isEmergency=true`
*   **Response (200 OK)**: Array of request objects.

### 5. Accept Request (Volunteer)
*   **Endpoint**: `PUT /api/requests/{id}/accept`
*   **Headers**: `Authorization: Bearer <token>`
*   **Response (200 OK)**: Updates status to `ACCEPTED` and assigns the volunteer.

## Donations

### 6. Submit Donation
*   **Endpoint**: `POST /api/donations`
*   **Headers**: `Authorization: Bearer <token>`
*   **Request Body**:
    ```json
    {
      "amount": 50.00,
      "paymentMethod": "Credit Card",
      "transactionId": "TXN987654321"
    }
    ```
*   **Response (201 Created)**: Returns the successful donation record.

## NGO & Events

### 7. Create NGO Event
*   **Endpoint**: `POST /api/events`
*   **Headers**: `Authorization: Bearer <token>` (Must have `ROLE_NGO`)
*   **Request Body**:
    ```json
    {
      "title": "Community Food Drive",
      "description": "Distributing food to homeless shelters.",
      "eventDate": "2026-06-15T10:00:00Z",
      "location": "Central Park"
    }
    ```
