# DigiFarm Technology Stack

## Overview

DigiFarm is a comprehensive livestock management system built using modern web technologies. The application follows the **PERN Stack** architecture, which provides a robust, scalable, and type-safe full-stack solution for managing complex livestock data operations.

---

## Architecture Pattern

**PERN Stack** = **P**ostgreSQL + **E**xpress.js + **R**eact + **N**ode.js

```
┌─────────────────────────────────────────────────────┐
│                   User Browser                       │
└─────────────────────┬───────────────────────────────┘
                      │ HTTPS
                      ↓
┌─────────────────────────────────────────────────────┐
│              Frontend (React + TypeScript)           │
│  • Vite Build Tool                                   │
│  • Tailwind CSS Styling                              │
│  • Zustand State Management                          │
│  • Lucide React Icons                                │
└─────────────────────┬───────────────────────────────┘
                      │ RESTful API (JSON)
                      ↓
┌─────────────────────────────────────────────────────┐
│         Backend API (Node.js + Express.js)           │
│  • TypeScript                                        │
│  • JWT Authentication                                │
│  • Prisma ORM                                        │
│  • Business Logic Layer                              │
└─────────────────────┬───────────────────────────────┘
                      │ SQL Queries
                      ↓
┌─────────────────────────────────────────────────────┐
│            Database (PostgreSQL)                     │
│  • Relational Data Storage                           │
│  • ACID Compliance                                   │
│  • Complex Queries                                   │
└─────────────────────────────────────────────────────┘
```

---

## Frontend Stack

### Core Technologies

#### **React 18.2.0**
- **Purpose**: Component-based UI library for building interactive user interfaces
- **Why React**: 
  - Large ecosystem and community support
  - Reusable component architecture
  - Virtual DOM for optimal performance
  - Excellent developer tools and debugging
- **Key Features Used**:
  - Functional components with hooks (useState, useEffect, useContext)
  - Component composition and prop drilling
  - Conditional rendering for dynamic UIs

#### **TypeScript**
- **Purpose**: Strongly-typed JavaScript superset for type safety
- **Why TypeScript**:
  - Catches errors during development (compile-time checking)
  - Better IDE support with autocomplete and IntelliSense
  - Improved code maintainability and refactoring
  - Self-documenting code through type definitions
- **Usage**:
  - Type definitions for all components, functions, and data structures
  - Interface definitions for API responses
  - Enum types for livestock status, roles, gender, etc.

#### **Vite**
- **Purpose**: Modern build tool and development server
- **Why Vite**:
  - Lightning-fast hot module replacement (HMR)
  - Optimized production builds
  - Native ES modules support
  - Better development experience than Create React App
- **Features**:
  - Instant server start
  - Fast build times
  - Code splitting and lazy loading
  - CSS preprocessing support

#### **Tailwind CSS**
- **Purpose**: Utility-first CSS framework for rapid UI development
- **Why Tailwind**:
  - No need to write custom CSS
  - Consistent design system
  - Responsive design made easy
  - Small production bundle size (unused styles purged)
- **Configuration**:
  - Custom color palette for DigiFarm branding
  - Responsive breakpoints (mobile, tablet, desktop)
  - Custom utility classes for livestock cards

### UI Component Library

#### **Lucide React**
- **Purpose**: Beautiful, consistent icon set
- **Why Lucide**: 
  - Modern, clean icon designs
  - Tree-shakeable (only import icons you use)
  - Consistent sizing and styling
- **Icons Used**: Cow, Heart, Calendar, Users, FileText, TrendingUp, etc.

#### **Recharts**
- **Purpose**: Data visualization and charting library
- **Why Recharts**:
  - React-native chart components
  - Responsive and customizable
  - Supports line charts, bar charts, pie charts
- **Usage**:
  - Livestock population trends
  - Health statistics visualization
  - Breeding performance analytics

### State Management

