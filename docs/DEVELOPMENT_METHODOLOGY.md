# DigiLink Development Methodology

## 3.4.1 Initial Prototype Creation

### Version 1 - Initial Prototype
**Dashboard Overview**
- Livestock Management Dashboard
- Real-time monitoring statistics
- Quick access navigation panels
- Animal health tracking interface

### Version 2 - Enhanced Prototype
**Livestock Management System**
- Individual animal profiles
- Breeding records and tracking
- Health records and vaccination schedules
- Activity logs and timeline views

### Prototype Development Process

In the initial prototype creation phase, the researchers focused on designing and developing the first version of the livestock management system. This involved creating a user-friendly interface and basic functionalities that addressed the core needs of farm operations. The proponents created a visual design for the system's user interface (UI) using Figma to develop mockups and wireframes for the system's main pages, including data entry forms, livestock dashboards, and health monitoring views, outlining the layout and functionalities of each page. After designing the initial prototype, a working prototype was implemented with the desired functionalities. This phase ensured that the system was designed with user needs in mind and addressed the inefficiencies of the previous manual record-keeping methods, paving the way for a more efficient and effective livestock data management solution.

### Prototype Creation Plan

The plan for prototype creation includes the following steps:

1. **Initial Prototype Development**: Create a basic version of the system with core functionalities for livestock tracking, health records, and breeding management.

2. **User Feedback Collection**: Gather feedback from stakeholders (farm managers, veterinarians, farm workers) through meetings and usability testing sessions. Feedback will focus on functionality, usability, and any additional features needed.

3. **Analysis and Refinement**: Analyze the feedback to identify common issues and areas for improvement. Prioritize changes based on their impact and feasibility for farm operations.

4. **Implementation of Changes**: Incorporate the prioritized changes and new features into the system.

5. **Testing and Validation**: Conduct thorough testing to ensure that the implemented changes meet user requirements and do not introduce new issues.

This cycle was repeated, with each iteration building on the previous one. The expected number of iterations was five, depending on the complexity of the feedback and the extent of the required changes.

### Iteration Criteria

The criteria for progressing from one iteration to the next include:

- Completion of the prioritized changes and new features for the current iteration
- Successful testing and validation of the implemented changes
- Approval from key stakeholders that the iteration meets their needs and expectations

By iteratively enhancing the system based on farm stakeholder feedback, the development team ensured that it effectively and efficiently met their needs, ultimately resulting in a fully functional and user-centered livestock information management system.

## 3.4.2 User Interface Design

In DigiLink, the user interface design phase aimed to create an intuitive interface that ensured easy navigation and usability for all users. This involved designing layouts, menus, and controls in a way that aligned with the system's objectives and enhanced the user experience. The user interface was designed to be user-friendly, accommodating the needs of various stakeholders, including farm managers, veterinarians, farm workers, and administrators. Additionally, all objectives were followed to ensure that the final interface effectively supported the efficient management of livestock data and promoted the system's overall usability and effectiveness.

### Key UI Components

- **Dashboard**: Overview of farm statistics, health alerts, and breeding schedules
- **Livestock Profile Pages**: Detailed animal information with photos and medical history
- **Health Records Interface**: Vaccination schedules, medical treatments, and body condition scores
- **Breeding Management**: Mating records, pregnancy tracking, and offspring documentation
- **Reports and Analytics**: Visual charts, export capabilities, and trend analysis
- **User Management**: Role-based access control and activity logging

## 3.4.3 Backend Development

In the development of DigiFarm, backend development focused on constructing a robust and scalable backend infrastructure using the **PERN Stack** (PostgreSQL, Express.js, React, Node.js). This modern full-stack architecture provides a powerful combination of technologies capable of handling complex livestock data management operations. The architecture separates concerns between the frontend React application and a dedicated backend API server built with Node.js and Express.js, while PostgreSQL serves as the relational database. This included designing and implementing RESTful APIs, setting up secure database connections, defining comprehensive data models, and establishing authentication and authorization mechanisms to manage data-related operations efficiently and securely.

### PERN Stack Architecture

The PERN stack architecture of DigiFarm follows a modern full-stack pattern:

**Technology Stack Overview**:
- **P**ostgreSQL: Powerful open-source relational database for structured data storage
- **E**xpress.js: Fast, minimalist web framework for Node.js to build RESTful APIs
- **R**eact: Component-based frontend library for building interactive user interfaces
- **N**ode.js: JavaScript runtime for scalable server-side application development

### Backend Architecture Overview

The backend architecture of DigiFarm follows a three-tier architecture pattern:

1. **Presentation Layer**: React-based frontend application (with TypeScript and Tailwind CSS) that communicates with the backend via RESTful HTTP/HTTPS requests
2. **Application Layer**: Node.js/Express.js API server that processes business logic, validates data, manages authentication, and handles middleware operations
3. **Data Layer**: PostgreSQL relational database that stores and retrieves livestock, health, breeding, and user data with ACID compliance and referential integrity

### Backend Technologies

