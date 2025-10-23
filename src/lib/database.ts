// Example database utilities for Next.js backend
// You can use any database: PostgreSQL, MongoDB, MySQL, etc.

import { Pool } from 'pg';

// PostgreSQL example
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

export async function createQuote(quoteData: {
  name: string;
  email: string;
  phone: string;
  origin: string;
  destination: string;
  cargoType: string;
  weight: string;
  date: string;
}) {
  const client = await pool.connect();
  try {
    const result = await client.query(
      `INSERT INTO quotes (name, email, phone, origin, destination, cargo_type, weight, preferred_date, created_at)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, NOW())
       RETURNING id, quote_number`,
      [quoteData.name, quoteData.email, quoteData.phone, quoteData.origin, 
       quoteData.destination, quoteData.cargoType, quoteData.weight, quoteData.date]
    );
    return result.rows[0];
  } finally {
    client.release();
  }
}

export async function createContact(contactData: {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
}) {
  const client = await pool.connect();
  try {
    const result = await client.query(
      `INSERT INTO contacts (name, email, phone, company, subject, message, created_at)
       VALUES ($1, $2, $3, $4, $5, $6, NOW())
       RETURNING id, ticket_number`,
      [contactData.name, contactData.email, contactData.phone, 
       contactData.company, contactData.subject, contactData.message]
    );
    return result.rows[0];
  } finally {
    client.release();
  }
}

export async function getTrackingInfo(trackingNumber: string) {
  const client = await pool.connect();
  try {
    const result = await client.query(
      `SELECT * FROM shipments WHERE tracking_number = $1`,
      [trackingNumber]
    );
    return result.rows[0];
  } finally {
    client.release();
  }
}

// MongoDB example (using Mongoose)
/*
import mongoose from 'mongoose';

const QuoteSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  origin: String,
  destination: String,
  cargoType: String,
  weight: String,
  date: Date,
  createdAt: { type: Date, default: Date.now }
});

export const Quote = mongoose.models.Quote || mongoose.model('Quote', QuoteSchema);

export async function createQuote(quoteData: any) {
  const quote = new Quote(quoteData);
  return await quote.save();
}
*/
