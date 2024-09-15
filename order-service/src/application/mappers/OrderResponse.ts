import { Order } from "../../domain/entities/Order";
import { CreateOrderResponseDto } from "../dto/createOrderResponseDto";
import { ProductDto } from "../dto/productDto";


export class OrderResponseMapper{



    toCreateOrderResponseDto(order:Order,product_dertails:ProductDto):CreateOrderResponseDto{

       return{
           id:order.id!!,
           product:product_dertails,
           price:product_dertails.price,
           quantity:order.quantity,
           status:order.status,
           date:order.date
       }

    }

}