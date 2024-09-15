
import axios from 'axios'
import { ProductDto } from '../dto/productDto';

export class HttpClientProductService{

  private readonly ProductServiceUrl = "http://product-service:3000/product"


  async getProductById(id:string){
    try {
      console.log("http",id)
        const response = await axios.get<ProductDto>(`${this.ProductServiceUrl}/${id}`);
        console.log("http",response)
        return response.data;
       
      } catch (error:any) {
        console.log("http",error)
        // Handle error (e.g., product not found, service unavailable)
        throw new Error('Product not found or service unavailable');
      }
  }

}