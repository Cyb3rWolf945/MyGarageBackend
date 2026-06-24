"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const adapter_pg_1 = require("@prisma/adapter-pg");
// Prisma 7 requires a Driver Adapter (or Accelerate URL) at runtime.
// prisma.config.ts is only used by the CLI (migrations, generate, etc.).
const pool = new adapter_pg_1.PrismaPg({
    connectionString: process.env.DATABASE_URL,
});
const prisma = new client_1.PrismaClient({
    adapter: pool,
});
exports.default = prisma;
//# sourceMappingURL=prisma.js.map