#### **Zustand**
- **Purpose**: Lightweight state management library
- **Why Zustand**:
  - Simpler than Redux (less boilerplate)
  - TypeScript-friendly
  - Small bundle size (~1KB)
  - Easy to use with React hooks
- **Global State Managed**:
  - User authentication state (logged-in user, JWT token)
  - Livestock data (animals, health records, breeding records)
  - UI state (modals, sidebars, notifications)

### Routing

#### **React Router (Planned)**
- **Purpose**: Client-side routing for single-page application (SPA)
- **Routes**:
  - `/` - Home/Dashboard
  - `/livestock` - Livestock list
  - `/livestock/:id` - Individual livestock profile
  - `/health` - Health records
  - `/breeding` - Breeding management
  - `/pregnancy` - Pregnancy monitoring
  - `/reports` - Reports and analytics
  - `/users` - User management (Admin only)
  - `/login` - Authentication

---

## Backend Stack (Planned)

### Core Technologies

#### **Node.js (v18+)**
- **Purpose**: JavaScript runtime for server-side execution
- **Why Node.js**:
  - JavaScript everywhere (same language for frontend and backend)
  - Non-blocking I/O for high concurrency
  - Large npm ecosystem
  - Perfect for RESTful APIs
- **Features**:
  - Event-driven architecture
  - Asynchronous operations
  - Fast execution with V8 engine

#### **Express.js**
- **Purpose**: Minimal and flexible web application framework
- **Why Express**:
  - Most popular Node.js framework
  - Lightweight and unopinionated
  - Extensive middleware ecosystem
  - Easy to learn and implement
- **Key Features**:
  - RESTful API routing
  - Middleware for authentication, logging, error handling
  - JSON request/response handling
  - Static file serving (for livestock photos)

#### **TypeScript (Backend)**
- **Purpose**: Type safety for backend code
- **Benefits**:
  - Shared type definitions between frontend and backend
  - Catch database query errors at compile time
  - Better API documentation through types
  - Improved team collaboration

### Database Layer

#### **PostgreSQL**
- **Purpose**: Relational database management system
- **Why PostgreSQL**:
  - Open-source and free
  - ACID compliant (data integrity)
  - Excellent for complex relationships (livestock → health records → breeding)
  - Advanced features (JSON support, full-text search, triggers)
  - Scales well for farm operations
- **Key Features**:
  - Foreign key constraints for data integrity
  - Indexes for fast queries
  - Transactions for atomic operations
  - Backup and restore capabilities

#### **Prisma ORM**
- **Purpose**: Modern database toolkit and ORM
- **Why Prisma**:
  - Type-safe database queries (TypeScript integration)
  - Auto-generated client based on schema
  - Database migrations made easy
  - Query optimization and connection pooling
  - Visual database browser (Prisma Studio)
- **Features**:
  - Schema-first approach (define models in `schema.prisma`)
  - Automatic TypeScript types generation
  - Relation queries (eager loading, lazy loading)
  - Database seeding for test data

### Authentication & Security

#### **JWT (JSON Web Tokens)**
- **Purpose**: Stateless authentication mechanism
- **How It Works**:
  1. User logs in with email/password
  2. Server validates credentials
  3. Server generates JWT token (signed with secret)
  4. Token sent to client and stored (localStorage/cookies)
  5. Client includes token in Authorization header for API requests
  6. Server validates token on each request
- **Benefits**:
  - No server-side session storage needed
  - Scalable across multiple servers
  - Can include user role and permissions in token

#### **bcrypt**
- **Purpose**: Password hashing library
- **Why bcrypt**:
  - Industry-standard for password security
  - Salting built-in (protects against rainbow tables)
  - Slow hashing (protects against brute force)
- **Usage**:
  - Hash passwords before storing in database
  - Compare hashed password during login

#### **Helmet.js**
- **Purpose**: Security middleware for Express
- **Protection**:
  - Sets security-related HTTP headers
  - Prevents common attacks (XSS, clickjacking, MIME sniffing)
  - Content Security Policy (CSP)

