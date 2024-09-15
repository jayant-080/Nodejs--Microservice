import { createOrderDto } from "./createOrderDto";
import { ProductDto } from "./productDto";


export interface CreateOrderResponseDto{
    id: number;
    product: ProductDto;
    quantity: number;
    price: number;
    status: string;
    date: Date;
 
     
}