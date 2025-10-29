# IA03 - User Registration System

A complete user registration system built with NestJS backend and React frontend.

## 🏗️ Tech Stack

### Backend
- **NestJS** - Node.js framework
- **Prisma** - Database ORM
- **PostgreSQL** - Database
- **bcrypt** - Password hashing
- **class-validator** - Input validation

### Frontend
- **React 19** - Frontend framework
- **Vite** - Build tool
- **React Router** - Client-side routing
- **React Query** - API state management
- **React Hook Form** - Form handling
- **Tailwind CSS** - Styling
- **Zod** - Schema validation

## 🚀 Features

- ✅ User registration with email/password
- ✅ Input validation (frontend & backend)
- ✅ Password hashing with bcrypt
- ✅ Duplicate email checking
- ✅ React Query for API management
- ✅ Responsive UI with Tailwind CSS
- ✅ Error handling & loading states

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+
- PostgreSQL database

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Setup environment variables:
```bash
# Create .env file
DATABASE_URL="postgresql://username:password@localhost:5432/database_name"
BCRYPT_ROUNDS=10
```

4. Run database migrations:
```bash
npx prisma migrate dev
npx prisma generate
```

5. Start development server:
```bash
npm run start:dev
```

Backend will run on `http://localhost:3000`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Setup environment variables:
```bash
# Create .env file
VITE_API_BASE=http://localhost:3000
```

4. Start development server:
```bash
npm run dev
```

Frontend will run on `http://localhost:5173`

## 🌐 API Endpoints

### POST /user/register
Register a new user.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Success Response (201):**
```json
{
  "message": "Register success",
  "user": {
    "id": "user_id",
    "email": "user@example.com",
    "createdAt": "2025-01-01T00:00:00.000Z"
  }
}
```

**Error Response (400):**
```json
{
  "message": "Email already registered"
}
```

## 📱 Pages

- **Home** (`/`) - Landing page with navigation
- **Sign Up** (`/signup`) - User registration form
- **Login** (`/login`) - User login form (UI only)

## 🧪 Validation Rules

- **Email**: Must be valid email format
- **Password**: Minimum 6 characters
- **Duplicate Check**: Email must be unique

## 🚀 Deployment

### Backend (Railway)
1. Connect GitHub repository
2. Set environment variables
3. Deploy automatically

### Frontend (Vercel)
1. Connect GitHub repository  
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy automatically

## 👥 Team

Built by [Your Name] for IA03 Assignment.