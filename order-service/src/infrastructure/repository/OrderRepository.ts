import { PrismaClient } from "@prisma/client";
import { Order } from "../../domain/entities/Order";
import { IOrderRepository } from "../../domain/repositories/IOrderRepository";



export class OrderRepsitory implements IOrderRepository{

    private primsmaclient:PrismaClient
    constructor(){

       this.primsmaclient = new PrismaClient()
    }


    async createOrder(data: Order): Promise<Order> {
    //    throw new Error("Method not implemented.");
       try {
        console.log("repo ",data)
        console.log("DATABASE_URL:", process.env.DATABASE_URL);
        const createorder = await this.primsmaclient.order.create({
            data
        })
        console.log("repo2 ",createorder)

        return createorder
       } catch (error:any) {
           console.log(error)
          throw new Error(error)
       }

    }
    acceptOrder(id: number): Promise<Order> {
        throw new Error("Method not implemented.");
    }
    getOrderById(id: number): Promise<Order | null> {
        throw new Error("Method not implemented.");
    }
    getAllOrder(): Promise<Order | null> {
        throw new Error("Method not implemented.");
    }


}