#### **express-validator**
- **Purpose**: Request validation and sanitization
- **Usage**:
  - Validate email format
  - Ensure required fields are present
  - Sanitize user input to prevent SQL injection/XSS

### API Documentation

#### **Swagger/OpenAPI (Planned)**
- **Purpose**: Interactive API documentation
- **Features**:
  - Auto-generated from code comments
  - Try-it-out functionality for testing endpoints
  - Type definitions and examples
  - Authentication testing

### Logging & Monitoring

#### **Morgan**
- **Purpose**: HTTP request logger
- **Logs**:
  - Request method (GET, POST, PUT, DELETE)
  - Request URL
  - Response status code
  - Response time

#### **Winston (Planned)**
- **Purpose**: Application-level logging
- **Features**:
  - Log levels (error, warn, info, debug)
  - File-based logging
  - Error tracking and alerts

---

## File Storage

### **Cloudinary** or **AWS S3**
- **Purpose**: Cloud storage for livestock photos
- **Why Cloud Storage**:
  - Don't store images in database (performance)
  - CDN delivery for fast image loading
  - Automatic image optimization (resizing, compression)
  - Backup and redundancy
- **Workflow**:
  1. User uploads livestock photo via frontend
  2. Frontend sends image to backend
  3. Backend uploads to Cloudinary/S3
  4. Cloudinary returns image URL
  5. URL stored in PostgreSQL database
  6. Frontend displays image from CDN

---

## Development Tools

### **Git & GitHub**
- **Purpose**: Version control and collaboration
- **Repository**: `https://github.com/0xJape/DigiFarm`
- **Workflow**:
  - Feature branches for new features
  - Pull requests for code review
  - Main branch for production-ready code

### **npm**
- **Purpose**: Package manager for JavaScript
- **Usage**:
  - Install dependencies (`npm install`)
  - Run development server (`npm run dev`)
  - Build production bundle (`npm run build`)

### **ESLint & Prettier**
- **Purpose**: Code quality and formatting
- **ESLint**: Catches code errors and enforces best practices
- **Prettier**: Automatic code formatting (consistent style)

### **VS Code**
- **Recommended Extensions**:
  - ESLint
  - Prettier
  - Tailwind CSS IntelliSense
  - Prisma
  - TypeScript and JavaScript Language Features

---

## Deployment Stack (Recommended)

### **Railway** (Recommended ⭐)
- **Frontend**: React app deployment with CDN
- **Backend**: Node.js/Express API server
- **Database**: Managed PostgreSQL instance
- **Cost**: $5 free credit + $10-25/month
- **Features**:
  - Automatic deployments from GitHub
  - Custom domain support (e.g., `digifarm.ph`)
  - Environment variables management
  - SSL certificates (HTTPS)
  - Built-in monitoring and logs

### **Alternative: Render**
- **Deployment**: Full-stack deployment (frontend + backend + database)
- **Cost**: Free tier available (with limitations) or $14/month
- **Features**:
  - Auto-deploy from GitHub
  - PostgreSQL backups
  - Custom domains with SSL

### **Alternative: Vercel (Frontend) + Railway (Backend)**
- **Vercel**: React app on global CDN (FREE)
- **Railway**: Backend API + PostgreSQL ($10-15/month)
- **Benefits**:
  - Fastest frontend delivery (Vercel CDN)
  - Separate frontend and backend scaling

---

## Data Models (Prisma Schema)

### **User**
```prisma
model User {
  id        String   @id @default(uuid())
  email     String   @unique
  password  String   // bcrypt hashed
  name      String
  role      Role     @default(VIEWER)
  status    Status   @default(ACTIVE)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

enum Role {
  ADMIN
  VETERINARIAN
  FARM_MANAGER
  VIEWER
}
```

