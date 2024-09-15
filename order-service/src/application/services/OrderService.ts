import { Order } from "../../domain/entities/Order";
import { IOrderRepository } from "../../domain/repositories/IOrderRepository";
import { KafkaEventPublisher } from "../../infrastructure/messaging/KafkaPublisher";
import { createOrderDto } from "../dto/createOrderDto";
import { CreateOrderResponseDto } from "../dto/createOrderResponseDto";
import { OrderResponseMapper } from "../mappers/OrderResponse";
import { HttpClientProductService } from "./HttpClientProductService";


export class OrderService {

constructor(
    private readonly orderrepsitory:IOrderRepository,
    private readonly httpproductService:HttpClientProductService,
    private readonly orderResponseMapper:OrderResponseMapper,
    private readonly kafkaEventPublisher: KafkaEventPublisher // Add KafkaEventPublisher here


    ){}



   async createOrder(dto:createOrderDto):Promise<CreateOrderResponseDto> {

        try {

            //check product exist 
            console.log("service ",dto)
            const product_dertails = await this.httpproductService.getProductById(dto.productid)
            console.log("service ",product_dertails)
            if(!product_dertails){
                throw new Error("Product not found");
                
            }
            

            const order:Order = {
                
                price:dto.quantity*product_dertails.price,
                status:"PENDING",
                date:new Date(),
              
                productid:dto.productid,
                quantity:dto.quantity,
               
            }

            const createOrder = await this.orderrepsitory.createOrder(order)
            console.log(createOrder)

             // Publish an event to Kafka
          await this.kafkaEventPublisher.publish('order-placed', {
           createOrder
          });

            return this.orderResponseMapper.toCreateOrderResponseDto(order,product_dertails)
            
        } catch (error:any) {
            throw new Error(error)
        }


       
   }

}