**Node.js + Express.js**: The backend API server is built using Node.js with Express.js framework. Node.js provides a scalable, event-driven runtime environment ideal for handling multiple concurrent connections, while Express.js offers a minimal and flexible framework for building robust RESTful APIs. This combination enables efficient request handling, middleware integration, and seamless API endpoint management.

**TypeScript (Backend)**: TypeScript is used throughout the backend codebase to ensure type safety, better code maintainability, and improved developer experience. Type definitions are shared between frontend and backend to ensure data consistency across the full stack.

**PostgreSQL Database**: PostgreSQL serves as the primary relational database management system due to its reliability, ACID compliance, advanced features, and excellent support for complex queries. PostgreSQL is particularly well-suited for livestock management data due to its:
- Strong support for relational data modeling (animals, health records, breeding lineage)
- JSON/JSONB data types for flexible metadata storage
- Full-text search capabilities for quick livestock lookups
- Robust data integrity constraints and foreign key relationships
- Excellent performance with large datasets
- Support for complex queries involving multiple table joins

**Prisma ORM**: Prisma is used as the Object-Relational Mapping (ORM) tool to interact with PostgreSQL. Prisma provides:
- Type-safe database queries with auto-completion
- Automatic migration generation and version control
- Built-in connection pooling
- Intuitive data modeling with Prisma Schema
- Seamless integration with TypeScript

**Authentication & Security**:
- **JWT (JSON Web Tokens)**: Used for stateless authentication and authorization
- **bcrypt**: For secure password hashing and validation
- **express-validator**: For input validation and sanitization
- **CORS**: Configured to allow secure cross-origin requests from the frontend
- **Helmet.js**: Middleware for setting security-related HTTP headers

**Additional Backend Tools**:
- **dotenv**: Environment variable management for secure configuration
- **morgan**: HTTP request logger for debugging and monitoring
- **multer**: Middleware for handling file uploads (livestock photos)
- **node-cron**: For scheduled tasks (e.g., pregnancy due date reminders, vaccination alerts)

### Backend Development Plan

The plan for backend development includes the following comprehensive steps:

#### 1. Setup of Development Environment

**Environment Configuration**:
- Install Node.js (v18 or later) and npm/yarn package manager
- Configure PostgreSQL database server locally or using cloud services (AWS RDS, Azure Database for PostgreSQL, or DigitalOcean Managed Databases)
- Set up development, testing, and production environments with separate database instances
- Configure environment variables using `.env` files for database credentials, JWT secrets, and API keys
- Establish version control using Git, with GitHub as the remote repository to manage backend code changes

**Project Initialization**:
```bash
# Initialize Node.js project
npm init -y

# Install core dependencies
npm install express typescript @types/node @types/express
npm install prisma @prisma/client
npm install dotenv cors helmet morgan
npm install jsonwebtoken bcrypt express-validator
npm install multer express-rate-limit

# Install development dependencies
npm install -D nodemon ts-node @types/jsonwebtoken @types/bcrypt @types/multer
```

**TypeScript Configuration**:
- Configure `tsconfig.json` for backend TypeScript compilation
- Set up path aliases for clean imports
- Enable strict type checking for enhanced code quality

#### 2. Database Design and Schema Definition

**Entity-Relationship Diagram (ERD)**:
Design a comprehensive database schema that captures all relationships between entities:

**Core Entities**:
- **Users**: Authentication, roles (Admin, Veterinarian, Farm Manager, Viewer), permissions
- **Livestock**: Individual animal records with identification, species, breed, birthdate, gender, status
- **Health Records**: Vaccination history, medical treatments, medications, diagnoses, body condition scores
- **Breeding Records**: Mating events, pregnancy tracking, pedigree information, breeding performance
- **Offspring**: Birth records linked to dams and sires, birth weights, conditions
- **Activity Logs**: System audit trail for all CRUD operations
- **Reports**: Generated report metadata and export history

**Database Relationships**:
- One-to-Many: User → Activity Logs, Livestock → Health Records, Livestock → Breeding Records
- Many-to-Many: Breeding Records (Dam & Sire relationships)
- Self-Referencing: Livestock → Livestock (parent-offspring relationships)

