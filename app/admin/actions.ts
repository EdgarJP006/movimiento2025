"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const mediaBucket = "media";

function getString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function getNullableString(formData: FormData, key: string) {
  const value = getString(formData, key);
  return value.length ? value : null;
}

function getBoolean(formData: FormData, key: string) {
  return formData.get(key) === "on";
}

function getSortOrder(formData: FormData) {
  const value = Number(getString(formData, "sort_order"));
  return Number.isFinite(value) ? value : 0;
}

async function requireUser() {
  const supabase = createSupabaseServerClient();
  const {
    data: { user },
    error
  } = await supabase.auth.getUser();

  if (error || !user) {
    redirect("/admin/login");
  }

  return { supabase, user };
}

async function uploadImage(formData: FormData, folder: string) {
  const file = formData.get("image");

  if (!(file instanceof File) || file.size === 0) {
    return null;
  }

  const { supabase, user } = await requireUser();
  const extension = file.name.split(".").pop()?.toLowerCase() || "jpg";
  const path = `${folder}/${user.id}/${crypto.randomUUID()}.${extension}`;

  const { error } = await supabase.storage
    .from(mediaBucket)
    .upload(path, file, {
      cacheControl: "3600",
      upsert: false
    });

  if (error) {
    throw error;
  }

  const { data } = supabase.storage.from(mediaBucket).getPublicUrl(path);

  return {
    image_url: data.publicUrl,
    image_path: path
  };
}

export async function signOut() {
  const supabase = createSupabaseServerClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}

export async function createGalleryItem(formData: FormData) {
  const { supabase } = await requireUser();
  const upload = await uploadImage(formData, "gallery");
  const imageUrl = upload?.image_url || getString(formData, "image_url");

  if (!imageUrl) {
    throw new Error("Debes subir una imagen o pegar una URL pública.");
  }

  const { error } = await supabase.from("gallery_items").insert({
    title: getString(formData, "title"),
    description: getNullableString(formData, "description"),
    overlay_text: getNullableString(formData, "overlay_text"),
    category: getNullableString(formData, "category"),
    image_url: imageUrl,
    image_path: upload?.image_path ?? null,
    sort_order: getSortOrder(formData),
    is_published: getBoolean(formData, "is_published")
  });

  if (error) {
    throw error;
  }

  revalidatePath("/galeria");
  revalidatePath("/admin/galeria");
}

export async function updateGalleryItem(formData: FormData) {
  const { supabase } = await requireUser();
  const id = getString(formData, "id");
  const upload = await uploadImage(formData, "gallery");
  const imageUrl = upload?.image_url || getString(formData, "image_url");

  if (!id || !imageUrl) {
    throw new Error("Faltan datos para actualizar la foto.");
  }

  const { error } = await supabase
    .from("gallery_items")
    .update({
      title: getString(formData, "title"),
      description: getNullableString(formData, "description"),
      overlay_text: getNullableString(formData, "overlay_text"),
      category: getNullableString(formData, "category"),
      image_url: imageUrl,
      ...(upload ? { image_path: upload.image_path } : {}),
      sort_order: getSortOrder(formData),
      is_published: getBoolean(formData, "is_published")
    })
    .eq("id", id);

  if (error) {
    throw error;
  }

  revalidatePath("/galeria");
  revalidatePath("/admin/galeria");
}

export async function deleteGalleryItem(formData: FormData) {
  const { supabase } = await requireUser();
  const id = getString(formData, "id");
  const imagePath = getString(formData, "image_path");

  if (imagePath) {
    await supabase.storage.from(mediaBucket).remove([imagePath]);
  }

  const { error } = await supabase.from("gallery_items").delete().eq("id", id);

  if (error) {
    throw error;
  }

  revalidatePath("/galeria");
  revalidatePath("/admin/galeria");
}

export async function createActivity(formData: FormData) {
  const { supabase } = await requireUser();
  const upload = await uploadImage(formData, "activities");

  const { error } = await supabase.from("activities").insert({
    title: getString(formData, "title"),
    description: getString(formData, "description"),
    date: getNullableString(formData, "date"),
    location: getNullableString(formData, "location"),
    image_url: upload?.image_url || getNullableString(formData, "image_url"),
    image_path: upload?.image_path ?? null,
    is_published: getBoolean(formData, "is_published")
  });

  if (error) {
    throw error;
  }

  revalidatePath("/actividades");
  revalidatePath("/admin/actividades");
}

export async function updateActivity(formData: FormData) {
  const { supabase } = await requireUser();
  const id = getString(formData, "id");
  const upload = await uploadImage(formData, "activities");

  const { error } = await supabase
    .from("activities")
    .update({
      title: getString(formData, "title"),
      description: getString(formData, "description"),
      date: getNullableString(formData, "date"),
      location: getNullableString(formData, "location"),
      image_url: upload?.image_url || getNullableString(formData, "image_url"),
      ...(upload ? { image_path: upload.image_path } : {}),
      is_published: getBoolean(formData, "is_published")
    })
    .eq("id", id);

  if (error) {
    throw error;
  }

  revalidatePath("/actividades");
  revalidatePath("/admin/actividades");
}

export async function deleteActivity(formData: FormData) {
  const { supabase } = await requireUser();
  const id = getString(formData, "id");
  const imagePath = getString(formData, "image_path");

  if (imagePath) {
    await supabase.storage.from(mediaBucket).remove([imagePath]);
  }

  const { error } = await supabase.from("activities").delete().eq("id", id);

  if (error) {
    throw error;
  }

  revalidatePath("/actividades");
  revalidatePath("/admin/actividades");
}
