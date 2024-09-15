"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProductById = void 0;
class GetProductById {
    constructor(productservice) {
        this.productservice = productservice;
    }
    async execute(id) {
        return this.productservice.getProductById(id);
    }
}
exports.GetProductById = GetProductById;
