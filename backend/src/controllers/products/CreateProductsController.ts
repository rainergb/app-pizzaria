import { Request, Response } from "express";
import { CreateProductsServices } from "../../services/products/CreateProductsServices";

class CreateProductsController {
  async handle(req: Request, res: Response) {
    const { name, price, description, category_id } = req.body;

    // Verificar se o arquivo foi enviado corretamente
    if (!req.file) {
      return res.status(400).json({ error: "Erro de upload, tente novamente" });
    }

    const { filename: banner } = req.file; // Pega o nome do arquivo salvo pelo multer

    const createProductsServices = new CreateProductsServices();

    const products = await createProductsServices.execute({
      name,
      price,
      description,
      banner, 
      category_id,
    });

    return res.json(products);
  }
}

export { CreateProductsController };
