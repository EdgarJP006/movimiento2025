# Configuración Supabase

## 1. Crear el proyecto

1. Entra a https://supabase.com.
2. Crea un proyecto nuevo.
3. Guarda la contraseña de la base de datos en un lugar seguro.

## 2. Ejecutar el SQL

1. En Supabase, entra a **SQL Editor**.
2. Abre el archivo `supabase/schema.sql` de este proyecto.
3. Copia todo el contenido.
4. Pégalo en el SQL Editor.
5. Ejecuta el script.

Esto crea:

- Tabla `gallery_items`.
- Tabla `activities`.
- Bucket público `media`.
- Políticas RLS para lectura pública de elementos publicados.
- Políticas CRUD para usuarios autenticados.
- Datos iniciales de Galería y Actividades.

## 3. Crear el usuario administrador

1. En Supabase, entra a **Authentication > Users**.
2. Crea un usuario con correo y contraseña.
3. No habilites registro público desde la web si solo quieres admins internos.

En esta primera versión, cualquier usuario autenticado en Supabase puede
administrar Galería y Actividades. Por eso debes crear solo usuarios de confianza.

## 4. Configurar variables locales

1. En Supabase, entra a **Project Settings > API**.
2. Copia:
   - Project URL.
   - anon public key.
3. Crea un archivo `.env.local` en la raíz del proyecto.
4. Agrega:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://TU-PROYECTO.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=TU_SUPABASE_ANON_KEY
```

5. Reinicia el servidor de Next.js.

## 5. Rutas disponibles

Públicas:

- `/galeria`
- `/actividades`

Privadas:

- `/admin/login`
- `/admin/galeria`
- `/admin/actividades`

## 6. Variables en Vercel

En Vercel:

1. Entra al proyecto.
2. Ve a **Settings > Environment Variables**.
3. Agrega:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Redeploy.
