"use client";

import { createBrowserClient } from "@supabase/ssr";
import { assertSupabaseEnv, supabaseAnonKey, supabaseUrl } from "./config";
import type { Database } from "./types";

export function createSupabaseBrowserClient() {
  assertSupabaseEnv();

  return createBrowserClient<Database>(
    supabaseUrl as string,
    supabaseAnonKey as string
  );
}
