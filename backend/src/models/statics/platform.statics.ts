import PlatformModel from "../platform.model.js";

export const platformStatics = {
  isPlatformExist: async (slug: string): Promise<boolean> => {
    const platform = await PlatformModel.findOne({ slug });
    return !!platform;
  },
};
