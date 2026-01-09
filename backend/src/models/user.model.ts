import type {
  CapUserDocument,
  CapUserModel,
} from "../shared/types/user.types.js";
import { Model, Schema } from "../shared/lib/mongoose.js";
import { userStatics } from "./statics/user.statics.js";

const UserSchema = new Schema<CapUserDocument, CapUserModel>(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true },
);

UserSchema.statics = {
  ...UserSchema.statics,
  ...userStatics,
};

export const UserModel = Model<CapUserDocument, CapUserModel>(
  "User",
  UserSchema,
);
