import { IProduct } from "../entities/Product";


export interface IProductRepository{
    create(product:IProduct):Promise<IProduct>

    getById(id:string):Promise<IProduct | null>

    getAll():Promise<IProduct[] | null>
}