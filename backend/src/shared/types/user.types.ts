import type { Document, Model } from "mongoose";

export interface CapUser {
  username: string;
  password: string;
  email: string;
}

export interface CapUserDocument extends CapUser, Document {}

export interface CapUserModel extends Model<CapUserDocument> {
  signup(
    username: string,
    email: string,
    password: string,
  ): Promise<CapUserDocument>;
  login(username: string, password: string): Promise<CapUserDocument>;
}