**Prisma Schema Example**:
```prisma
model User {
  id        String   @id @default(uuid())
  email     String   @unique
  password  String
  name      String
  role      Role     @default(VIEWER)
  status    Status   @default(ACTIVE)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  activityLogs ActivityLog[]
  healthRecords HealthRecord[]
  breedingRecords BreedingRecord[]
}

model Livestock {
  id            String   @id @default(uuid())
  tagId         String   @unique
  name          String
  species       String
  breed         String
  gender        Gender
  birthDate     DateTime
  weight        Float?
  color         String?
  status        LivestockStatus @default(ACTIVE)
  imageUrl      String?
  notes         String?
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
  
  healthRecords HealthRecord[]
  breedingAsDam BreedingRecord[] @relation("Dam")
  breedingAsSire BreedingRecord[] @relation("Sire")
  offspring Offspring[]
  damId         String?
  dam           Livestock? @relation("ParentOffspring", fields: [damId], references: [id])
  children      Livestock[] @relation("ParentOffspring")
}

model HealthRecord {
  id            String   @id @default(uuid())
  livestockId   String
  livestock     Livestock @relation(fields: [livestockId], references: [id], onDelete: Cascade)
  recordType    HealthRecordType
  date          DateTime
  diagnosis     String?
  treatment     String?
  medication    String?
  veterinarian  String?
  notes         String?
  nextDueDate   DateTime?
  recordedBy    String
  user          User @relation(fields: [recordedBy], references: [id])
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
  
  @@index([livestockId])
}

model BreedingRecord {
  id            String   @id @default(uuid())
  damId         String
  dam           Livestock @relation("Dam", fields: [damId], references: [id])
  sireId        String
  sire          Livestock @relation("Sire", fields: [sireId], references: [id])
  matingDate    DateTime
  status        BreedingStatus @default(PENDING)
  expectedDueDate DateTime?
  actualBirthDate DateTime?
  notes         String?
  recordedBy    String
  user          User @relation(fields: [recordedBy], references: [id])
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
  
  offspring     Offspring[]
  pregnancyRecords PregnancyRecord[]
  
  @@index([damId])
  @@index([sireId])
}

model PregnancyRecord {
  id            String   @id @default(uuid())
  breedingId    String   @unique
  breeding      BreedingRecord @relation(fields: [breedingId], references: [id], onDelete: Cascade)
  stage         PregnancyStage @default(EARLY)
  bcsRecords    Json[] // Array of Body Condition Score records
  birthStatus   BirthStatus @default(PREGNANT)
  notes         String?
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
}

model Offspring {
  id            String   @id @default(uuid())
  breedingId    String
  breeding      BreedingRecord @relation(fields: [breedingId], references: [id], onDelete: Cascade)
  livestockId   String?
  livestock     Livestock? @relation(fields: [livestockId], references: [id])
  gender        Gender
  birthWeight   Float?
  condition     String
  notes         String?
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
  
  @@index([breedingId])
}

model ActivityLog {
  id            String   @id @default(uuid())
  userId        String
  user          User @relation(fields: [userId], references: [id])
  action        String
  entityType    String
  entityId      String?
  description   String
  ipAddress     String?
  createdAt     DateTime @default(now())
  
  @@index([userId])
  @@index([createdAt])
}

enum Role {
  ADMIN
  VETERINARIAN
  FARM_MANAGER
  VIEWER
}

enum Status {
  ACTIVE
  INACTIVE
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

enum HealthRecordType {
  VACCINATION
  CHECKUP
  TREATMENT
  SURGERY
  DEWORMING
  OTHER
}

enum BreedingStatus {
  PENDING
  CONFIRMED
  FAILED
  COMPLETED
}

enum PregnancyStage {
  EARLY
  MID
  LATE
}

enum BirthStatus {
  PREGNANT
  GIVEN_BIRTH
}
```

**Database Migrations**:
- Use Prisma Migrate to create and manage database schema changes
- Version control all migration files in Git
- Test migrations in development before applying to production

#### 3. API Endpoint Development

Develop comprehensive RESTful API endpoints organized by resource:

**Authentication Endpoints**:
- `POST /api/auth/register` - Register new user (Admin only)
- `POST /api/auth/login` - User authentication, returns JWT token
- `POST /api/auth/logout` - Invalidate session
- `GET /api/auth/me` - Get current user profile
- `PUT /api/auth/profile` - Update user profile
- `POST /api/auth/change-password` - Change user password
- `POST /api/auth/forgot-password` - Request password reset
- `POST /api/auth/reset-password` - Reset password with token

**Livestock Endpoints**:
- `GET /api/livestock` - Get all livestock (with pagination, filtering, search)
- `GET /api/livestock/:id` - Get single livestock by ID
- `POST /api/livestock` - Create new livestock entry
- `PUT /api/livestock/:id` - Update livestock information
- `DELETE /api/livestock/:id` - Delete livestock (soft delete)
- `POST /api/livestock/:id/photo` - Upload livestock photo
- `GET /api/livestock/statistics` - Get livestock statistics for dashboard

**Health Records Endpoints**:
- `GET /api/health-records` - Get all health records (with filters)
- `GET /api/health-records/:id` - Get single health record
- `GET /api/livestock/:id/health-records` - Get health records for specific livestock
- `POST /api/health-records` - Create new health record
- `PUT /api/health-records/:id` - Update health record
- `DELETE /api/health-records/:id` - Delete health record
- `GET /api/health-records/upcoming` - Get upcoming vaccinations/treatments

**Breeding Endpoints**:
- `GET /api/breeding` - Get all breeding records
- `GET /api/breeding/:id` - Get single breeding record
- `POST /api/breeding` - Create new breeding record
- `PUT /api/breeding/:id` - Update breeding record
- `DELETE /api/breeding/:id` - Delete breeding record
- `GET /api/breeding/statistics` - Get breeding performance metrics

**Pregnancy Endpoints**:
- `GET /api/pregnancy` - Get all pregnancy records
- `GET /api/pregnancy/:id` - Get single pregnancy record
- `POST /api/pregnancy/:id/bcs` - Add body condition score
- `PUT /api/pregnancy/:id` - Update pregnancy record
- `POST /api/pregnancy/:id/birth` - Record birth with offspring

