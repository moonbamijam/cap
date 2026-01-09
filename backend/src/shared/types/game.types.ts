import type { Model } from "mongoose";

export interface CapGame {
  banner: string;
  name: string;
  genres: string[];
  slug: string;
}

export interface CapGameDocument extends CapGame, Document {}

export interface CapGameModel extends Model<CapGameDocument> {
  isGameExist(slug: string): Promise<boolean>;
}
