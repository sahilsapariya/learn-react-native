export type RootStackParamList = {
  StartGame: undefined;
  Game: { userNumber: number };
  GameOver: { rounds: number; userNumber: number };
};