**User Management Endpoints** (Admin only):
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get single user
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Deactivate user
- `PUT /api/users/:id/status` - Toggle user active/inactive status

**Activity Log Endpoints**:
- `GET /api/activity-logs` - Get activity logs (with pagination and filters)
- `GET /api/activity-logs/user/:userId` - Get logs for specific user

**Reports Endpoints**:
- `GET /api/reports/livestock` - Generate livestock report
- `GET /api/reports/health` - Generate health statistics report
- `GET /api/reports/breeding` - Generate breeding performance report
- `POST /api/reports/export` - Export report as PDF/Excel

#### 4. Business Logic Implementation

Implement robust business logic for:

**Authentication & Authorization**:
- JWT token generation and validation
- Role-based access control (RBAC) middleware
- Password strength validation
- Secure password hashing with bcrypt (salt rounds: 10)

**Data Validation**:
- Input sanitization to prevent SQL injection and XSS attacks
- Required field validation
- Data type and format validation (email, dates, numbers)
- Business rule validation (e.g., breeding date cannot be in future)

**Automated Calculations**:
- Age calculation from birthdate
- Days pregnant calculation
- Expected due date calculation (species-specific gestation periods)
- Body condition score trends
- Breeding success rates

**Scheduled Tasks**:
- Daily check for upcoming vaccinations and send alerts
- Weekly pregnancy status updates
- Monthly breeding performance reports
- Database backup automation

#### 5. API Documentation

- Use Swagger/OpenAPI for comprehensive API documentation
- Document all endpoints with request/response examples
- Include authentication requirements for each endpoint
- Provide error response formats and status codes

#### 6. Error Handling and Logging

**Error Handling**:
- Centralized error handling middleware
- Consistent error response format
- Proper HTTP status codes
- Detailed error messages for development, generic for production

**Logging**:
- Request/response logging with Morgan
- Error logging with Winston or similar
- Database query logging for debugging
- Activity audit trail for compliance

#### 7. Testing Phases

**Unit Testing**:
- Test individual functions and utility methods
- Test database models and queries
- Use Jest or Mocha testing frameworks
- Achieve minimum 80% code coverage

**Integration Testing**:
- Test API endpoints end-to-end
- Test database transactions and rollbacks
- Test authentication and authorization flows
- Use Supertest for HTTP endpoint testing

**Load Testing**:
- Test API performance under high load
- Test database connection pooling
- Identify and optimize bottlenecks
- Use tools like Apache JMeter or Artillery

**Security Testing**:
- Test for SQL injection vulnerabilities
- Test for XSS and CSRF attacks
- Verify authentication and authorization
- Test rate limiting and DDoS protection

#### 8. Deployment and DevOps

**Containerization**:
- Create Dockerfile for backend application
- Use Docker Compose for local development with PostgreSQL
- Configure multi-stage builds for optimized production images

**CI/CD Pipeline**:
- Set up GitHub Actions or similar for automated testing
- Automated deployment to staging and production environments
- Database migration automation
- Environment-specific configuration management

**Hosting Options**:
- **Frontend**: Vercel, Netlify, AWS S3 + CloudFront, or Render (React static builds)
- **Backend**: Railway, Render, Heroku, AWS EC2, DigitalOcean App Platform, or AWS Elastic Beanstalk (Node.js/Express)
- **Database**: Railway PostgreSQL, Render PostgreSQL, AWS RDS PostgreSQL, Azure Database for PostgreSQL, DigitalOcean Managed Databases, or Supabase
- **File Storage**: AWS S3, Cloudinary, or Uploadcare (for livestock photos and documents)

### Deployment Strategy for PERN Stack

The recommended deployment approach for DigiFarm follows a modern, scalable architecture:

#### Option 1: Vercel + Railway (Recommended for Development & Production) ⭐

**Why**: Best developer experience, seamless deployments, generous free tiers, automatic HTTPS

**Frontend Deployment (Vercel)**:
- Deploy React application with zero configuration
- Automatic builds from GitHub on every push
- Global CDN for fast content delivery
- Preview deployments for every pull request
- Custom domain support with automatic SSL
- Environment variables for API endpoints
- **Cost**: Free for personal projects, $20/month for teams

**Setup**:
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy frontend
cd frontend
vercel --prod
```

**Backend + Database Deployment (Railway)**:
- Node.js/Express API with automatic deployments
- PostgreSQL database included in the same project
- Environment variables management dashboard
- Automatic HTTPS and custom domains
- Built-in monitoring and logging
- Horizontal scaling support
- **Cost**: $5/month free credit, then ~$10-25/month based on usage

**Setup**:
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and initialize
railway login
railway init

# Deploy backend
railway up

# Add PostgreSQL
railway add postgresql
```

**Architecture Flow**:
```
User Browser
    ↓
Vercel CDN (React App)
    ↓
Railway API Server (Node.js/Express)
    ↓
Railway PostgreSQL Database
```

#### Option 2: Render (All-in-One Solution)

**Why**: Single platform for frontend, backend, and database with predictable pricing

