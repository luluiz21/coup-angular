import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { CardsComponent } from './cards/cards.component';
import { BoardComponent } from './board/board.component';
import { PlayerComponent } from './player/player.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    GameComponent,
    BoardComponent,
    PlayerComponent,
    CardsComponent
  ]
})
export class GameModule { }
