import Image from "next/image";
import Link from "next/link";
import { api } from "@/services/api";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default function Page() {
  async function handleLogin(formData: FormData) {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (email === "" || password === "") {
      return;
    }

    try {
      const response = await api.post("/session", {
        email,
        password
      });

      if (!response.data.token) {
        return;
      }

      const expressTime = 60 * 60 * 24 * 30 * 1000;
      cookies().set("session", response.data.token, {
        maxAge: expressTime,
        path: "/",
        httpOnly: false,
        secure: process.env.NODE_ENV === "production"
      });
    } catch (err) {}

    redirect("/dashboard");
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#101026]">
      <div className="text-center">
        <div className="flex justify-center mb-10">
          <Image
            src="/logo.svg"
            alt="Logo da pizzaria"
            width={500}
            height={500}
          />
        </div>

        <section>
          <form action={handleLogin} className="space-y-4 ">
            <input
              type="email"
              required
              name="email"
              placeholder="Digite seu email"
              className="w-full px-4 py-2 rounded-md bg-[#1d1d2e] text-white border border-gray-500"
            />
            <input
              type="password"
              required
              name="password"
              placeholder="Sua senha"
              className="w-full px-4 py-2 rounded-md bg-[#1d1d2e] text-white border border-gray-500"
            />

            <button
              type="submit"
              className="w-full py-3 bg-[#FF3f4b] text-white font-bold rounded-md hover:bg-red-700"
            >
              Acessar
            </button>
          </form>

          <Link href="/signup" className="block mt-4 text-sm text-white">
            Não possui uma conta? Cadastre-se
          </Link>
        </section>
      </div>
    </main>
  );
}
