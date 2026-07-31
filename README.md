# 🤝 Helping Hands – Social Welfare Management System

> A modern, full-stack social welfare management platform that connects people in need with volunteers, NGOs, donors, and social workers to make community support more accessible, organized, and impactful.

## 📌 Overview

**Helping Hands – Social Welfare Management System** is a full-stack web application designed to create a centralized platform for managing and coordinating social welfare activities.

The platform aims to bridge the gap between **people seeking help** and **individuals or organizations willing to provide support**. Users can connect with volunteers, NGOs, donors, and social workers to address various social needs and contribute to community welfare.

The application follows a modern **glassmorphism-based UI design** and uses a scalable backend architecture with **Spring Boot, Spring Security, JWT authentication, and MySQL**.

---
## 🎯 Objectives

* Connect people in need with individuals and organizations willing to help.
* Provide a centralized platform for managing social welfare requests.
* Enable volunteers to discover and participate in social activities.
* Help NGOs coordinate welfare programs and community initiatives.
* Allow donors to contribute to social causes.
* Maintain organized records of requests, donations, volunteers, and events.
* Improve transparency and accessibility in social welfare management.
* Provide a modern, responsive, and user-friendly experience.

---

## ✨ Key Features

### 🏠 Modern Landing Page

* Professional and responsive user interface.
* Glassmorphism-inspired design.
* Gradient-based visual elements.
* Interactive hover effects.
* Hero section highlighting the purpose of the platform.
* Social welfare statistics.
* Quick access to important platform modules.

### 📊 User Dashboard

The dashboard provides users with an overview of their social welfare activities.

Dashboard sections can include:

* Donation statistics.
* Help request statistics.
* Volunteer activity.
* Upcoming events.
* Recent activities.
* Community impact overview.

> The current version includes placeholder/mock dashboard statistics as part of the project skeleton.

### 🆘 Help Request Management

The platform is designed to help individuals submit and manage requests for support.

Potential request categories include:

* Medical assistance.
* Education support.
* Food assistance.
* Financial support.
* Emergency help.
* Other community welfare needs.

### 🙋 Volunteer Management

Volunteers can participate in social welfare activities and support people in need.

The system is designed to support:

* Volunteer registration.
* Volunteer profiles.
* Volunteer activity tracking.
* Participation in welfare events.
* Connecting volunteers with suitable requests.

### 🏢 NGO Management

NGOs can use the platform to coordinate and manage welfare initiatives.

Possible functionalities include:

* NGO registration.
* Managing social welfare programs
* Handling help requests.
* Organizing events.
* Coordinating volunteers.
* Managing community activities.

### 💰 Donation Management

The platform provides a structure for managing social welfare donations.

Features can include:

* Recording donations.
* Tracking donor contributions.
* Managing donation information.
* Connecting donors with social causes.

### 📅 Event Management

The system supports the management of social welfare events and community activities.

Examples include:

* Blood donation camps.
* Food distribution programs.
* Educational support programs.
* Medical camps.
* Community awareness programs.
* Volunteer activities.

### 🔐 Secure Authentication

The backend is designed with security features including:

* Spring Security.
* JWT-based authentication.
* Role-based access control.
* Secure REST APIs.

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* React Router
* Axios
* Lucide Icons
* Pure CSS
* Glassmorphism UI

### Backend

* Java
* Spring Boot
* Spring Security
* JWT Authentication
* Spring Data JPA
* REST APIs

### Database

* MySQL

### Development Tools

* Git
* GitHub
* VS Code
* IntelliJ IDEA / Eclipse
* Maven
* npm

---

## 🏗️ System Architecture

```text
                         ┌──────────────────────────┐
                         │          Users           │
                         │                          │
                         │  People in Need          │
                         │  Volunteers              │
                         │  NGOs                    │
                         │  Donors                  │
                         │  Social Workers          │
                         └────────────┬─────────────┘
                                      │
                                      ▼
                         ┌──────────────────────────┐
                         │     React Frontend       │
                         │                          │
                         │  React + Vite             │
                         │  React Router             │
                         │  Axios                    │
                         │  Responsive UI            │
                         └────────────┬─────────────┘
                                      │
                                  REST APIs
                                      │
                                      ▼
                         ┌──────────────────────────┐
                         │     Spring Boot Backend  │
                         │                          │
                         │  Authentication           │
                         │  User Management          │
                         │  Request Management       │
                         │  Donation Management      │
                         │  Volunteer Management     │
                         │  Event Management         │
                         └────────────┬─────────────┘
                                      │
                                      ▼
                         ┌──────────────────────────┐
                         │        MySQL Database    │
                         │                          │
                         │  Users                    │
                         │  Roles                    │
                         │  Requests                 │
                         │  Donations                │
                         │  Volunteers               │
                         │  Events                   │
                         └──────────────────────────┘
```

---

## 📂 Project Structure

```text
Helping-Hands/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── layouts/
│   │   ├── services/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/
│   │   │   │       └── helpinghands/
│   │   │   │           ├── controller/
│   │   │   │           ├── service/
│   │   │   │           ├── repository/
│   │   │   │           ├── model/
│   │   │   │           ├── security/
│   │   │   │           └── config/
│   │   │   │
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   │
│   │   └── test/
│   │
│   └── pom.xml
│
├── database/
│   └── schema.sql
│
├── screenshots/
│   ├── landing-page.png
│   ├── login.png
│   ├── dashboard.png
│   └── requests.png
│
└── README.md
```

> Update the folder structure according to the actual project implementation.

---

## 🗄️ Database Design

The application uses **MySQL** with a normalized database structure for managing social welfare activities.

