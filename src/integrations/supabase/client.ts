// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://aktypkfztpwmlrkcudsy.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFrdHlwa2Z6dHB3bWxya2N1ZHN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ1MzUyMDQsImV4cCI6MjA2MDExMTIwNH0.A0yw8Hx4U5ZMcIuR84lx1HVKzeciPscUdjxACbOLfjc";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);