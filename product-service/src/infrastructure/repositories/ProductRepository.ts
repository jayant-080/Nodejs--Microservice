import mongoose from "mongoose";
import { IProduct } from "../../domain/entities/Product";
import { IProductRepository } from "../../domain/repositories/IProductRepository";
import { Product } from "../model/product.model";


export class ProductRepository implements IProductRepository{
   


    private isConnected: boolean = false;


    constructor(){
        this.connect()
    }
   

    private async connect(): Promise<void> {
        if (this.isConnected) {
            return;
        }

        const dbUri = process.env.MONGO_URI || 'mongodb://mongodb:27017/microtwo-product-db';

        try {
            await mongoose.connect(dbUri);

            this.isConnected = true;
            console.log('Connected to MongoDB in ProductRepository');
        } catch (error) {
            console.error('Failed to connect to MongoDB', error);
            throw error;
        }
    }
   
    async create(product: IProduct): Promise<IProduct> {
        return await Product.create(product)
    }
    async getById(id: string): Promise<IProduct | null> {
        return await Product.findOne({id:id}).exec()
    }

    async getAll(): Promise<IProduct[] | null> {
         return await Product.find().exec()
    }
    


}