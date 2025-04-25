"use client";

import Link from "next/link";
import Image from "next/image";
import { LogOutIcon } from "lucide-react";
import logoImg from "/public/logo.svg";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";

export function Header() {
  const router = useRouter();

  async function handleLogout() {
    deleteCookie("session", { path: "/" });
    router.replace("/login");
  }

  return (
    <header className="text-white p-8 w-full max-w-[1920px] mx-auto flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/dashboard" className="flex items-center">
          <Image
            alt="Logo Sujeito Pizza"
            src={logoImg}
            width={190}
            height={60}
            priority={true}
            quality={100}
            className="cursor-pointer"
          />
        </Link>
      </div>

      {/* Navegação */}
      <nav className="flex items-center space-x-8">
        <Link href="" className="hover:text-gray-400">
          Novo Pedido
        </Link>
        <Link href="/dashboard/categoria" className="hover:text-gray-400">
          Nova categoria
        </Link>
        <Link href="/dashboard/product" className="hover:text-gray-400">
          Cardapio
        </Link>

        <button
          onClick={handleLogout}
          className="flex items-center justify-center hover:text-gray-400"
        >
          <LogOutIcon size={24} color="#FFF" />
        </button>
      </nav>
    </header>
  );
}
