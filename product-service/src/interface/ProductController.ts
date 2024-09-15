import { ProductDto } from "../application/dto/ProductDto"
import { ProductService } from "../application/services/ProductService"
import { ProductRepository } from "../infrastructure/repositories/ProductRepository"
import { CreateProduct } from "../application/use_case/CreateProduct"
import { APIGatewayEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from "aws-lambda"
import { GetProductById } from "../application/use_case/GetProductbyId"
import { GetAllProduct } from "../application/use_case/GetAllProduct"






export class ProductController{
   
    constructor(
        private readonly createProductUsecase:CreateProduct,
        private readonly getProductByIdUsecase:GetProductById,
        private readonly getAllProductUsecase:GetAllProduct
        ){}

        async createProductHandler(event: APIGatewayEvent): Promise<APIGatewayProxyResult> {
            try {
                const productDto: ProductDto = JSON.parse(event.body || '{}');
                const product = await this.createProductUsecase.execute(productDto);
                return {
                    statusCode: 201,
                    body: JSON.stringify(product),
                };
            } catch (error) {
                return {
                    statusCode: 500,
                    body: JSON.stringify(error),
                };
            }
        };

        async getProductByIdHandler(event: APIGatewayEvent): Promise<APIGatewayProxyResult> {
            const productid = event.pathParameters!.id!

            const product = await this.getProductByIdUsecase.execute(productid);
            return {
                statusCode: 200,
                body: JSON.stringify(product),
            };
        };

        async getAllProductHandler(event: APIGatewayEvent): Promise<APIGatewayProxyResult> {
     

            const product = await this.getAllProductUsecase.execute();
            return {
                statusCode: 200,
                body: JSON.stringify(product),
            };
        };


}