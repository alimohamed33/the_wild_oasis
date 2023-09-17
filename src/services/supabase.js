import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://sblejuenpjfqicpqdold.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNibGVqdWVucGpmcWljcHFkb2xkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ0OTI2OTksImV4cCI6MjAxMDA2ODY5OX0.fWkOEskSZUJq6Kwt8NN5FsUbog27yygiH-u0pStPTPs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
