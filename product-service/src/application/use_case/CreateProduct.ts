import { ProductDto } from "../dto/ProductDto";
import { ProductService } from "../services/ProductService";


export class CreateProduct{

   constructor(private readonly productservice:ProductService){

   }

   async execute(dto:ProductDto){
      return this.productservice.createProduct(dto)
   }

}