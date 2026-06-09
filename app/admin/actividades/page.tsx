import { redirect } from "next/navigation";
import {
  createActivity,
  deleteActivity,
  updateActivity
} from "@/app/admin/actions";
import { AdminShell } from "@/components/admin/AdminShell";
import { SetupNotice } from "@/components/admin/SetupNotice";
import { getAllActivities } from "@/lib/content/queries";
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
  defaultValue?: string | null;
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

export default async function AdminActivitiesPage() {
  const isReady = await requireAdminSession();

  if (!isReady) {
    return <SetupNotice />;
  }

  const activities = await getAllActivities();

  return (
    <AdminShell>
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <form action={createActivity} className="h-fit bg-white p-6 shadow-sm">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#a03d2b]">
              Nueva actividad
            </p>
            <h1 className="mt-3 text-3xl font-black text-black">
              Actividades
            </h1>
            <div className="mt-6 grid gap-5">
              <TextInput label="Título" name="title" required />
              <TextInput label="Fecha o etiqueta" name="date" />
              <TextInput label="Ubicación" name="location" />
              <label className="block">
                <span className="text-sm font-bold text-[#111827]">
                  Descripción
                </span>
                <textarea
                  name="description"
                  rows={5}
                  required
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
              Crear actividad
            </button>
          </form>

          <div className="grid gap-6">
            {activities.map((activity) => (
              <article key={activity.id} className="bg-white p-5 shadow-sm">
                {activity.image_url ? (
                  <img
                    src={activity.image_url}
                    alt={activity.title}
                    className="mb-5 h-56 w-full object-cover"
                  />
                ) : null}
                <form action={updateActivity} className="grid gap-4">
                  <input type="hidden" name="id" value={activity.id} />
                  <input
                    type="hidden"
                    name="image_path"
                    value={activity.image_path ?? ""}
                  />
                  <TextInput
                    label="Título"
                    name="title"
                    defaultValue={activity.title}
                    required
                  />
                  <TextInput
                    label="Fecha o etiqueta"
                    name="date"
                    defaultValue={activity.date}
                  />
                  <TextInput
                    label="Ubicación"
                    name="location"
                    defaultValue={activity.location}
                  />
                  <label className="block">
                    <span className="text-sm font-bold text-[#111827]">
                      Descripción
                    </span>
                    <textarea
                      name="description"
                      rows={5}
                      required
                      defaultValue={activity.description}
                      className="mt-2 w-full border border-black/20 bg-white px-4 py-3 text-[#111827] outline-none transition-all duration-300 focus:border-[#a03d2b] focus:ring-2 focus:ring-[#a03d2b]/25"
                    />
                  </label>
                  <TextInput
                    label="URL de imagen"
                    name="image_url"
                    defaultValue={activity.image_url}
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
                  <label className="flex items-center gap-3 text-sm font-bold">
                    <input
                      type="checkbox"
                      name="is_published"
                      defaultChecked={activity.is_published}
                      className="h-4 w-4 accent-[#a03d2b]"
                    />
                    Publicado
                  </label>
                  <button
                    type="submit"
                    className="bg-[#111827] px-5 py-3 text-sm font-black text-white transition-all duration-300 hover:bg-[#a03d2b]"
                  >
                    Guardar cambios
                  </button>
                </form>
                <form action={deleteActivity} className="mt-4">
                  <input type="hidden" name="id" value={activity.id} />
                  <input
                    type="hidden"
                    name="image_path"
                    value={activity.image_path ?? ""}
                  />
                  <button
                    type="submit"
                    className="border border-[#a03d2b] px-5 py-3 text-sm font-black text-[#a03d2b] transition-all duration-300 hover:bg-[#a03d2b] hover:text-white"
                  >
                    Eliminar actividad
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
