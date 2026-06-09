export function SetupNotice() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] px-5 py-20 text-[#111827]">
      <div className="mx-auto max-w-3xl border-l-4 border-[#a03d2b] bg-white p-8 shadow-sm">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-[#a03d2b]">
          Configuración pendiente
        </p>
        <h1 className="mt-4 text-3xl font-black text-black">
          Falta conectar Supabase
        </h1>
        <p className="mt-4 leading-7">
          Crea el archivo <code className="font-bold">.env.local</code> con las
          variables <code className="font-bold">NEXT_PUBLIC_SUPABASE_URL</code>{" "}
          y <code className="font-bold">NEXT_PUBLIC_SUPABASE_ANON_KEY</code>.
          Después reinicia el servidor de desarrollo.
        </p>
      </div>
    </main>
  );
}
