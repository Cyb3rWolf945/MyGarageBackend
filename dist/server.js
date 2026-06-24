"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const env_1 = require("./config/env");
app_1.default.listen(env_1.env.PORT, () => {
    console.log(`🚗 MyGarage API running on http://localhost:${env_1.env.PORT}`);
    console.log(`   Health: http://localhost:${env_1.env.PORT}/api/health`);
});
exports.default = app_1.default;
//# sourceMappingURL=server.js.map