**Components**:
- **Web Service (Frontend)**: Static React build served via Render CDN
- **Web Service (Backend)**: Node.js/Express API server
- **PostgreSQL Database**: Managed PostgreSQL instance with automatic backups

**Cost**: 
- Frontend: Free (with auto-sleep after inactivity)
- Backend: Free tier available (spins down after 15 min inactivity) or $7/month for always-on
- Database: Free 90-day trial, then $7/month (256MB RAM)
- **Total**: $0-14/month

**Deployment Configuration**:
```yaml
# render.yaml
services:
  # Frontend
  - type: web
    name: digifarm-frontend
    env: static
    buildCommand: npm install && npm run build
    staticPublishPath: ./dist
    envVars:
      - key: VITE_API_URL
        fromService:
          type: web
          name: digifarm-backend
          envVarKey: RENDER_EXTERNAL_URL

  # Backend API
  - type: web
    name: digifarm-backend
    env: node
    buildCommand: npm install && npm run build
    startCommand: npm start
    envVars:
      - key: DATABASE_URL
        fromDatabase:
          name: digifarm-db
          property: connectionString
      - key: JWT_SECRET
        generateValue: true
      - key: NODE_ENV
        value: production

databases:
  - name: digifarm-db
    databaseName: digifarm
    user: digifarm_user
```

#### Option 3: DigitalOcean App Platform (Production-Grade)

**Why**: Excellent balance of simplicity and control with predictable pricing

**Setup**:
- Single Git repository deployment
- Automatic SSL certificates
- Built-in monitoring and alerts
- Scalable infrastructure
- Direct PostgreSQL connection pooling

**Cost**: ~$17/month
- Frontend: $5/month (512MB RAM)
- Backend: $5/month (512MB RAM)
- Database: $7/month (1GB RAM, 10GB storage)

**Deployment**:
```yaml
# .do/app.yaml
name: digifarm
services:
  - name: frontend
    github:
      repo: 0xJape/DigiFarm
      branch: main
    source_dir: /
    build_command: npm run build
    run_command: npm run preview
    envs:
      - key: VITE_API_URL
        value: ${backend.PUBLIC_URL}
    
  - name: backend
    github:
      repo: 0xJape/DigiFarm
      branch: main
    source_dir: /server
    build_command: npm install
    run_command: npm start
    envs:
      - key: DATABASE_URL
        value: ${db.DATABASE_URL}
      - key: JWT_SECRET
        type: SECRET

databases:
  - name: db
    engine: PG
    version: "15"
```

#### Option 4: AWS (Enterprise Scale)

**Why**: Maximum scalability, complete control, extensive AWS ecosystem integration

**Components**:
- **Frontend**: S3 (static hosting) + CloudFront (CDN)
- **Backend**: Elastic Beanstalk (Node.js) or ECS (Docker containers)
- **Database**: RDS PostgreSQL with Multi-AZ for high availability
- **File Storage**: S3 for livestock images
- **Load Balancing**: Application Load Balancer
- **Caching**: ElastiCache Redis (optional)
- **Monitoring**: CloudWatch

**Cost**: ~$30-100/month (depending on traffic and storage)

**Deployment with GitHub Actions**:
```yaml
# .github/workflows/deploy-aws.yml
name: Deploy to AWS
on:
  push:
    branches: [main]

jobs:
  deploy-frontend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Build React App
        run: |
          npm install
          npm run build
      - name: Deploy to S3
        run: |
          aws s3 sync ./dist s3://${{ secrets.S3_BUCKET }}
          aws cloudfront create-invalidation --distribution-id ${{ secrets.CF_DIST_ID }} --paths "/*"

  deploy-backend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to Elastic Beanstalk
        run: |
          eb deploy digifarm-production
```

#### Option 5: Supabase (Backend as a Service Alternative)

**Why**: Reduce backend development time with auto-generated APIs, built-in authentication

**Architecture Modification**:
- Replace Express.js API with Supabase auto-generated REST APIs
- Use Supabase Client SDK in React frontend
- Built-in PostgreSQL database with Row Level Security (RLS)
- Real-time subscriptions for live data updates
- Built-in file storage for livestock photos

**Cost**: Free tier (500MB database, 1GB storage) or $25/month Pro

**Implementation**:
```typescript
// Frontend: Supabase Client
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_ANON_KEY
)

// Fetch livestock data
const { data, error } = await supabase
  .from('livestock')
  .select('*')
  .order('created_at', { ascending: false })

// Real-time updates
const channel = supabase
  .channel('livestock-changes')
  .on('postgres_changes', 
    { event: '*', schema: 'public', table: 'livestock' },
    (payload) => console.log('Change received!', payload)
  )
  .subscribe()
```

### Pre-Deployment Checklist

Before deploying DigiFarm to production, ensure the following:

**Security**:
- [ ] Environment variables properly configured (no hardcoded secrets)
- [ ] JWT secrets generated securely (minimum 32 characters)
- [ ] Database credentials secured with strong passwords
- [ ] CORS configured to allow only frontend domain
- [ ] Rate limiting implemented on API endpoints
- [ ] Helmet.js configured for security headers
- [ ] SQL injection prevention via Prisma parameterized queries
- [ ] XSS protection implemented on all inputs
- [ ] HTTPS enforced on all endpoints

