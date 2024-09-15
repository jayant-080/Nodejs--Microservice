import { ProductDto } from "../dto/ProductDto";
import { ProductService } from "../services/ProductService";


export class GetProductById{

   constructor(private readonly productservice:ProductService){

   }

   async execute(id:string){
      return this.productservice.getProductById(id)
   }

}