### **Livestock**
```prisma
model Livestock {
  id            String   @id @default(uuid())
  tagId         String   @unique  // Physical tag number
  name          String
  species       String   // Cattle, Goat, Sheep, etc.
  breed         String
  gender        Gender
  birthDate     DateTime
  weight        Float?
  color         String?
  status        LivestockStatus @default(ACTIVE)
  imageUrl      String?  // Cloudinary/S3 URL
  notes         String?
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
  
  healthRecords HealthRecord[]
  breedingAsDam BreedingRecord[] @relation("Dam")
  breedingAsSire BreedingRecord[] @relation("Sire")
}

enum Gender {
  MALE
  FEMALE
}

enum LivestockStatus {
  ACTIVE
  SOLD
  DECEASED
  TRANSFERRED
}
```

### **HealthRecord**
```prisma
model HealthRecord {
  id            String   @id @default(uuid())
  livestockId   String
  livestock     Livestock @relation(fields: [livestockId], references: [id])
  recordType    HealthRecordType
  date          DateTime
  diagnosis     String?
  treatment     String?
  medication    String?
  veterinarian  String?
  notes         String?
  nextDueDate   DateTime?  // For vaccinations
  recordedBy    String
  user          User @relation(fields: [recordedBy], references: [id])
  createdAt     DateTime @default(now())
}

enum HealthRecordType {
  VACCINATION
  CHECKUP
  TREATMENT
  SURGERY
  DEWORMING
  OTHER
}
```

### **BreedingRecord**
```prisma
model BreedingRecord {
  id            String   @id @default(uuid())
  damId         String   // Mother
  dam           Livestock @relation("Dam", fields: [damId], references: [id])
  sireId        String   // Father
  sire          Livestock @relation("Sire", fields: [sireId], references: [id])
  matingDate    DateTime
  status        BreedingStatus @default(PENDING)
  expectedDueDate DateTime?
  actualBirthDate DateTime?
  notes         String?
  recordedBy    String
  user          User @relation(fields: [recordedBy], references: [id])
  createdAt     DateTime @default(now())
  
  pregnancyRecords PregnancyRecord[]
  offspring     Offspring[]
}

enum BreedingStatus {
  PENDING
  CONFIRMED
  FAILED
  COMPLETED
}
```

### **PregnancyRecord**
```prisma
model PregnancyRecord {
  id            String   @id @default(uuid())
  breedingId    String   @unique
  breeding      BreedingRecord @relation(fields: [breedingId], references: [id])
  stage         PregnancyStage @default(EARLY)
  bcsRecords    Json[]   // Body Condition Score history
  birthStatus   BirthStatus @default(PREGNANT)
  notes         String?
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
}

enum PregnancyStage {
  EARLY    // 0-3 months
  MID      // 4-6 months
  LATE     // 7-9 months
}

enum BirthStatus {
  PREGNANT
  GIVEN_BIRTH
}
```

### **Offspring**
```prisma
model Offspring {
  id            String   @id @default(uuid())
  breedingId    String
  breeding      BreedingRecord @relation(fields: [breedingId], references: [id])
  livestockId   String?  // Linked to Livestock after registration
  livestock     Livestock? @relation(fields: [livestockId], references: [id])
  gender        Gender
  birthWeight   Float?
  condition     String   // Healthy, Weak, etc.
  notes         String?
  createdAt     DateTime @default(now())
}
```

---

## API Endpoints Structure

### **Authentication**
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login and get JWT token
- `POST /api/auth/logout` - Logout
- `GET /api/auth/me` - Get current user profile
- `PUT /api/auth/profile` - Update profile
- `POST /api/auth/change-password` - Change password

### **Livestock**
- `GET /api/livestock` - Get all livestock (with filters)
- `GET /api/livestock/:id` - Get single livestock
- `POST /api/livestock` - Create new livestock
- `PUT /api/livestock/:id` - Update livestock
- `DELETE /api/livestock/:id` - Delete livestock
- `POST /api/livestock/:id/photo` - Upload photo
- `GET /api/livestock/statistics` - Dashboard stats

