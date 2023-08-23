export enum ActionType {
    INCOME = 'INCOME',
    FOREIGN_AID = 'FOREIGN_AID',
    COUP = 'COUP',
    TAX = 'TAX',
    ASSASSINATE = 'ASSASSINATE',
    EXCHANGE = 'EXCHANGE',
    STEAL = 'STEAL',
    TRADE = 'TRADE',
    IVESTIGATE = 'INVESTIGATE'
  }

export class Card {
    constructor(
        public name: string,
        public image: string,
        public allowedActions: ActionType[],
        public blockableActions: ActionType[]
    ) {}
}
  
