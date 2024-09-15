"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const ProductService_1 = require("../application/services/ProductService");
const ProductRepository_1 = require("../infrastructure/repositories/ProductRepository");
const CreateProduct_1 = require("../application/use_case/CreateProduct");
const productService = new ProductService_1.ProductService(new ProductRepository_1.ProductRepository());
const createProduct = new CreateProduct_1.CreateProduct(productService);
class ProductController {
    constructor(createProductUsecase, getProductByIdUsecase) {
        this.createProductUsecase = createProductUsecase;
        this.getProductByIdUsecase = getProductByIdUsecase;
    }
    async createProductHandler(event) {
        const productDto = JSON.parse(event.body || '{}');
        const product = await this.createProductUsecase.execute(productDto);
        return {
            statusCode: 201,
            body: JSON.stringify(product),
        };
    }
    ;
    async getProductByIdHandler(event) {
        const productid = event.pathParameters.id;
        const product = await this.getProductByIdUsecase.execute(productid);
        return {
            statusCode: 200,
            body: JSON.stringify(product),
        };
    }
    ;
}
exports.ProductController = ProductController;
