
import prismaClient from "../../prisma";

interface DetailsRequest{
    order_id: string;

}

class DetailOrderService {
    async execute({ order_id }: DetailsRequest) {
      const orders = await prismaClient.item.findMany({
        where: {
          order_id: order_id,
        },
        include: {
          product: true,  // Incluir detalhes do produto
          order: true,    // Incluir detalhes do pedido
        },
      });
  
      return orders;
    }
  }

export { DetailOrderService }