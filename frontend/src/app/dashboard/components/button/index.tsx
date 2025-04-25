"use client";

import React from "react";
import { useFormStatus } from "react-dom";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  name: string;
}

export default function Button({
  children,
  onClick,
  type = "button",
  name
}: ButtonProps) {
  const { pending: isLoading } = useFormStatus();

  return (
    <button
      type={type}
      name={name}
      onClick={onClick}
      disabled={isLoading}
      className={`w-full font-bold py-4 rounded-md transition-colors ${
        isLoading
          ? "bg-[#34e690] text-gray-400 cursor-not-allowed"
          : "bg-[#3fffa3] text-[#101126] hover:bg-[#34e690]"
      }`}
    >
      {isLoading ? "Carregando..." : children}
    </button>
  );
}
