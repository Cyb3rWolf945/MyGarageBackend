import { Request, Response, NextFunction } from "express";
/**
 * POST /api/auth/register
 * Body: { email: string, password: string }
 */
export declare function register(req: Request, res: Response, next: NextFunction): Promise<void>;
/**
 * POST /api/auth/login
 * Body: { email: string, password: string }
 */
export declare function login(req: Request, res: Response, next: NextFunction): Promise<void>;
//# sourceMappingURL=auth.controller.d.ts.map