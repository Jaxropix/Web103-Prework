import { createClient } from "@supabase/supabase-js";

// Replace with your actual values from Supabase dashboard
const URL = "https://vooviwuyiziqmpgtcega.supabase.co";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZvb3Zpd3V5aXppcW1wZ3RjZWdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY2OTE4NzUsImV4cCI6MjA3MjI2Nzg3NX0.sFMIM_jPwTpD_UmfiFpqoEiKKpNNd2fFiB1bYaXBrwA";

export const supabase = createClient(URL, API_KEY);
