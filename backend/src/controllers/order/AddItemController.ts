
import { Request, Response } from "express";
import { AddItemsServices } from "../../services/order/AddItemService";

class AddItemControler{
    async handle(req: Request, res: Response){

        const { order_id, product_id, amount } = req.body;

        const addItem = new AddItemsServices();

        const order = await addItem.execute({
            order_id,
            product_id,
            amount
        });

        return res.json(order);

    }
}

export { AddItemControler }