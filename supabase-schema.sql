-- SEI Saadiyat Database Schema
-- Run this in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create leads table
CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  country TEXT NOT NULL,
  budget_range TEXT,
  preferred_unit TEXT,
  purchase_timeline TEXT,
  lead_source TEXT,
  ip_address TEXT,
  user_agent TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create events table for tracking
CREATE TABLE IF NOT EXISTS events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  session_id TEXT NOT NULL,
  event_type TEXT NOT NULL,
  event_data JSONB DEFAULT '{}',
  page_url TEXT,
  referrer TEXT,
  user_agent TEXT,
  ip_address TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_events_session_id ON events(session_id);
CREATE INDEX IF NOT EXISTS idx_events_event_type ON events(event_type);
CREATE INDEX IF NOT EXISTS idx_events_created_at ON events(created_at DESC);

-- Enable Row Level Security
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;

-- Create policies for leads table
-- Allow insert from anon users (for form submissions)
CREATE POLICY "Allow insert for all" ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow select only for authenticated users (admin dashboard)
CREATE POLICY "Allow select for authenticated" ON leads
  FOR SELECT
  TO authenticated
  USING (true);

-- Create policies for events table
-- Allow insert from anon users (for tracking)
CREATE POLICY "Allow insert for all" ON events
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow select only for authenticated users (analytics)
CREATE POLICY "Allow select for authenticated" ON events
  FOR SELECT
  TO authenticated
  USING (true);

-- Create a view for lead analytics
CREATE OR REPLACE VIEW lead_analytics AS
SELECT
  DATE(created_at) as date,
  COUNT(*) as total_leads,
  COUNT(DISTINCT country) as unique_countries,
  COUNT(CASE WHEN budget_range IS NOT NULL THEN 1 END) as qualified_leads
FROM leads
GROUP BY DATE(created_at)
ORDER BY date DESC;

-- Create a view for event analytics
CREATE OR REPLACE VIEW event_analytics AS
SELECT
  DATE(created_at) as date,
  event_type,
  COUNT(*) as event_count,
  COUNT(DISTINCT session_id) as unique_sessions
FROM events
GROUP BY DATE(created_at), event_type
ORDER BY date DESC, event_count DESC;
