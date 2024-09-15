import { createOrderDto } from "../dto/createOrderDto";
import { CreateOrderResponseDto } from "../dto/createOrderResponseDto";
import { OrderResponseMapper } from "../mappers/OrderResponse";
import { HttpClientProductService } from "../services/HttpClientProductService";
import { OrderService } from "../services/OrderService";


export class CreateOrder{


    constructor(
        private readonly orderService:OrderService,
        private readonly httpProductService:HttpClientProductService,
        private readonly orderResponseMapper :OrderResponseMapper
        
        ){}

     async execute(dto:createOrderDto):Promise<CreateOrderResponseDto>{
        console.log("use case ",dto)
        return this.orderService.createOrder(dto)
     }


}