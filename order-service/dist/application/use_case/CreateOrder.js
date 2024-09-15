"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrder = void 0;
class CreateOrder {
    constructor(orderService, httpProductService, orderResponseMapper) {
        this.orderService = orderService;
        this.httpProductService = httpProductService;
        this.orderResponseMapper = orderResponseMapper;
    }
    async execute(dto) {
        return this.orderService.createOrder(dto);
    }
}
exports.CreateOrder = CreateOrder;
