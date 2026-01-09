import { Model, Schema } from "../shared/lib/mongoose.js";
import type {
  CapGameDocument,
  CapGameModel,
} from "../shared/types/game.types.js";
import { gameStatics } from "./statics/game.statics.js";

const GameSchema = new Schema<CapGameDocument, CapGameModel>(
  {
    banner: { type: String, required: true },
    name: { type: String, required: true },
    genres: { type: [String], required: true },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
  },
  { timestamps: true },
);

GameSchema.statics = {
  ...GameSchema.statics,
  ...gameStatics,
};

const GameModel = Model<CapGameDocument, CapGameModel>("Game", GameSchema);

export default GameModel;
