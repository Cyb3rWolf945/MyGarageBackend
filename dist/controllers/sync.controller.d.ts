import { Response, NextFunction } from "express";
import { AuthenticatedRequest } from "../types";
/**
 * GET /api/sync/pull?lastSyncTimestamp=2025-01-01T00:00:00Z
 *
 * Returns all records belonging to the authenticated user that were
 * modified after `lastSyncTimestamp`.
 */
export declare function pull(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void>;
/**
 * POST /api/sync/push
 *
 * Accepts { vehicles, services, parts, pieces, servicePieceCrossRefs }
 * and upserts each record.  The backend forces userId = req.user.userId
 * for every record to prevent cross-tenant writes.
 */
export declare function push(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void>;
//# sourceMappingURL=sync.controller.d.ts.map