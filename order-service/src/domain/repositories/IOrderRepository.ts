import { Order } from "../entities/Order";


export interface IOrderRepository{
   
    createOrder(order:Order):Promise<Order>
    acceptOrder(id:number):Promise<Order>
    getOrderById(id:number):Promise<Order | null>
    getAllOrder():Promise<Order | null>



}