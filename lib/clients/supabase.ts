import { createClient } from "@supabase/supabase-js";

const useSchema = true; // This is set to true as on the production version (hosted by Monad Pad) we are using a different schema for the database. When testing locally you can set this to false.

export const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, { db: { schema: useSchema ? "gmonlink" : undefined } });

export const supabaseApiClient = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_KEY!, { db: { schema: useSchema ? "gmonlink" : undefined } });