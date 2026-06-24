"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signToken = signToken;
exports.verifyToken = verifyToken;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_1 = require("../config/env");
/**
 * Sign a JWT containing the user's ID.
 */
function signToken(payload) {
    // jsonwebtoken v9 types use a branded StringValue from 'ms' for expiresIn;
    // `as any` avoids a needless runtime dependency.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return jsonwebtoken_1.default.sign(payload, env_1.env.JWT_SECRET, {
        expiresIn: env_1.env.JWT_EXPIRES_IN,
    });
}
/**
 * Verify and decode a JWT.  Throws if the token is invalid or expired.
 */
function verifyToken(token) {
    return jsonwebtoken_1.default.verify(token, env_1.env.JWT_SECRET);
}
//# sourceMappingURL=jwt.js.map