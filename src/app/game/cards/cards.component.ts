import { Component, Input, OnInit } from '@angular/core';
import { Card, ActionType } from 'src/app/models/card';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() cardData: Card | undefined;
  @Input() faceUp: boolean = false;

  //card: Card = new Card('Duque','../../../assets/Images/Duke.png', [ActionType.TAX], [] );
  constructor() { }

  ngOnInit() { 
    
  }

}
