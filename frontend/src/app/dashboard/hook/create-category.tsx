// src/app/dashboard/categoria/serverFunctions.ts

"use server";

import { api } from "@/services/api";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function handleRegisterCategoryServer(
  formData: FormData,
  p0: string
) {
  const name = formData.get("name")?.toString();

  if (!name) return;

  const data = {
    name: name
  };

  const token = getCookieServer();

  await api
    .post("/category", data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .catch((err) => {
      console.log(err);
      return;
    });

  redirect("/dashboard");
}

function getCookieServer() {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  if (!token) {
    throw new Error("Token not found");
  }
  return token.value;
}
