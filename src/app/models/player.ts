import { Card } from "./card";

export class Player{
    constructor(public id: number, public name: string, public cards: Card[] = [], private life: number) {}
}