### **Health Records**
- `GET /api/health-records` - Get all health records
- `GET /api/health-records/:id` - Get single record
- `GET /api/livestock/:id/health-records` - Get records for specific animal
- `POST /api/health-records` - Create new record
- `PUT /api/health-records/:id` - Update record
- `DELETE /api/health-records/:id` - Delete record
- `GET /api/health-records/upcoming` - Upcoming vaccinations

### **Breeding**
- `GET /api/breeding` - Get all breeding records
- `GET /api/breeding/:id` - Get single record
- `POST /api/breeding` - Create breeding record
- `PUT /api/breeding/:id` - Update record
- `DELETE /api/breeding/:id` - Delete record
- `GET /api/breeding/statistics` - Breeding performance

### **Pregnancy**
- `GET /api/pregnancy` - Get all pregnancy records
- `GET /api/pregnancy/:id` - Get single record
- `POST /api/pregnancy/:id/bcs` - Add body condition score
- `PUT /api/pregnancy/:id` - Update pregnancy
- `POST /api/pregnancy/:id/birth` - Record birth

### **Users** (Admin only)
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get single user
- `POST /api/users` - Create user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Deactivate user
- `PUT /api/users/:id/status` - Toggle active/inactive

### **Reports**
- `GET /api/reports/livestock` - Livestock report
- `GET /api/reports/health` - Health statistics
- `GET /api/reports/breeding` - Breeding performance
- `POST /api/reports/export` - Export to PDF/Excel

---

## Environment Variables

### **Frontend (.env)**
```bash
VITE_API_URL=http://localhost:3000  # Backend API URL
VITE_APP_NAME=DigiFarm
VITE_APP_VERSION=1.0.0
```

### **Backend (.env)**
```bash
NODE_ENV=development
PORT=3000

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/digifarm

# Authentication
JWT_SECRET=your-super-secret-key-minimum-32-chars
JWT_EXPIRATION=7d

# CORS
FRONTEND_URL=http://localhost:5173  # Vite dev server
ALLOWED_ORIGINS=http://localhost:5173

# File Upload
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
UPLOAD_MAX_SIZE=5242880  # 5MB
```

---

## Security Best Practices

### **Implemented**
✅ Password hashing with bcrypt  
✅ JWT authentication  
✅ TypeScript for type safety  
✅ Environment variables for secrets  
✅ Git ignore for `.env` files  

### **Planned**
⏳ CORS configuration (restrict to frontend domain)  
⏳ Rate limiting (prevent brute force attacks)  
⏳ Input validation and sanitization  
⏳ SQL injection prevention (via Prisma)  
⏳ XSS protection  
⏳ HTTPS enforcement in production  
⏳ Security headers (via Helmet.js)  
⏳ File upload size limits  
⏳ Database backups  

---

## Performance Optimizations

### **Frontend**
- Lazy loading of components
- Code splitting with Vite
- Image optimization (Cloudinary transformation)
- Tailwind CSS purging (remove unused styles)
- React memo for expensive components
- Debounced search inputs

### **Backend**
- Database connection pooling (via Prisma)
- Database indexes on frequently queried fields
- Pagination for large datasets
- Caching with Redis (planned)
- Query optimization (avoid N+1 queries)
- Compression middleware for API responses

---

## Development Workflow

### **1. Local Development**
```bash
# Frontend
cd frontend
npm install
npm run dev  # Runs on http://localhost:5173

# Backend (when implemented)
cd backend
npm install
npx prisma migrate dev  # Run database migrations
npm run dev  # Runs on http://localhost:3000
```

### **2. Database Management**
```bash
# Generate Prisma Client
npx prisma generate

# Create new migration
npx prisma migrate dev --name add-livestock-table

# Open Prisma Studio (database GUI)
npx prisma studio  # Runs on http://localhost:5555

# Seed database with test data
npx prisma db seed
```

### **3. Git Workflow**
```bash
# Create feature branch
git checkout -b feature/add-health-records

# Make changes and commit
git add .
git commit -m "Add health records feature"

# Push to GitHub
git push origin feature/add-health-records

# Create Pull Request on GitHub
# Merge to main after review
```

