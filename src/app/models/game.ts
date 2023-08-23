import { Pile } from "./pile";
import { Player } from "./player";

export class Game {
    constructor(
      public players: Player[] = [],
      public pile: Pile = new Pile(),
      public currentPlayerId: number = 0,
      // Outros estados relevantes.
    ) {}
    
  }