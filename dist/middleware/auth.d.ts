import { Response, NextFunction } from "express";
import { AuthenticatedRequest } from "../types";
/**
 * Express middleware that verifies the `Authorization: Bearer <token>`
 * header and attaches the decoded user payload to `req.user`.
 *
 * Returns 401 if the header is missing or the token is invalid/expired.
 */
export declare function authMiddleware(req: AuthenticatedRequest, res: Response, next: NextFunction): void;
//# sourceMappingURL=auth.d.ts.map