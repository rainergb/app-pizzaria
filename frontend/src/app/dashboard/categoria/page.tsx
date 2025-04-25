import { api } from "@/services/api";
import Button from "../components/button";
import Input from "../components/input";
import { getCookieServer } from "@/lib/cookieServer";
import { redirect } from "next/navigation";

export default function Category() {
  async function handleRegisterCategory(formData: FormData) {
    "use server";
    const name = formData.get("name");

    if (name === "") console.log(name);

    const data = {
      name: name
    };

    const token = await getCookieServer();

    const response = await api
      .post("/category", data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .catch((err) => {
        console.log(err);
      });

    redirect("/dashboard");

    console.log(response);
  }

  return (
    <div className="flex items-start justify-center min-h-screen pt-12">
      <div className="p-8 rounded-lg w-full max-w-[720px]">
        <h1 className="text-3xl font-bold text-white mb-6">Nova categoria</h1>
        <form
          className="flex flex-col space-y-4"
          action={handleRegisterCategory}
        >
          <Input
            name="name"
            placeholder="Digite o nome para categoria"
            required
          />
          <Button type="submit" name="Cadastrar">
            Cadastrar
          </Button>
        </form>
      </div>
    </div>
  );
}
