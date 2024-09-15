"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ProductController_1 = require("./interface/ProductController");
const route = express_1.default.Router();
route.post('/product', ProductController_1.createProductHandler);
route.get('/product', () => {
    console.log("hello");
});
exports.default = route;
