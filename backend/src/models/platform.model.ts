import { Schema, Model } from "../shared/lib/mongoose.js";
import type {
  CapPlatformDocument,
  CapPlatformModel,
} from "../shared/types/platform.types.js";
import { platformStatics } from "./statics/platform.statics.js";

const PlatformSchema = new Schema<CapPlatformDocument, CapPlatformModel>(
  {
    name: { type: String, required: true },
    banner: { type: String, required: true },
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

PlatformSchema.statics = {
  ...PlatformSchema.statics,
  ...platformStatics,
};

const PlatformModel = Model<CapPlatformDocument, CapPlatformModel>(
  "Platform",
  PlatformSchema,
);

export default PlatformModel;
