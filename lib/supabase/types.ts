export type GalleryItem = {
  id: string;
  title: string;
  description: string | null;
  image_url: string;
  image_path: string | null;
  category: string | null;
  overlay_text: string | null;
  sort_order: number;
  is_published: boolean;
  created_at: string;
  updated_at: string;
};

export type GalleryItemInsert = {
  id?: string;
  title: string;
  description?: string | null;
  image_url: string;
  image_path?: string | null;
  category?: string | null;
  overlay_text?: string | null;
  sort_order?: number;
  is_published?: boolean;
  created_at?: string;
  updated_at?: string;
};

export type GalleryItemUpdate = Partial<GalleryItemInsert>;

export type Activity = {
  id: string;
  title: string;
  description: string;
  date: string | null;
  location: string | null;
  image_url: string | null;
  image_path: string | null;
  is_published: boolean;
  created_at: string;
  updated_at: string;
};

export type ActivityInsert = {
  id?: string;
  title: string;
  description: string;
  date?: string | null;
  location?: string | null;
  image_url?: string | null;
  image_path?: string | null;
  is_published?: boolean;
  created_at?: string;
  updated_at?: string;
};

export type ActivityUpdate = Partial<ActivityInsert>;

export type Database = {
  public: {
    Tables: {
      gallery_items: {
        Row: GalleryItem;
        Insert: GalleryItemInsert;
        Update: GalleryItemUpdate;
        Relationships: [];
      };
      activities: {
        Row: Activity;
        Insert: ActivityInsert;
        Update: ActivityUpdate;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
