import Image from "next/image";
import Link from "next/link";
import { api } from "@/services/api";
import { redirect } from "next/navigation";

export default function Signup() {
  async function handleRegister(formData: FormData) {
    "use server";

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!name || !email || !password) {
      return;
    }

    try {
      const response = await api.post("/session", {
        name,
        email,
        password
      });
    } catch (err) {}

    redirect("/");
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
          <h1 className="text-white text-[32px] font-bold mb-5">
            Criando sua conta
          </h1>
          <form action={handleRegister} className="space-y-4">
            <input
              type="text"
              required
              name="name"
              placeholder="Digite seu nome"
              className="w-full px-4 py-2 rounded-md bg-[#1d1d2e] text-white border border-gray-500"
            />
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
              placeholder="Digite sua senha"
              className="w-full px-4 py-2 rounded-md bg-[#1d1d2e] text-white border border-gray-500"
            />

            <button
              type="submit"
              className="w-full py-3 bg-[#FF3f4b] text-white font-bold rounded-md hover:bg-red-700"
            >
              Cadastrar
            </button>
          </form>

          <Link href="/" className="block mt-4 text-sm text-white">
            Já possui uma conta? Faça login
          </Link>
        </section>
      </div>
    </main>
  );
}
