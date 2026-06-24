"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.pull = pull;
exports.push = push;
const syncService = __importStar(require("../services/sync.service"));
/**
 * GET /api/sync/pull?lastSyncTimestamp=2025-01-01T00:00:00Z
 *
 * Returns all records belonging to the authenticated user that were
 * modified after `lastSyncTimestamp`.
 */
async function pull(req, res, next) {
    try {
        const lastSyncTimestamp = req.query.lastSyncTimestamp;
        const data = await syncService.pull(req.user.userId, lastSyncTimestamp);
        res.status(200).json(data);
    }
    catch (err) {
        next(err);
    }
}
/**
 * POST /api/sync/push
 *
 * Accepts { vehicles, services, parts, pieces, servicePieceCrossRefs }
 * and upserts each record.  The backend forces userId = req.user.userId
 * for every record to prevent cross-tenant writes.
 */
async function push(req, res, next) {
    try {
        const body = req.body;
        await syncService.push(req.user.userId, body);
        res.status(200).json({ ok: true });
    }
    catch (err) {
        next(err);
    }
}
//# sourceMappingURL=sync.controller.js.map