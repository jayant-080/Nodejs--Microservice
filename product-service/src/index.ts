import { APIGatewayEvent, APIGatewayProxyResult } from "aws-lambda";
import { ProductController } from "./interface/ProductController";
import { CreateProduct } from "./application/use_case/CreateProduct";
import { ProductService } from "./application/services/ProductService";
import { ProductRepository } from "./infrastructure/repositories/ProductRepository";
import { GetProductById } from "./application/use_case/GetProductbyId";
import { GetAllProduct } from "./application/use_case/GetAllProduct";
import { KafkaClient } from "kafka-node";



const productrepo = new ProductRepository()

const kafkaHost = process.env.KAFKA_BROKER || 'kafka:9092';
const kafkaclient = new KafkaClient({kafkaHost})

kafkaclient.on('ready', () => {
    console.log('Kafka Client is connected and ready. ',kafkaHost);
});

kafkaclient.on('error', (err) => {
    console.error('Kafka Client connection error:', err);
});




const productservice = new ProductService(productrepo,kafkaclient)

const createProductUsecase = new CreateProduct(productservice)
const getProductByIdUseCase = new GetProductById(productservice)
const getAllProductUseCase = new GetAllProduct(productservice)

const productcontroller = new ProductController(createProductUsecase,getProductByIdUseCase,getAllProductUseCase)




export const CreateProductHandler = async(event:APIGatewayEvent):Promise<APIGatewayProxyResult>=>{

      return productcontroller.createProductHandler(event)


}


export const GetProductByIdHandler = async(event:APIGatewayEvent):Promise<APIGatewayProxyResult>=>{

    return productcontroller.getProductByIdHandler(event)


}



export const GetAllProductHandler = async(event:APIGatewayEvent):Promise<APIGatewayProxyResult>=>{

    return productcontroller.getAllProductHandler(event)


}