The database schema includes entities such as:

### 👤 Users

Stores user account and profile information.

### 🔑 Roles

Manages different user roles and access permissions.

Possible roles include:

* User
* Volunteer
* NGO
* Donor
* Social Worker
* Admin

### 🆘 Requests

Stores help and welfare requests submitted by people in need.

### 💰 Donations

Stores donation-related information and donor contributions.

### 🙋 Volunteers

Maintains volunteer information and participation details.

### 📅 Events

Stores social welfare events and community programs.

---

## 🔄 Application Workflow

```text
                     User Registration / Login
                                │
                                ▼
                       Select User Role
                                │
              ┌─────────────────┼─────────────────┐
              │                 │                 │
              ▼                 ▼                 ▼
        Request Help       Volunteer        Make Donation
              │                 │                 │
              └─────────────────┼─────────────────┘
                                │
                                ▼
                    Connect with Welfare
                    Organizations / NGOs
                                │
                                ▼
                      Support & Assistance
                                │
                                ▼
                         Community Impact
```

---

## 🚀 Quick Start

### Prerequisites

Make sure the following are installed on your system:

* Java JDK 17 or above
* Maven
* MySQL
* Node.js
* npm
* Git

---

## 1️⃣ Database Setup

Make sure MySQL is installed and running.

Create the database by executing the SQL script:

```text
database/schema.sql
```

You can also create the database manually:

```sql
CREATE DATABASE helping_hands_db;
```

Then execute the remaining SQL commands from:

```text
database/schema.sql
```

---

## 2️⃣ Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Open:

```text
src/main/resources/application.properties
```

Update your MySQL database configuration:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/helping_hands_db
spring.datasource.username=root
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

Run the Spring Boot application using Maven:

```bash
mvn spring-boot:run
```

Or run the main Spring Boot application class directly from IntelliJ IDEA or Eclipse.

The backend will typically run at:

```text
http://localhost:8080
```

---

## 3️⃣ Frontend Setup

Open a new terminal and navigate to the frontend directory:

```bash
cd frontend
```

Install the required dependencies:

```bash
npm install
```

Start the Vite development server:

```bash
npm run dev
```

Open the localhost URL provided by Vite in your browser.

Typically:

```text
http://localhost:5173
```

---

## 🔒 Security

The backend architecture includes security mechanisms such as:

* Spring Security.
* JWT-based authentication.
* Role-based access control.
* Protected REST API endpoints.
* Secure user authentication.
* Password encryption.
* Authorization based on user roles.

> Never commit database passwords, JWT secrets, API keys, or other sensitive credentials to GitHub.

---

## 👥 User Roles

| Role                | Main Responsibility                                  |
| ------------------- | ---------------------------------------------------- |
| 👤 User             | Request help and access welfare services             |
| 🙋 Volunteer        | Participate in social welfare activities             |
| 🏢 NGO              | Manage welfare programs and community initiatives    |
| 💰 Donor            | Support social causes through donations              |
| 🧑‍⚕️ Social Worker | Assist with welfare requests and community support   |
| 👨‍💼 Admin         | Manage users, roles, requests, donations, and events |

---

## 🌍 Social Impact

Helping Hands aims to create a connected digital ecosystem where:

```text
People in Need
       │
       ▼
Help Requests
       │
       ▼
NGOs + Volunteers + Donors + Social Workers
       │
       ▼
Coordinated Support
       │
       ▼
Positive Community Impact
```

The platform can help improve the coordination of social welfare activities and make it easier for people to find and provide support.

---

## 📊 Benefits

* Centralized social welfare management.
* Easy access to help and support.
* Better coordination between NGOs and volunteers.
* Organized donation management.
* Improved volunteer engagement.
* Easy tracking of welfare requests.
* Modern and responsive user experience.
* Secure role-based access.
* Scalable full-stack architecture.

---

## 🔮 Future Enhancements

The platform can be extended with advanced features such as:

* 🤖 AI-based matching of volunteers with help requests.
* 📍 Location-based welfare service discovery.
* 🗺️ Interactive map integration.
* 🔔 Real-time notifications.
* 📧 Email and SMS notifications.
* 💳 Secure online donation payment integration.
* 📱 Mobile application.
* 📊 Advanced social impact analytics.
* 🧠 AI-powered request prioritization.
* 🔎 Smart search and filtering.
* 📄 Digital verification for NGOs and volunteers.
* 🌐 Multi-language support.
* ☁️ Cloud deployment using AWS or Azure.
* 🐳 Docker-based deployment.

---

## 📸 Screenshots

Add screenshots of the application in the `screenshots` folder.

Example:

```markdown
## 🏠 Landing Page

![Landing Page](screenshots/landing-page.png)

## 📊 Dashboard

![Dashboard](screenshots/dashboard.png)

## 🆘 Help Request

![Help Request](screenshots/requests.png)
```

---

## 🎓 Use Cases

Helping Hands can be used by:

* NGOs and non-profit organizations.
* Educational institutions.
* Community welfare organizations.
* Volunteer groups.
* Social workers.
* Donors and philanthropists.
* Individuals seeking social support.

---

## 👩‍💻 Author

**Narmatha M**

Computer Science Engineering Student | Java Developer | Full-Stack Developer

### Interests

* Java Development
* Spring Boot
* Full-Stack Development
* React.js
* Artificial Intelligence
* Backend Development
* Database Management
* Problem Solving

---

## 📄 License

This project is developed for educational and academic purposes.

---

## ⭐ Support

If you find this project useful or interesting, consider giving the repository a ⭐ on GitHub.

---

### 🚀 Built with passion for technology and social impact.

