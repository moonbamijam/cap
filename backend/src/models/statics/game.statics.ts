import GameModel from "../game.model.js";

export const gameStatics = {
  isGameExist: async (slug: string): Promise<boolean> => {
    const game = await GameModel.findOne({ slug });
    return !!game;
  },
};
