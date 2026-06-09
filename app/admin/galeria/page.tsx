import { redirect } from "next/navigation";
import {
  createGalleryItem,
  deleteGalleryItem,
  updateGalleryItem
} from "@/app/admin/actions";
import { AdminShell } from "@/components/admin/AdminShell";
import { SetupNotice } from "@/components/admin/SetupNotice";
import { getAllGalleryItems } from "@/lib/content/queries";
import { hasSupabaseEnv } from "@/lib/supabase/config";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

async function requireAdminSession() {
  if (!hasSupabaseEnv()) {
    return false;
  }

  const supabase = createSupabaseServerClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  return true;
}

function TextInput({
  label,
  name,
  defaultValue,
  required = false,
  type = "text"
}: {
  label: string;
  name: string;
  defaultValue?: string | number | null;
  required?: boolean;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-bold text-[#111827]">{label}</span>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue ?? ""}
        required={required}
        className="mt-2 w-full border border-black/20 bg-white px-4 py-3 text-[#111827] outline-none transition-all duration-300 focus:border-[#a03d2b] focus:ring-2 focus:ring-[#a03d2b]/25"
      />
    </label>
  );
}

export default async function AdminGalleryPage() {
  const isReady = await requireAdminSession();

  if (!isReady) {
    return <SetupNotice />;
  }

  const items = await getAllGalleryItems();

  return (
    <AdminShell>
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <form
            action={createGalleryItem}
            className="h-fit bg-white p-6 shadow-sm"
          >
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#a03d2b]">
              Nueva foto
            </p>
            <h1 className="mt-3 text-3xl font-black text-black">
              Galería
            </h1>
            <div className="mt-6 grid gap-5">
              <TextInput label="Título" name="title" required />
              <TextInput label="Categoría" name="category" />
              <TextInput label="Texto overlay" name="overlay_text" />
              <label className="block">
                <span className="text-sm font-bold text-[#111827]">
                  Descripción / alt
                </span>
                <textarea
                  name="description"
                  rows={3}
                  className="mt-2 w-full border border-black/20 bg-white px-4 py-3 text-[#111827] outline-none transition-all duration-300 focus:border-[#a03d2b] focus:ring-2 focus:ring-[#a03d2b]/25"
                />
              </label>
              <TextInput label="URL de imagen externa" name="image_url" />
              <label className="block">
                <span className="text-sm font-bold text-[#111827]">
                  Subir imagen
                </span>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  className="mt-2 w-full border border-black/20 bg-white px-4 py-3 text-[#111827]"
                />
              </label>
              <TextInput
                label="Orden"
                name="sort_order"
                type="number"
                defaultValue={0}
              />
              <label className="flex items-center gap-3 text-sm font-bold">
                <input
                  type="checkbox"
                  name="is_published"
                  defaultChecked
                  className="h-4 w-4 accent-[#a03d2b]"
                />
                Publicado
              </label>
            </div>
            <button
              type="submit"
              className="mt-7 w-full bg-[#a03d2b] px-6 py-4 text-sm font-black text-white transition-all duration-300 hover:bg-[#832f21]"
            >
              Crear foto
            </button>
          </form>

          <div className="grid gap-6">
            {items.map((item) => (
              <article key={item.id} className="bg-white p-5 shadow-sm">
                <div className="grid gap-5 md:grid-cols-[12rem_1fr]">
                  <img
                    src={item.image_url}
                    alt={item.description ?? item.title}
                    className="h-48 w-full object-cover md:h-full"
                  />
                  <form action={updateGalleryItem} className="grid gap-4">
                    <input type="hidden" name="id" value={item.id} />
                    <input
                      type="hidden"
                      name="image_path"
                      value={item.image_path ?? ""}
                    />
                    <TextInput
                      label="Título"
                      name="title"
                      defaultValue={item.title}
                      required
                    />
                    <TextInput
                      label="Categoría"
                      name="category"
                      defaultValue={item.category}
                    />
                    <TextInput
                      label="Texto overlay"
                      name="overlay_text"
                      defaultValue={item.overlay_text}
                    />
                    <label className="block">
                      <span className="text-sm font-bold text-[#111827]">
                        Descripción / alt
                      </span>
                      <textarea
                        name="description"
                        rows={3}
                        defaultValue={item.description ?? ""}
                        className="mt-2 w-full border border-black/20 bg-white px-4 py-3 text-[#111827] outline-none transition-all duration-300 focus:border-[#a03d2b] focus:ring-2 focus:ring-[#a03d2b]/25"
                      />
                    </label>
                    <TextInput
                      label="URL de imagen"
                      name="image_url"
                      defaultValue={item.image_url}
                      required
                    />
                    <label className="block">
                      <span className="text-sm font-bold text-[#111827]">
                        Reemplazar imagen
                      </span>
                      <input
                        type="file"
                        name="image"
                        accept="image/*"
                        className="mt-2 w-full border border-black/20 bg-white px-4 py-3 text-[#111827]"
                      />
                    </label>
                    <TextInput
                      label="Orden"
                      name="sort_order"
                      type="number"
                      defaultValue={item.sort_order}
                    />
                    <label className="flex items-center gap-3 text-sm font-bold">
                      <input
                        type="checkbox"
                        name="is_published"
                        defaultChecked={item.is_published}
                        className="h-4 w-4 accent-[#a03d2b]"
                      />
                      Publicado
                    </label>
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <button
                        type="submit"
                        className="bg-[#111827] px-5 py-3 text-sm font-black text-white transition-all duration-300 hover:bg-[#a03d2b]"
                      >
                        Guardar cambios
                      </button>
                    </div>
                  </form>
                </div>
                <form action={deleteGalleryItem} className="mt-4">
                  <input type="hidden" name="id" value={item.id} />
                  <input
                    type="hidden"
                    name="image_path"
                    value={item.image_path ?? ""}
                  />
                  <button
                    type="submit"
                    className="border border-[#a03d2b] px-5 py-3 text-sm font-black text-[#a03d2b] transition-all duration-300 hover:bg-[#a03d2b] hover:text-white"
                  >
                    Eliminar foto
                  </button>
                </form>
              </article>
            ))}
          </div>
        </div>
      </section>
    </AdminShell>
  );
}
