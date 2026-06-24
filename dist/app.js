"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const sync_routes_1 = __importDefault(require("./routes/sync.routes"));
const errorHandler_1 = require("./middleware/errorHandler");
const app = (0, express_1.default)();
// ── Global middleware ────────────────────────────────────────────
app.use((0, cors_1.default)());
app.use(express_1.default.json({ limit: "10mb" }));
// ── Health check ─────────────────────────────────────────────────
app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
});
// ── Routes ───────────────────────────────────────────────────────
app.use("/api/auth", auth_routes_1.default);
app.use("/api/sync", sync_routes_1.default);
// ── Global error handler (must be last) ──────────────────────────
app.use(errorHandler_1.errorHandler);
exports.default = app;
//# sourceMappingURL=app.js.map