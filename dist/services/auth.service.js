"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorizedError = exports.ConflictError = void 0;
exports.register = register;
exports.login = login;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const prisma_1 = __importDefault(require("../prisma"));
const jwt_1 = require("../utils/jwt");
const SALT_ROUNDS = 12;
/**
 * Register a new user.  Returns a JWT on success or throws on conflict.
 */
async function register(email, password) {
    const existing = await prisma_1.default.user.findUnique({ where: { email } });
    if (existing) {
        throw new ConflictError("A user with this email already exists");
    }
    const passwordHash = await bcryptjs_1.default.hash(password, SALT_ROUNDS);
    const user = await prisma_1.default.user.create({
        data: { email, passwordHash },
    });
    return {
        token: (0, jwt_1.signToken)({ userId: user.id }),
        user: { id: user.id, email: user.email },
    };
}
/**
 * Authenticate an existing user.  Returns a JWT on success or throws.
 */
async function login(email, password) {
    const user = await prisma_1.default.user.findUnique({ where: { email } });
    if (!user) {
        throw new UnauthorizedError("Invalid email or password");
    }
    const valid = await bcryptjs_1.default.compare(password, user.passwordHash);
    if (!valid) {
        throw new UnauthorizedError("Invalid email or password");
    }
    return {
        token: (0, jwt_1.signToken)({ userId: user.id }),
        user: { id: user.id, email: user.email },
    };
}
// ── Custom error classes (caught by errorHandler) ──────────────
class ConflictError extends Error {
    statusCode = 409;
    constructor(message) {
        super(message);
        this.name = "ConflictError";
    }
}
exports.ConflictError = ConflictError;
class UnauthorizedError extends Error {
    statusCode = 401;
    constructor(message) {
        super(message);
        this.name = "UnauthorizedError";
    }
}
exports.UnauthorizedError = UnauthorizedError;
//# sourceMappingURL=auth.service.js.map