**Database**:
- [ ] Database migrations tested in staging environment
- [ ] Database indexes created for frequently queried fields
- [ ] Database connection pooling configured
- [ ] Automated database backups scheduled
- [ ] Database rollback strategy documented
- [ ] Database credentials rotated regularly

**Performance**:
- [ ] React production build optimized and minified
- [ ] Lazy loading implemented for large components
- [ ] Image optimization for livestock photos
- [ ] API response caching strategy implemented
- [ ] Database query optimization completed
- [ ] CDN configured for static assets

**Monitoring**:
- [ ] Error logging configured (e.g., Sentry, LogRocket)
- [ ] Application performance monitoring (APM) set up
- [ ] Database performance monitoring enabled
- [ ] Uptime monitoring configured (e.g., UptimeRobot, Pingdom)
- [ ] Alert notifications configured for critical errors

**Testing**:
- [ ] All unit tests passing
- [ ] Integration tests completed
- [ ] End-to-end tests passing
- [ ] Load testing performed
- [ ] Security vulnerability scanning completed

**Documentation**:
- [ ] API documentation updated (Swagger/OpenAPI)
- [ ] Deployment runbook created
- [ ] Environment variables documented
- [ ] Troubleshooting guide prepared
- [ ] User manual finalized

### Continuous Integration/Continuous Deployment (CI/CD)

Implement automated CI/CD pipeline using GitHub Actions:

```yaml
# .github/workflows/ci-cd.yml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres:15
        env:
          POSTGRES_PASSWORD: postgres
          POSTGRES_DB: digifarm_test
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: |
          npm install
          cd server && npm install
          
      - name: Run tests
        env:
          DATABASE_URL: postgresql://postgres:postgres@localhost:5432/digifarm_test
        run: |
          npm test
          cd server && npm test
          
      - name: Build
        run: |
          npm run build
          cd server && npm run build

  deploy-staging:
    needs: test
    if: github.ref == 'refs/heads/develop'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to Staging
        run: |
          # Deploy to staging environment
          railway up --environment staging

  deploy-production:
    needs: test
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy Frontend to Vercel
        run: |
          npm install -g vercel
          vercel --prod --token=${{ secrets.VERCEL_TOKEN }}
      - name: Deploy Backend to Railway
        run: |
          npm install -g @railway/cli
          railway up --environment production
```

### Environment Configuration

**Frontend Environment Variables** (`.env.production`):
```bash
VITE_API_URL=https://api.digifarm.com
VITE_APP_NAME=DigiFarm
VITE_APP_VERSION=1.0.0
```

**Backend Environment Variables**:
```bash
NODE_ENV=production
PORT=3000

# Database
DATABASE_URL=postgresql://user:password@host:5432/digifarm
DATABASE_POOL_MIN=2
DATABASE_POOL_MAX=10

# Authentication
JWT_SECRET=your-super-secret-jwt-key-minimum-32-chars
JWT_EXPIRATION=7d
REFRESH_TOKEN_SECRET=your-refresh-token-secret
REFRESH_TOKEN_EXPIRATION=30d

# CORS
FRONTEND_URL=https://digifarm.com
ALLOWED_ORIGINS=https://digifarm.com,https://www.digifarm.com

# File Upload
UPLOAD_MAX_SIZE=5242880
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# Email (for notifications)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=notifications@digifarm.com
SMTP_PASSWORD=your-email-password

# Monitoring
SENTRY_DSN=your-sentry-dsn
LOG_LEVEL=info
```

### Database Backup Strategy

**Automated Backups**:
- Daily automated backups at 2 AM (off-peak hours)
- Retention: 7 daily backups, 4 weekly backups, 3 monthly backups
- Backup verification tests monthly

**Backup Script** (for self-hosted PostgreSQL):
```bash
#!/bin/bash
# backup-database.sh

TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
BACKUP_DIR="/backups/digifarm"
DB_NAME="digifarm"

# Create backup
pg_dump -U postgres -d $DB_NAME | gzip > "$BACKUP_DIR/backup_$TIMESTAMP.sql.gz"

# Remove backups older than 7 days
find $BACKUP_DIR -name "backup_*.sql.gz" -mtime +7 -delete

# Upload to S3 (optional)
aws s3 cp "$BACKUP_DIR/backup_$TIMESTAMP.sql.gz" s3://digifarm-backups/
```

### Scaling Considerations

**Horizontal Scaling** (as user base grows):
- Load balancer to distribute traffic across multiple backend instances
- Database read replicas for read-heavy operations
- Redis caching layer for frequently accessed data
- CDN for static assets and images

**Vertical Scaling**:
- Increase server CPU and RAM as needed
- Upgrade database tier for better performance
- Optimize database queries and indexes

By following this comprehensive deployment strategy for the PERN stack, the development team ensures that DigiFarm is deployed on a scalable, secure, and maintainable infrastructure that supports efficient livestock data management, real-time monitoring, and provides excellent performance for all farm stakeholders.

## 3.4.4 Frontend Development

