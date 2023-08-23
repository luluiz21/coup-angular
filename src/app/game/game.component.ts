import { Component, OnInit } from '@angular/core';
import { Player } from '../models/player';
import { ActionType, Card } from '../models/card';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  cards: Card[] = [new Card('Duque','../../../assets/Images/Duke.png', [ActionType.TAX], [] ), new Card('Captain','../../../assets/Images/Captain.png', [ActionType.STEAL], [] )]
  currentPlayer: Player = new Player(1, 'luluiz21', this.cards, 2);

  constructor() { }

  ngOnInit() {
  }

}
