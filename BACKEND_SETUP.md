# Next.js Backend Setup Guide

## Overview
Your Next.js application can serve as a full-stack application with built-in backend capabilities. Here's how to set it up:

## 1. API Routes (Already Created)
- `/api/quote` - Handle quote requests
- `/api/track` - Handle shipment tracking
- `/api/contact` - Handle contact form submissions

## 2. Database Setup

### Option A: PostgreSQL (Recommended)
```bash
# Install PostgreSQL dependencies
npm install pg @types/pg

# Create database
createdb logistics_db

# Add to .env.local
DATABASE_URL=postgresql://username:password@localhost:5432/logistics_db
```

### Option B: MongoDB
```bash
# Install MongoDB dependencies
npm install mongoose

# Add to .env.local
MONGODB_URI=mongodb://localhost:27017/logistics
```

### Option C: SQLite (Development)
```bash
# Install SQLite dependencies
npm install sqlite3 better-sqlite3

# Add to .env.local
DATABASE_URL=file:./dev.db
```

## 3. Environment Variables
Create `.env.local` file:
```env
# Database
DATABASE_URL=your_database_url

# Email Service
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# External APIs
UPS_API_KEY=your-ups-api-key
FEDEX_API_KEY=your-fedex-api-key

# Application
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

## 4. Database Schema (PostgreSQL Example)
```sql
-- Quotes table
CREATE TABLE quotes (
  id SERIAL PRIMARY KEY,
  quote_number VARCHAR(50) UNIQUE NOT NULL,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  phone VARCHAR(20),
  origin VARCHAR(100) NOT NULL,
  destination VARCHAR(100) NOT NULL,
  cargo_type VARCHAR(50),
  weight INTEGER,
  preferred_date DATE,
  status VARCHAR(20) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Contacts table
CREATE TABLE contacts (
  id SERIAL PRIMARY KEY,
  ticket_number VARCHAR(50) UNIQUE NOT NULL,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  phone VARCHAR(20),
  company VARCHAR(100),
  subject VARCHAR(200),
  message TEXT NOT NULL,
  status VARCHAR(20) DEFAULT 'new',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Shipments table
CREATE TABLE shipments (
  id SERIAL PRIMARY KEY,
  tracking_number VARCHAR(50) UNIQUE NOT NULL,
  quote_id INTEGER REFERENCES quotes(id),
  status VARCHAR(50) NOT NULL,
  current_location VARCHAR(100),
  estimated_delivery DATE,
  delivered_date DATE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Shipment history table
CREATE TABLE shipment_history (
  id SERIAL PRIMARY KEY,
  shipment_id INTEGER REFERENCES shipments(id),
  status VARCHAR(50) NOT NULL,
  location VARCHAR(100) NOT NULL,
  event_date TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## 5. Running the Backend

### Development
```bash
npm run dev
```

### Production
```bash
npm run build
npm start
```

## 6. API Endpoints

### Quote API
- **POST** `/api/quote`
- **Body**: `{ name, email, phone, origin, destination, cargoType, weight, date }`
- **Response**: `{ success: true, quoteId, estimatedPrice, message }`

### Tracking API
- **GET** `/api/track?trackingNumber=TRK-123456`
- **Response**: `{ success: true, trackingNumber, status, location, estimatedDelivery, history }`

### Contact API
- **POST** `/api/contact`
- **Body**: `{ name, email, phone, company, subject, message }`
- **Response**: `{ success: true, message, ticketId }`

## 7. Server Actions
Use the `submitQuote`, `submitContact`, and `trackShipment` functions from `@/lib/actions` in your components.

## 8. Middleware
The `middleware.ts` file handles:
- CORS headers for API routes
- Rate limiting
- Authentication checks

## 9. Deployment Options

### Vercel (Recommended)
- Automatic deployments
- Built-in database support
- Environment variables management

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Traditional VPS
- Install Node.js and PostgreSQL
- Use PM2 for process management
- Set up reverse proxy with Nginx

## 10. Testing the Backend

### Test API Routes
```bash
# Test quote API
curl -X POST http://localhost:3000/api/quote \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","origin":"New York","destination":"Los Angeles"}'

# Test tracking API
curl http://localhost:3000/api/track?trackingNumber=TRK-123456

# Test contact API
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Jane Doe","email":"jane@example.com","message":"Hello"}'
```

## 11. Advanced Features

### Authentication
```bash
npm install next-auth
```

### File Uploads
```bash
npm install multer
```

### Real-time Updates
```bash
npm install socket.io
```

### Caching
```bash
npm install redis
```

## 12. Monitoring and Logging
- Use Vercel Analytics for production monitoring
- Implement logging with Winston or Pino
- Set up error tracking with Sentry
