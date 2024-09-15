"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpClientProductService = void 0;
const axios_1 = __importDefault(require("axios"));
class HttpClientProductService {
    constructor() {
        this.ProductServiceUrl = "http://localhost:3000/product";
    }
    async getProductById(id) {
        try {
            const response = await axios_1.default.get(`${this.ProductServiceUrl}/${id}`);
            return response.data;
        }
        catch (error) {
            // Handle error (e.g., product not found, service unavailable)
            throw new Error('Product not found or service unavailable');
        }
    }
}
exports.HttpClientProductService = HttpClientProductService;
