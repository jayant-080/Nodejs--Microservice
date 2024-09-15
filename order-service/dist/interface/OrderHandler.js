"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderHandler = void 0;
class OrderHandler {
    constructor(createOrder) {
        this.createOrder = createOrder;
    }
    async createOrderHandler(event) {
        try {
            const productDto = JSON.parse(event.body || '{}');
            const order = await this.createOrder.execute(productDto);
            return {
                statusCode: 201,
                body: JSON.stringify(order),
            };
        }
        catch (error) {
            return {
                statusCode: 500,
                body: JSON.stringify(error),
            };
        }
    }
}
exports.OrderHandler = OrderHandler;
