import { redirect } from "next/navigation";
import { LoginForm } from "./LoginForm";
import { hasSupabaseEnv } from "@/lib/supabase/config";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export default async function LoginPage() {
  if (hasSupabaseEnv()) {
    const supabase = createSupabaseServerClient();
    const {
      data: { user }
    } = await supabase.auth.getUser();

    if (user) {
      redirect("/admin/galeria");
    }
  }

  return (
    <main className="min-h-screen bg-[#F8FAFC] px-5 py-20 text-[#111827]">
      <div className="mx-auto max-w-md">
        <LoginForm />
      </div>
    </main>
  );
}
