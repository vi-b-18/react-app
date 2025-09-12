import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://njaajwaqnqlkfjdxepjp.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5qYWFqd2FxbnFsa2ZqZHhlcGpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1OTk5ODMsImV4cCI6MjA3MzE3NTk4M30.2EDep8xosJfQpERYtVeIhRgvtrMHNq5OYueo4J5Lmhk"


export const supabase = createClient(supabaseUrl, supabaseKey);