"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProductByIdHandler = exports.CreateProductHandler = void 0;
const ProductController_1 = require("./interface/ProductController");
const CreateProduct_1 = require("./application/use_case/CreateProduct");
const ProductService_1 = require("./application/services/ProductService");
const ProductRepository_1 = require("./infrastructure/repositories/ProductRepository");
const GetProductbyId_1 = require("./application/use_case/GetProductbyId");
const productrepo = new ProductRepository_1.ProductRepository();
const productservice = new ProductService_1.ProductService(productrepo);
const createProductUsecase = new CreateProduct_1.CreateProduct(productservice);
const getProductByIdUseCase = new GetProductbyId_1.GetProductById(productservice);
const productcontroller = new ProductController_1.ProductController(createProductUsecase, getProductByIdUseCase);
const CreateProductHandler = async (event) => {
    return productcontroller.createProductHandler(event);
};
exports.CreateProductHandler = CreateProductHandler;
const GetProductByIdHandler = async (event) => {
    return productcontroller.getProductByIdHandler(event);
};
exports.GetProductByIdHandler = GetProductByIdHandler;
