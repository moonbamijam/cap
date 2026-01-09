import type { Model } from "mongoose";

export interface CapPlatform {
  banner: string;
  name: string;
  slug: string;
}

export interface CapPlatformDocument extends CapPlatform, Document {}

export interface CapPlatformModel extends Model<CapPlatformDocument> {
  isPlatformExist(slug: string): Promise<boolean>;
}
