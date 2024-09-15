import { ProductDto } from "../dto/ProductDto";
import { ProductService } from "../services/ProductService";


export class GetAllProduct{

   constructor(private readonly productservice:ProductService){

   }

   async execute(){
      return this.productservice.getAllProduct()
   }

}