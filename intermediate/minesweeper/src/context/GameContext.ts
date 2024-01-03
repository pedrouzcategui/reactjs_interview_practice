import { createContext, Context } from "react";

type GameState = {
  isGameOver: boolean;
  setIsGameOver: (isGameOver: boolean) => void;
  score: number;
  setScore: (score: number) => void;
};

export const GameContext: Context<GameState> = createContext<GameState>({
  isGameOver: false,
  setIsGameOver: () => {},
  score: 0,
  setScore: () => {},
});
