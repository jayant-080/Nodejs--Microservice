"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = require("./infrastructure/databse/mongoose");
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
(0, mongoose_1.connectToDatabase)();
app.use(express_1.default.json());
app.listen(2000, () => {
    console.log("running");
});
app.use('/', routes_1.default);
