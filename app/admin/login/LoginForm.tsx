"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { hasSupabaseEnv } from "@/lib/supabase/config";

export function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "");
    const password = String(formData.get("password") ?? "");

    try {
      const supabase = createSupabaseBrowserClient();
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (signInError) {
        setError(signInError.message);
        return;
      }

      router.push("/admin/galeria");
      router.refresh();
    } catch (loginError) {
      setError(
        loginError instanceof Error
          ? loginError.message
          : "No se pudo iniciar sesión."
      );
    } finally {
      setLoading(false);
    }
  }

  if (!hasSupabaseEnv()) {
    return (
      <div className="border-l-4 border-[#a03d2b] bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-black text-black">
          Falta configurar Supabase
        </h1>
        <p className="mt-4 leading-7 text-[#111827]">
          Crea <code className="font-bold">.env.local</code> con las variables
          de <code className="font-bold">.env.example</code> y reinicia Next.js.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 shadow-sm">
      <p className="text-sm font-black uppercase tracking-[0.2em] text-[#a03d2b]">
        Acceso privado
      </p>
      <h1 className="mt-4 text-3xl font-black text-black">
        Administrar contenidos
      </h1>
      <div className="mt-7 grid gap-5">
        <label className="block">
          <span className="text-sm font-bold text-[#111827]">Correo</span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            required
            className="mt-2 w-full border border-black/20 bg-white px-4 py-3 text-[#111827] outline-none transition-all duration-300 focus:border-[#a03d2b] focus:ring-2 focus:ring-[#a03d2b]/25"
          />
        </label>
        <label className="block">
          <span className="text-sm font-bold text-[#111827]">Contraseña</span>
          <input
            type="password"
            name="password"
            autoComplete="current-password"
            required
            className="mt-2 w-full border border-black/20 bg-white px-4 py-3 text-[#111827] outline-none transition-all duration-300 focus:border-[#a03d2b] focus:ring-2 focus:ring-[#a03d2b]/25"
          />
        </label>
      </div>
      {error ? <p className="mt-5 text-sm font-bold text-[#a03d2b]">{error}</p> : null}
      <button
        type="submit"
        disabled={loading}
        className="mt-7 w-full bg-[#a03d2b] px-6 py-4 text-sm font-black text-white transition-all duration-300 hover:bg-[#832f21] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Ingresando..." : "Ingresar"}
      </button>
    </form>
  );
}
