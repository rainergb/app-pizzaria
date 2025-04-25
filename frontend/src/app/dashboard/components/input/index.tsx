import React from "react";

interface InputProps {
  type?: string;
  name: string;
  placeholder?: string;
  required?: boolean;
}

export default function Input({
  type = "text",
  name,
  placeholder,
  required = false
}: InputProps) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      className="w-full p-4 text-white bg-[#101126] border border-gray-500 rounded-md placeholder-gray-400 focus:outline-none focus:border-[#3fffa3]"
    />
  );
}
