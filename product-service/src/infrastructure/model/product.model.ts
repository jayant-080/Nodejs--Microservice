import { Schema, model } from "mongoose"
import { IProduct } from "../../domain/entities/Product"

const productSchema = new Schema<IProduct>({
    id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    stockCount:{
        type:Number,
        default:0
    },
    description:{
        type:String,
        required:true
    },

})

export const Product = model<IProduct>('product',productSchema)
