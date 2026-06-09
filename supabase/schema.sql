create extension if not exists "pgcrypto";

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create table if not exists public.gallery_items (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  image_url text not null,
  image_path text,
  category text,
  overlay_text text,
  sort_order integer not null default 0,
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.activities (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text not null,
  date text,
  location text,
  image_url text,
  image_path text,
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

drop trigger if exists set_gallery_items_updated_at on public.gallery_items;
create trigger set_gallery_items_updated_at
before update on public.gallery_items
for each row execute function public.set_updated_at();

drop trigger if exists set_activities_updated_at on public.activities;
create trigger set_activities_updated_at
before update on public.activities
for each row execute function public.set_updated_at();

alter table public.gallery_items enable row level security;
alter table public.activities enable row level security;

drop policy if exists "Anyone can read published gallery items" on public.gallery_items;
create policy "Anyone can read published gallery items"
on public.gallery_items
for select
using (is_published = true or auth.role() = 'authenticated');

drop policy if exists "Authenticated users can manage gallery items" on public.gallery_items;
create policy "Authenticated users can manage gallery items"
on public.gallery_items
for all
to authenticated
using (true)
with check (true);

drop policy if exists "Anyone can read published activities" on public.activities;
create policy "Anyone can read published activities"
on public.activities
for select
using (is_published = true or auth.role() = 'authenticated');

drop policy if exists "Authenticated users can manage activities" on public.activities;
create policy "Authenticated users can manage activities"
on public.activities
for all
to authenticated
using (true)
with check (true);

insert into storage.buckets (id, name, public)
values ('media', 'media', true)
on conflict (id) do update set public = true;

drop policy if exists "Anyone can view media" on storage.objects;
create policy "Anyone can view media"
on storage.objects
for select
using (bucket_id = 'media');

drop policy if exists "Authenticated users can upload media" on storage.objects;
create policy "Authenticated users can upload media"
on storage.objects
for insert
to authenticated
with check (bucket_id = 'media');

drop policy if exists "Authenticated users can update media" on storage.objects;
create policy "Authenticated users can update media"
on storage.objects
for update
to authenticated
using (bucket_id = 'media')
with check (bucket_id = 'media');

drop policy if exists "Authenticated users can delete media" on storage.objects;
create policy "Authenticated users can delete media"
on storage.objects
for delete
to authenticated
using (bucket_id = 'media');

insert into public.gallery_items
  (title, description, image_url, category, overlay_text, sort_order, is_published)
values
  (
    'Identidad Institucional',
    'Edificio de La Colina de la Universidad de Panamá',
    'https://uphacialaluz.com/wp-content/uploads/2021/12/img_4318.jpg',
    'Campus',
    'Sede Central - Defendiendo la autonomía desde La Colina',
    1,
    true
  ),
  (
    'Encuentros y Foros Académicos',
    'Acto universitario en la Plaza de la Bandera',
    'https://uphacialaluz.com/wp-content/uploads/2022/11/img-20221103-wa0016.jpg',
    'Foros',
    'Unidad Gremial - Docentes y Administrativos firmes por el cambio',
    2,
    true
  ),
  (
    'Juventud y Comunidad Estudiantil',
    'Comunidad universitaria en el campus',
    'https://www.up.ac.pa/sites/default/files/rector3_0_1_1_4.jpg',
    'Estudiantes',
    'Fuerza Estudiantil - El relevo generacional de nuestra academia',
    3,
    true
  ),
  (
    'Trabajo en las Aulas de Clase',
    'Estudiantes universitarios en actividades académicas',
    'https://uphacialaluz.com/wp-content/uploads/2026/05/edu.jpg',
    'Aulas',
    'Excelencia Académica - El futuro de Panamá se construye en el aula',
    4,
    true
  )
on conflict do nothing;

insert into public.activities
  (title, description, date, location, is_published)
values
  (
    'Asambleas de Base',
    'Encuentros con docentes, administrativos y estudiantes para consolidar vocerías por facultad, centro regional y extensión universitaria.',
    'Semana 1',
    'Campus Central',
    true
  ),
  (
    'Foros de Transformación Institucional',
    'Espacios de debate sobre autonomía universitaria, transparencia de gestión, escalafón administrativo y fortalecimiento académico.',
    'Semana 2',
    'Facultades y auditorios',
    true
  ),
  (
    'Jornadas Informativas',
    'Difusión de comunicados, orientación institucional y coordinación de actividades públicas del Movimiento Universitario 2025.',
    'Semana 3',
    'Puntos informativos',
    true
  ),
  (
    'Giras a Centros Regionales',
    'Articulación territorial con liderazgos de Azuero, Veraguas, Colón y extensiones universitarias bajo principios de descentralización.',
    'Semana 4',
    'Centros Regionales',
    true
  )
on conflict do nothing;
