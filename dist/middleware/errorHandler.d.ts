import { Request, Response, NextFunction } from "express";
/**
 * Global error-handling middleware.
 * Catches any unhandled errors thrown in route handlers.
 */
export declare function errorHandler(err: Error, _req: Request, res: Response, _next: NextFunction): void;
//# sourceMappingURL=errorHandler.d.ts.map