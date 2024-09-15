"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Product_1 = require("../../domain/entities/Product");
class ProductRepository {
    constructor() {
        this.isConnected = false;
        this.connect();
    }
    async connect() {
        if (this.isConnected) {
            return;
        }
        const dbUri = process.env.MONGO_URI || 'mongodb://localhost:27017/microtwo-product-db';
        try {
            await mongoose_1.default.connect(dbUri);
            this.isConnected = true;
            console.log('Connected to MongoDB in ProductRepository');
        }
        catch (error) {
            console.error('Failed to connect to MongoDB', error);
            throw error;
        }
    }
    async create(product) {
        return await Product_1.Product.create(product);
    }
    async getById(id) {
        return await Product_1.Product.findById(id).exec();
    }
}
exports.ProductRepository = ProductRepository;
