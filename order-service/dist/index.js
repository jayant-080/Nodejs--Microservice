"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrder = void 0;
const CreateOrder_1 = require("./application/use_case/CreateOrder");
const OrderService_1 = require("./application/services/OrderService");
const OrderRepository_1 = require("./infrastructure/repository/OrderRepository");
const HttpClientProductService_1 = require("./application/services/HttpClientProductService");
const OrderResponse_1 = require("./application/mappers/OrderResponse");
const OrderHandler_1 = require("./interface/OrderHandler");
const orderrepo = new OrderRepository_1.OrderRepsitory();
const httpProductService = new HttpClientProductService_1.HttpClientProductService();
const orderresponse = new OrderResponse_1.OrderResponseMapper();
const orderservice = new OrderService_1.OrderService(orderrepo, httpProductService, orderresponse);
const createOrderUsecase = new CreateOrder_1.CreateOrder(orderservice, httpProductService, orderresponse);
const handler = new OrderHandler_1.OrderHandler(createOrderUsecase);
const createOrder = async (event) => {
    return await handler.createOrderHandler(event);
};
exports.createOrder = createOrder;
