"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = errorHandler;
/**
 * Global error-handling middleware.
 * Catches any unhandled errors thrown in route handlers.
 */
function errorHandler(err, _req, res, _next) {
    console.error("[ErrorHandler]", err.message, err.stack);
    res.status(500).json({
        error: "Internal server error",
        ...(process.env.NODE_ENV === "development" && { details: err.message }),
    });
}
//# sourceMappingURL=errorHandler.js.map