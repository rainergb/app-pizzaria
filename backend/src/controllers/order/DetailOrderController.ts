
import { Request, Response } from "express";
import { DetailOrderService } from "../../services/order/DetailOrderService";

class DetailOrderController {
    async handle(req: Request, res: Response) {
      const order_id = req.query.order_id as string;
  
      if (!order_id) {
        return res.status(400).json({ error: "Order ID is required." });
      }
  
      const detailOrderService = new DetailOrderService();
  
      try {
        const orders = await detailOrderService.execute({ order_id });
        return res.json(orders);
      } catch (err) {
        return res.status(500).json({ error: "Error fetching order details." });
      }
    }
  }

export { DetailOrderController }