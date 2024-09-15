import { APIGatewayEvent, APIGatewayProxyResult } from "aws-lambda"
import { createOrderDto } from "./application/dto/createOrderDto"
import { CreateOrder } from "./application/use_case/CreateOrder"
import { OrderService } from "./application/services/OrderService"
import { OrderRepsitory } from "./infrastructure/repository/OrderRepository"
import { HttpClientProductService } from "./application/services/HttpClientProductService"
import { OrderResponseMapper } from "./application/mappers/OrderResponse"
import { OrderHandler } from "./interface/OrderHandler"
import { KafkaEventPublisher } from "./infrastructure/messaging/KafkaPublisher"
import { KafkaClient } from "kafka-node"




const orderrepo  = new OrderRepsitory()
const httpProductService = new HttpClientProductService()
const orderresponse = new OrderResponseMapper()

const kafkaHost = process.env.KAFKA_BROKER || 'kafka:9092';
const kafkaclient = new KafkaClient({kafkaHost})


kafkaclient.on('ready', () => {
    console.log('Kafka Client is connected and ready.');
});

kafkaclient.on('error', (err) => {
    console.error('Kafka Client connection error:', err);
});
const kafkaEventPublisher = new KafkaEventPublisher(kafkaclient)

const orderservice = new OrderService(orderrepo,httpProductService,orderresponse,kafkaEventPublisher)

const createOrderUsecase = new CreateOrder(orderservice,httpProductService,orderresponse)
const handler = new OrderHandler(createOrderUsecase)


export const createOrder = async(event:APIGatewayEvent):Promise<APIGatewayProxyResult>=>{


    return await handler.createOrderHandler(event)


}