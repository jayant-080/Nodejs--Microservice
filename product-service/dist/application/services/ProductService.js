"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
class ProductService {
    constructor(productrepository) {
        this.productrepository = productrepository;
    }
    async createProduct(dto) {
        return await this.productrepository.create(dto);
    }
    async getProductById(id) {
        return await this.productrepository.getById(id);
    }
}
exports.ProductService = ProductService;
