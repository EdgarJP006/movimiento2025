import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { assertSupabaseEnv, supabaseAnonKey, supabaseUrl } from "./config";
import type { Database } from "./types";

export function createSupabaseServerClient() {
  assertSupabaseEnv();
  const cookieStore = cookies();

  return createServerClient<Database>(
    supabaseUrl as string,
    supabaseAnonKey as string,
    {
      cookies: {
        get(name) {
          return cookieStore.get(name)?.value;
        },
        set(name, value, options) {
          try {
            cookieStore.set({ name, value, ...options });
          } catch {
            // Server Components cannot always write cookies; middleware refreshes them.
          }
        },
        remove(name, options) {
          try {
            cookieStore.set({ name, value: "", ...options });
          } catch {
            // Server Components cannot always write cookies; middleware refreshes them.
          }
        }
      }
    }
  );
}
