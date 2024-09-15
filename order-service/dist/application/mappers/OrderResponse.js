"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderResponseMapper = void 0;
class OrderResponseMapper {
    toCreateOrderResponseDto(order, product_dertails) {
        return {
            id: order.id,
            product: product_dertails,
            price: product_dertails.price,
            quantity: order.quantity,
            status: order.status,
            date: order.date
        };
    }
}
exports.OrderResponseMapper = OrderResponseMapper;