### **4. Deployment**
```bash
# Deploy to Railway
railway login
railway init
railway up

# Add PostgreSQL database
railway add postgresql

# Set environment variables in Railway dashboard
# Push to main branch triggers automatic deployment
```

---

## Technology Decision Rationale

### **Why PERN Stack?**
1. **Single Language**: JavaScript/TypeScript for both frontend and backend
2. **Type Safety**: TypeScript ensures fewer runtime errors
3. **Modern Tooling**: Vite, Prisma, and React are industry-standard
4. **Scalability**: PostgreSQL handles complex relationships and scales well
5. **Developer Experience**: Hot reloading, type hints, and great debugging tools
6. **Community Support**: Large communities for React, Node.js, and PostgreSQL
7. **Cost-Effective**: Open-source technologies, no licensing fees
8. **Job Market**: PERN stack skills are highly marketable

### **Why Not MERN (MongoDB)?**
- Livestock management requires complex relationships (animals → health → breeding)
- Relational database (PostgreSQL) better suited than document database (MongoDB)
- PostgreSQL provides data integrity with foreign keys
- SQL is more familiar for complex reporting queries

### **Why Vite Over Create React App?**
- 10-100x faster hot module replacement
- Faster build times
- Better developer experience
- Modern tooling (ES modules)

### **Why Zustand Over Redux?**
- Much simpler API (less boilerplate)
- Smaller bundle size (~1KB vs ~10KB)
- Easier to learn and maintain
- TypeScript support out of the box

### **Why Prisma Over Traditional ORMs?**
- Type-safe queries (compile-time error checking)
- Auto-generated TypeScript types
- Database-agnostic (can switch from PostgreSQL to MySQL easily)
- Better migration system
- Prisma Studio for visual database management

---

## Future Technology Considerations

### **Potential Additions**
- **React Query**: Better server state management and caching
- **Zod**: Runtime schema validation
- **Socket.io**: Real-time notifications for health alerts
- **Redis**: Caching layer for frequently accessed data
- **Sentry**: Error tracking and monitoring
- **Jest**: Unit and integration testing
- **Cypress**: End-to-end testing
- **Docker**: Containerization for consistent deployments
- **GitHub Actions**: CI/CD pipeline automation

### **Mobile App (Future)**
- **React Native**: Cross-platform mobile app
- **Expo**: Faster React Native development
- **Shared API**: Same backend serves web and mobile

---

## Learning Resources

### **React**
- [Official React Documentation](https://react.dev)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app)

### **TypeScript**
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

### **Node.js & Express**
- [Node.js Documentation](https://nodejs.org/en/docs)
- [Express.js Guide](https://expressjs.com/en/guide/routing.html)

### **PostgreSQL & Prisma**
- [PostgreSQL Tutorial](https://www.postgresqltutorial.com)
- [Prisma Documentation](https://www.prisma.io/docs)

### **Tailwind CSS**
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

### **Deployment**
- [Railway Documentation](https://docs.railway.app)
- [Render Documentation](https://render.com/docs)

---

## Summary

DigiFarm uses a **modern, type-safe, full-stack JavaScript architecture** with the PERN stack:

✅ **Frontend**: React + TypeScript + Vite + Tailwind CSS  
✅ **Backend**: Node.js + Express.js + TypeScript (planned)  
✅ **Database**: PostgreSQL with Prisma ORM (planned)  
✅ **Authentication**: JWT with bcrypt password hashing  
✅ **Deployment**: Railway (recommended) or Render  
✅ **Version Control**: Git with GitHub  

This stack provides:
- **Type Safety** throughout the entire application
- **Developer Experience** with modern tooling
- **Scalability** for farm operations growth
- **Maintainability** with clean architecture
- **Performance** optimizations built-in
- **Security** best practices implemented

The technology choices prioritize **productivity, reliability, and long-term maintainability** while keeping the learning curve manageable for the development team.
