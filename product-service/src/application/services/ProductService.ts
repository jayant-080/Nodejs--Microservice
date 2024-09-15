import { KafkaClient } from "kafka-node";
import { IProductRepository } from "../../domain/repositories/IProductRepository";
import { ProductDto } from "../dto/ProductDto";
import { KafkaConsumer } from "../../infrastructure/messaging/KafkaConsumer";



export class ProductService{

    private kafkaconsumer:KafkaConsumer


    constructor(private readonly productrepository:IProductRepository,kafkaclient:KafkaClient){
        this.kafkaconsumer = new KafkaConsumer(kafkaclient, 'order-placed');


        this.kafkaconsumer.subscribe(async (message: any) => {
            // Handle the message here
            console.log("Received Kafka message:", message);
      
            // const { productId, quantity } = message;
      
            // // Update the stock quantity
            // await this.updateStockQuantity(productId, quantity);
          });
    }


    async createProduct(dto:ProductDto){
       return await this.productrepository.create(dto)
    }

    async getProductById(id:string){
        return await this.productrepository.getById(id)
    }

    async getAllProduct(){
        return await this.productrepository.getAll()
    }
}