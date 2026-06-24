import { JwtPayload } from "../types";
/**
 * Sign a JWT containing the user's ID.
 */
export declare function signToken(payload: JwtPayload): string;
/**
 * Verify and decode a JWT.  Throws if the token is invalid or expired.
 */
export declare function verifyToken(token: string): JwtPayload;
//# sourceMappingURL=jwt.d.ts.map