The frontend development of DigiLink focused on creating a dynamic, user-friendly, and responsive user interface using React, TypeScript, and Tailwind CSS. The aim was to ensure a seamless user experience with modern design patterns and efficient state management.

### Frontend Development Plan

**Setup of Development Environment**:
1. Configure the frontend development environment with React, TypeScript, Tailwind CSS, and Vite
2. Version control: Establish version control using Git, with GitHub as the remote repository to manage frontend code changes
3. Install necessary dependencies including Lucide React for icons, Recharts for data visualization

**Design and Prototyping**:
1. **UI/UX Design**: Create wireframes and mockups based on the project's design guidelines to ensure an intuitive and visually appealing interface. Figma was used for design prototyping
2. **User Feedback**: Gather feedback on the design prototypes from farm stakeholders and potential users to refine the user interface
3. **Design System**: Establish a consistent design system with reusable components, color schemes, and typography

**Implementation of Component Architecture**:
1. **Component Library**: Develop reusable React components (Button, Card, Modal, Badge, FormControls) to ensure consistency across the application
2. **Page Components**: Create dedicated page components for Dashboard, Livestock Management, Health Records, Breeding, Pregnancy Monitoring, Reports, and User Management
3. **Responsive Design**: Use Tailwind CSS to ensure the design is responsive and works on various devices (desktop, tablet, mobile)

**Dynamic Content and Interaction**:
1. **React State Management**: Implement component-level state using React hooks (useState, useEffect) for local UI state
2. **Global State with Zustand**: Utilize Zustand for application-wide state management including livestock data, user sessions, and system settings
3. **Form Handling**: Develop robust form handling with validation for data entry across livestock profiles, health records, and breeding information

**Data Visualization**:
1. **Charts and Graphs**: Integrate Recharts library to provide visual analytics for livestock statistics, health trends, and breeding performance
2. **Interactive Dashboards**: Create dynamic dashboards that update in real-time based on user interactions and data changes

**Testing Phases**:
1. **Unit Testing**: Conduct unit tests for individual React components to ensure they render and function correctly in isolation
2. **Integration Testing**: Perform integration tests to verify that components interact seamlessly with state management and data flows
3. **User Acceptance Testing (UAT)**: Involve farm managers, veterinarians, and farm workers in testing the frontend functionalities to gather feedback and identify any issues

**Performance Optimization**:
1. **Responsive Design**: Ensure the frontend design is responsive and works smoothly across different devices and screen sizes
2. **Load Time Optimization**: Optimize frontend performance by utilizing Vite's build optimization, code splitting, and lazy loading of components
3. **Asset Optimization**: Compress images and optimize asset loading for faster page load times

**Accessibility and Compliance**:
1. **Cross-Browser Compatibility**: Test the application across various browsers (Chrome, Firefox, Safari, Edge) to ensure consistent performance and appearance
2. **Accessibility Standards**: Follow WCAG guidelines to ensure the application is accessible to users with disabilities

## 3.5 Build by Feature

It is the final phase of the FDD (Feature-Driven Development) methodology, where the actual coding, implementation, and integration of system features takes place. This phase follows the design by feature stage and focuses on developing small, functional components that collectively form a fully operational livestock management system.

## 3.5.1 Develop the Feature

Each feature was implemented according to the specifications, design principles, and coding practices of the system. After development, the program code went through testing and verification to ensure quality, functionality, and alignment with system requirements.

### Key Features Implemented

1. **Livestock Management**
   - Individual animal profiles with detailed information
   - Search and filter capabilities
   - Photo upload and management
   - Custom identification tags

2. **Health Records**
   - Vaccination schedules and tracking
   - Medical treatment history
   - Body condition score monitoring
   - Health alerts and notifications

3. **Breeding Program**
   - Mating records and pedigree tracking
   - Pregnancy monitoring with due date calculations
   - Offspring documentation
   - Breeding performance analytics

4. **Pregnancy Monitoring**
   - Monthly body condition score (BCS) recording
   - Pregnancy progress tracking
   - Birth recording with multiple offspring support
   - Dam and sire information linkage

5. **User Management**
   - Role-based access control (Admin, Veterinarian, Farm Manager, Viewer)
   - User activity logging
   - Account management (add, edit, deactivate users)

6. **Reports and Analytics**
   - Comprehensive livestock reports with PDF export
   - Health statistics and trends
   - Breeding performance metrics
   - Visual charts and data visualization

This phase included incrementally delivering functional features to enhance system reliability. Additionally, it ensured that every implemented feature aligned with the specifications and objectives. Identifying and resolving defects through continuous testing and feedback, and preparing the system for deployment in a live environment. By following this approach, it streamlined the development process, reducing risks while improving the system's adaptability and performance.

## 3.5.2 Alpha Testing

Alpha testing was conducted to examine individual components for functionality. This phase served as the initial step in the testing process and ensured that each component functioned correctly on its own. By testing individual units, it became easier to identify and resolve issues or malfunctions in specific areas of the system.

### Alpha Testing Activities

In terms of alpha testing, the researchers carried out the following activities to ensure each feature worked as intended:

