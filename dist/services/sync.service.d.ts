import { SyncPushBody } from "../types";
export interface SyncPullResult {
    vehicles: object[];
    services: object[];
    parts: object[];
    pieces: object[];
    servicePieceCrossRefs: object[];
}
export declare function pull(userId: string, lastSyncTimestamp?: string): Promise<SyncPullResult>;
export declare function push(userId: string, body: SyncPushBody): Promise<void>;
//# sourceMappingURL=sync.service.d.ts.map