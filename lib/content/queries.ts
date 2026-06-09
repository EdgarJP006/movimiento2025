import { hasSupabaseEnv } from "@/lib/supabase/config";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { Activity, GalleryItem } from "@/lib/supabase/types";
import { fallbackActivities, fallbackGalleryItems } from "./fallback";

export async function getPublishedGalleryItems(): Promise<GalleryItem[]> {
  if (!hasSupabaseEnv()) {
    return fallbackGalleryItems;
  }

  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("gallery_items")
    .select("*")
    .eq("is_published", true)
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false });

  if (error || !data?.length) {
    return fallbackGalleryItems;
  }

  return data;
}

export async function getPublishedActivities(): Promise<Activity[]> {
  if (!hasSupabaseEnv()) {
    return fallbackActivities;
  }

  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("activities")
    .select("*")
    .eq("is_published", true)
    .order("date", { ascending: false, nullsFirst: false })
    .order("created_at", { ascending: false });

  if (error || !data?.length) {
    return fallbackActivities;
  }

  return data;
}

export async function getAllGalleryItems(): Promise<GalleryItem[]> {
  if (!hasSupabaseEnv()) {
    return fallbackGalleryItems;
  }

  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("gallery_items")
    .select("*")
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false });

  if (error) {
    throw error;
  }

  return data ?? [];
}

export async function getAllActivities(): Promise<Activity[]> {
  if (!hasSupabaseEnv()) {
    return fallbackActivities;
  }

  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("activities")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw error;
  }

  return data ?? [];
}
