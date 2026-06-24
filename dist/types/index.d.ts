import { Request } from "express";
export interface JwtPayload {
    userId: string;
}
export interface AuthenticatedRequest extends Request {
    user: JwtPayload;
}
export interface VehiclePayload {
    id: string;
    plate: string;
    name: string;
    year: string;
    mileage: string;
    mileageKm: number;
    inspectionDate?: string | null;
    oilType?: string | null;
    owner: string;
    seatCount?: string | null;
    doorCount?: string | null;
    fuelType: string;
    engineCapacity: string;
    iucValue?: string | null;
    mileageToNextService?: string | null;
    locationAddress?: string | null;
    latitude?: number | null;
    longitude?: number | null;
    localImageFileNames: string[];
    remoteImageUrl?: string | null;
    updatedAt: string;
}
export interface ServiceLogPayload {
    id: string;
    vehicleId: string;
    date: string;
    description: string;
    mileage: string;
    mileageKm: number;
    type: string;
    updatedAt: string;
}
export interface PartPayload {
    id: string;
    serviceLogId: string;
    name: string;
    quantity: number;
    reference?: string | null;
    updatedAt: string;
}
export interface PiecePayload {
    id: string;
    name: string;
    price: number;
    updatedAt: string;
}
export interface ServiceLogPieceCrossRefPayload {
    serviceLogId: string;
    pieceId: string;
    quantity: number;
    updatedAt: string;
}
export interface SyncPushBody {
    vehicles?: VehiclePayload[];
    services?: ServiceLogPayload[];
    parts?: PartPayload[];
    pieces?: PiecePayload[];
    servicePieceCrossRefs?: ServiceLogPieceCrossRefPayload[];
}
//# sourceMappingURL=index.d.ts.map