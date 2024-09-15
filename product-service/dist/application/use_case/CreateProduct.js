"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProduct = void 0;
class CreateProduct {
    constructor(productservice) {
        this.productservice = productservice;
    }
    async execute(dto) {
        return this.productservice.createProduct(dto);
    }
}
exports.CreateProduct = CreateProduct;
