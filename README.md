# Aura

> A modern investment and portfolio management platform built with the
> MERN stack.

Aura is a full-stack web application designed to provide a clean and
modern financial workspace for managing investment-related information.
It includes secure authentication, portfolio views, holdings, positions,
orders, funds, and watchlists.

## ✨ Features

-   🔐 JWT-based user authentication with HTTP-only cookies
-   🔑 Password hashing with bcrypt
-   📊 Portfolio and investment dashboard
-   📈 Holdings overview
-   💼 Positions tracking
-   🧾 Order management
-   💰 Funds section
-   👀 Stock watchlist
-   📱 Responsive modern UI
-   🔔 Toast notifications
-   📊 Portfolio visualizations with Chart.js
-   🗄️ MongoDB database integration
-   🌐 Separate frontend, dashboard, and backend applications
-   🚀 Deployment-ready architecture

## 🛠️ Tech Stack

### Frontend

-   React
-   Vite
-   React Router
-   Axios
-   Bootstrap
-   React Toastify
-   Font Awesome / React Icons

### Dashboard

-   React
-   Vite
-   React Router
-   Axios
-   Material UI
-   Chart.js
-   react-chartjs-2
-   Font Awesome

### Backend

-   Node.js
-   Express.js
-   MongoDB
-   Mongoose
-   JWT
-   bcryptjs
-   Cookie Parser
-   CORS

## 📁 Project Structure

``` text
Aura/
│
├── frontend/                  # Public website and authentication
│   ├── src/
│   │   ├── landingPage/
│   │   ├── auth/
│   │   ├── App.jsx
│   │   └── router.jsx
│   └── package.json
│
├── dashboard/                 # Authenticated investment dashboard
│   ├── src/
│   │   ├── components/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── backend/                   # REST API and authentication
    ├── Controllers/
    ├── Middlewares/
    ├── Routes/
    ├── schema/
    ├── util/
    ├── index.js
    └── package.json
```

## 🔄 Application Flow

``` text
Frontend
Landing + Authentication
        │
        │ REST API
        ▼
Backend
Express + JWT Authentication
        │
        ▼
MongoDB Atlas
        ▲
        │ Protected API
        │
Dashboard
Portfolio Workspace
```

### Authentication Flow

1.  User creates an Aura account.
2.  The password is hashed before storage.
3.  User logs in with email and password.
4.  Backend validates the credentials.
5.  Backend creates a JWT.
6.  JWT is stored in an HTTP-only cookie.
7.  User is redirected to the protected dashboard.
8.  Dashboard verifies the authenticated user through the backend.
9.  Protected dashboard content is displayed after successful
    verification.

## 🚀 Getting Started

### Prerequisites

-   Node.js
-   npm
-   MongoDB or MongoDB Atlas
-   Git

### Clone the Repository

``` bash
git clone https://github.com/whorajtripathi/Aura.git
cd Aura
```

### Install Dependencies

Install dependencies separately for each application.

``` bash
cd frontend
npm install
```

``` bash
cd ../dashboard
npm install
```

``` bash
cd ../backend
npm install
```

## ⚙️ Backend Environment Variables

Create a `.env` file inside the `backend` directory:

``` env
MONGODB_URI=your_mongodb_connection_string
TOKEN_KEY=your_jwt_secret
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

Use your actual MongoDB connection string and secret values.

> Never commit your `.env` file or expose secret keys publicly.

## ▶️ Run Locally

Aura consists of three separate applications.

### Backend

``` bash
cd backend
node index.js
```

Runs on:

``` text
http://localhost:3002
```

### Frontend

Open another terminal:

``` bash
cd frontend
npm run dev
```

Runs on:

``` text
http://localhost:5173
```

### Dashboard

Open another terminal:

``` bash
cd dashboard
npm run dev
```

Runs on:

``` text
http://localhost:5174
```

## 🌐 Deployment Architecture

``` text
GitHub
   │
   ├── frontend/  ──► Vercel
   │
   ├── dashboard/ ──► Vercel
   │
   └── backend/   ──► Render
                         │
                         ▼
                    MongoDB Atlas
```

## 🎨 UI & Design

Aura uses a modern fintech-inspired design system focused on:

-   Dark navy backgrounds
-   Indigo and purple accents
-   Rounded cards
-   Clear typography
-   Responsive layouts
-   Subtle gradients
-   Consistent spacing
-   Clean data tables
-   Purposeful animations
-   Clear loading, empty, success, and error states

The goal is to provide an original financial workspace rather than
directly cloning an existing brokerage platform.

## 📊 Dashboard Modules

-   **Summary** --- portfolio overview and visualizations
-   **Watchlist** --- track selected instruments
-   **Holdings** --- view investment holdings
-   **Positions** --- view current positions
-   **Orders** --- view order activity
-   **Funds** --- view available funds and related actions
-   **Apps** --- Aura-related tools and resources

## 🔒 Security

Aura includes:

-   Password hashing with bcrypt
-   JWT-based authentication
-   HTTP-only authentication cookies
-   Protected dashboard routes
-   Backend-side user verification
-   CORS configuration
-   Environment variables for sensitive configuration

## 🧪 Project Status

Aura is an ongoing full-stack development project focused on:

-   MERN stack development
-   Authentication
-   Dashboard architecture
-   Portfolio management UI
-   REST API integration
-   Database integration
-   Production deployment

## 📌 Disclaimer

Aura is a software project created for learning, development, and
demonstration purposes. It is not a financial advisory service or a real
brokerage platform. Data and trading-related functionality should not be
considered financial advice or a representation of live market
execution.

## 👨‍💻 Author

**Raj Tripathi**

Computer Engineering Student

GitHub: [@whorajtripathi](https://github.com/whorajtripathi)

------------------------------------------------------------------------

⭐ If you find the project useful or interesting, consider giving the
repository a star.
