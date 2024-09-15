import { createOrderDto } from "../application/dto/createOrderDto";
import { CreateOrder } from "../application/use_case/CreateOrder";
import  {APIGatewayEvent, APIGatewayProxyResult} from 'aws-lambda'

export class OrderHandler {

    
    constructor(private readonly createOrder:CreateOrder){}



    async createOrderHandler(event:APIGatewayEvent):Promise<APIGatewayProxyResult>{

        try {
            const productDto: createOrderDto = JSON.parse(event.body || '{}');
            console.log(productDto)
            const order = await this.createOrder.execute(productDto);
            return {
                statusCode: 201,
                body: JSON.stringify(order),
            };
        } catch (error) {
            return {
                statusCode: 500,
                body: JSON.stringify(error),
            };
        }
    }




}