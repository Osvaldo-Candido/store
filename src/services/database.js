import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fyijtsebdksaztusspxt.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ5aWp0c2ViZGtzYXp0dXNzcHh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY4NDQxOTMsImV4cCI6MjA1MjQyMDE5M30.2gvty_tWuvoS9TakhgBnHMkTBtu0zaZ0RfP0UhCDDBU';

export const supabase = createClient(supabaseUrl, supabaseKey);
