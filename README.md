# Helping Hands – Social Welfare Management System

A modern, professional, full-stack web application designed to connect people who need help with volunteers, NGOs, donors, and social workers.

## Tech Stack
*   **Frontend**: React.js (Vite), React Router, Axios, Lucide Icons, Pure CSS (Glassmorphism design)
*   **Backend**: Java (Spring Boot), Spring Security (JWT)
*   **Database**: MySQL

## Project Structure
*   `/frontend` - React application with a modern, responsive UI.
*   `/backend` - Spring Boot backend REST APIs.
*   `/database` - MySQL database schema (`schema.sql`).

## Quick Start

### 1. Database Setup
1.  Ensure you have MySQL installed and running.
2.  Execute the script located at `database/schema.sql` to create the `helping_hands_db` and all necessary tables.

### 2. Backend Setup
1.  Navigate to `backend` directory.
2.  Update the database credentials in `src/main/resources/application.properties` if needed.
3.  Run the Spring Boot application (using an IDE like IntelliJ, Eclipse, or Maven `mvn spring-boot:run`).

### 3. Frontend Setup
1.  Navigate to `frontend` directory.
2.  Run `npm install` to install all dependencies.
3.  Run `npm run dev` to start the Vite development server.
4.  Open the provided localhost URL in your browser.

## Features Currently Implemented in This Skeleton:
*   **Modern UI**: Glassmorphism, gradients, hover effects, fully responsive layout.
*   **Landing Page**: Beautiful hero section with statistics and module cards.
*   **Dashboard**: Placeholder user dashboard showing mock statistics for donations, requests, and volunteering.
*   **Database Schema**: Normalized tables for Users, Roles, Requests, Donations, Volunteers, Events, etc.
*   **Backend Skeleton**: Spring Boot with JPA, Security, and JWT dependencies configured.
