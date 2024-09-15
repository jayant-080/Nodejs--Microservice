"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/micro-product-db';
const connectToDatabase = async () => {
    try {
        await mongoose_1.default.connect(MONGO_URI);
        console.log("database connected");
    }
    catch (error) {
        console.log("Error while connecting with mongodb " + error);
        process.exit(1);
    }
};
exports.connectToDatabase = connectToDatabase;
