/**
 * Register a new user.  Returns a JWT on success or throws on conflict.
 */
export declare function register(email: string, password: string): Promise<{
    token: string;
    user: {
        id: string;
        email: string;
    };
}>;
/**
 * Authenticate an existing user.  Returns a JWT on success or throws.
 */
export declare function login(email: string, password: string): Promise<{
    token: string;
    user: {
        id: string;
        email: string;
    };
}>;
export declare class ConflictError extends Error {
    statusCode: number;
    constructor(message: string);
}
export declare class UnauthorizedError extends Error {
    statusCode: number;
    constructor(message: string);
}
//# sourceMappingURL=auth.service.d.ts.map