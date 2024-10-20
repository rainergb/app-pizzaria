
import { Request, Response } from "express";
import { ListCategoryServices } from "../../services/category/ListCategoryServices";

class ListCategoryController{
    async handle(req: Request, res: Response){
        const listCategoryService = new ListCategoryServices();

        const category = await listCategoryService.execute();

        return res.json(category);
    }
}

export { ListCategoryController }