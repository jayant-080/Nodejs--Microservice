"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
class OrderService {
    constructor(orderrepsitory, httpproductService, orderResponseMapper) {
        this.orderrepsitory = orderrepsitory;
        this.httpproductService = httpproductService;
        this.orderResponseMapper = orderResponseMapper;
    }
    async createOrder(dto) {
        try {
            //check product exist 
            const product_dertails = await this.httpproductService.getProductById(dto.productid);
            if (!product_dertails) {
                throw new Error("Product not found");
            }
            const order = {
                id: dto.id,
                productid: dto.productid,
                quantity: dto.quantity,
                price: dto.price * dto.quantity,
                status: "PENDING",
                date: new Date()
            };
            const createOrder = await this.orderrepsitory.createOrder(order);
            return this.orderResponseMapper.toCreateOrderResponseDto(order, product_dertails);
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
exports.OrderService = OrderService;
