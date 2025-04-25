"use client";

import Button from "@/app/dashboard/components/button";
import Input from "@/app/dashboard/components/input";
import { UploadCloud } from "lucide-react";
import { ChangeEvent, useState } from "react";
import Image from "next/image";

export function FormProduct() {
  const [image, setImage] = useState<File>();
  const [previewImage, setPreviewImage] = useState("");

  function handleFile(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      const image = e.target.files[0];

      if (image.type !== "image/jpeg" && image.type !== "image/png") {
        console.log("Formato inválido");
        return;
      }

      setImage(image);
      setPreviewImage(URL.createObjectURL(image));
    }
  }

  return (
    <div className="flex items-start justify-center min-h-screen pt-[30px]">
      <div className="p-8 flex flex-col items-center max-w-[720px] w-full mx-[20px]">
        <div className="flex items-center space-x-4 mb-4 w-full">
          <h1 className="text-3xl font-bold text-white">Novo Produto</h1>
        </div>

        <form className="flex flex-col space-y-4 w-full">
          <Input name="name" placeholder="Produto" required />

          <label>
            <span>
              <UploadCloud size={24} color="#fff" />
            </span>
            <input
              type="file"
              accept="image/png, image/jpeg"
              required
              onChange={handleFile}
            />

            {previewImage && (
              <Image
                src={previewImage}
                alt={"Imagem de preview"}
                fill={true}
                quality={100}
                priority={true}
              />
            )}
          </label>

          <select
            name="category"
            className="w-full p-2 mb-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          >
            <option value="">Selecione a categoria</option>
            <option value="categoria1">Categoria 1</option>
            <option value="categoria2">Categoria 2</option>
          </select>

          <Input name="price" type="number" placeholder="Valor" required />

          <textarea
            name="description"
            placeholder="Descrição"
            className="w-full p-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500 resize-none h-24"
            required
          />

          <Button type="submit" name="Cadastrar">
            Cadastrar
          </Button>
        </form>

        <div className="flex flex-col space-y-2 w-full items-center justify-start mt-8">
          <button className="bg-[#101126] rounded-lg w-full max-w-[720px] p-0 text-left hover:bg-[#1c1c1c] hover:shadow-lg hover:scale-105 transition-all">
            <div className="flex items-stretch w-full h-full group">
              <div className="bg-[#3fffa3] w-[2%] rounded-l-lg"></div>

              <div className="bg-[#101126] w-[98%] rounded-r-lg flex items-center p-4 group-hover:bg-[#1b1b2f] transition-colors">
                <span className="text-white text-lg font-bold group-hover:text-[#3fffa3]">
                  Produto 1
                </span>
              </div>
            </div>
          </button>
          <button className="bg-[#101126] rounded-lg w-full max-w-[720px] p-0 text-left hover:bg-[#1c1c1c] hover:shadow-lg hover:scale-105 transition-all">
            <div className="flex items-stretch w-full h-full group">
              <div className="bg-[#3fffa3] w-[2%] rounded-l-lg"></div>

              <div className="bg-[#101126] w-[98%] rounded-r-lg flex items-center p-4 group-hover:bg-[#1b1b2f] transition-colors">
                <span className="text-white text-lg font-bold group-hover:text-[#3fffa3]">
                  Produto 2
                </span>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