- **Data Entry Testing**: Entered sample livestock data to test the accuracy and functionality of data input forms across all modules (livestock profiles, health records, breeding information)

- **Bug Detection**: Detected and resolved system bugs that affected performance, including state management issues, form validation errors, and navigation problems

- **UI/UX Refinement**: Reviewed and corrected typographical and formatting errors in the user interface

- **Component Testing**: Tested individual React components in isolation to ensure proper rendering and functionality

- **State Management Validation**: Refined Zustand store implementations to enhance overall system stability and reliability

- **Cross-Feature Integration**: Tested data flow between different features (e.g., linking breeding records to pregnancy monitoring)

The activities were conducted iteratively, with each cycle focused on addressing identified issues, ensuring the system met the specified requirements, and eliminating errors, bugs, and other discrepancies to achieve a fully functional and stable system.

## 3.5.3 Beta Testing

Beta testing was conducted to verify that all system components worked together seamlessly. This testing phase assessed the interactions between different modules, state management, and user workflows to identify and address any integration issues. By testing the various components in a real-world farm environment, the system aimed to ensure reliability, consistency, and proper functionality of the proposed system. This phase was completed to ensure that the system operated effectively and without any issues.

### Beta Testing Participants

The roles involved in beta testing included:

- **Farm Manager**: Primary system administrator responsible for overall livestock management operations
- **Veterinarian**: Medical professional testing health records, vaccination schedules, and pregnancy monitoring features
- **Farm Workers**: Contributors assigned to test daily data entry, livestock tracking, and activity logging
- **System Administrator**: Technical administrator responsible for user management and system configuration

These individuals were responsible for evaluating specific components of the system to ensure each function operated as intended.

### Beta Testing Activities

The researchers conducted the following activities:

- **System Demonstration**: Demonstrated the system to intended users, showcasing all major features and workflows

- **User Manual Provision**: Provided a comprehensive user manual to assist users in understanding and operating the system efficiently

- **Functionality Testing**: Tested the system's functionalities in actual farm scenarios to ensure proper operation:
  - Adding new livestock entries with complete profiles
  - Recording health treatments and vaccinations
  - Managing breeding programs and tracking pregnancies
  - Generating reports and exporting data
  - Managing user accounts and permissions

- **User Feedback Collection**: Collected user feedback through surveys and interviews to identify areas of improvement and ensure the system meets user needs

- **Performance Monitoring**: Monitored system performance under real-world usage conditions, including data entry speed, search functionality, and report generation

By conducting system testing, the researchers were able to evaluate the overall performance, functionality, and usability of the system, ensuring it met the intended requirements and provided a smooth user experience for all farm stakeholders.

## 3.5.4 Acceptance and Usability Testing

To evaluate the usability and acceptance of DigiLink, the researchers adopted the Unified Theory of Acceptance and Use of Technology (UTAUT) framework. This model offers a comprehensive framework for examining the key factors that affect people's acceptance and use of technology. The theoretical model of UTAUT suggests that the actual use of technology is determined by behavioral intention. The perceived likelihood of adopting the technology is dependent on the direct effect of four key constructs:

### UTAUT Framework Components

1. **Performance Expectancy**: The degree to which farm managers and workers believe that using DigiLink will help them improve their livestock management efficiency and productivity

2. **Effort Expectancy**: The degree of ease associated with the use of the system, including the learning curve and day-to-day operation simplicity

3. **Social Influence**: The extent to which users perceive that important others (farm owners, veterinarians, other farm managers) believe they should use the livestock management system

4. **Facilitating Conditions**: The degree to which users believe that organizational and technical infrastructure exists to support the use of the system, including training, technical support, and hardware availability

### Usability Evaluation Metrics

The acceptance and usability testing evaluated the following metrics:

- **Task Completion Rate**: Percentage of users who successfully completed core tasks (adding livestock, recording health data, generating reports)
- **Time on Task**: Average time required to complete common operations
- **Error Rate**: Frequency of user errors during system operation
- **Satisfaction Score**: User satisfaction ratings based on post-testing surveys
- **System Usability Scale (SUS)**: Standardized questionnaire to assess overall system usability

### Testing Outcomes

The acceptance testing aimed to:

- Validate that DigiLink meets the functional requirements of farm operations
- Ensure the system provides tangible benefits over manual record-keeping methods
- Confirm that users can effectively operate the system with minimal training
- Identify any remaining usability issues or feature gaps
- Obtain formal acceptance from key stakeholders for system deployment

By conducting comprehensive acceptance and usability testing using the UTAUT framework, the researchers ensured that DigiLink was not only technically sound but also well-received by its intended users, maximizing the likelihood of successful adoption in real-world farm management scenarios.

---

## Summary

The development of DigiLink followed a structured, iterative approach that prioritized user needs and system reliability. From initial prototyping to final acceptance testing, each phase built upon the previous one, ensuring a robust, user-friendly livestock management system. The use of modern technologies (React, TypeScript, Tailwind CSS) combined with proven development methodologies (FDD, UTAUT) resulted in a comprehensive solution that addresses the challenges of manual livestock record-keeping and provides farm stakeholders with powerful tools for efficient animal management.
