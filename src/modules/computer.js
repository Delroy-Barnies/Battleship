import Gameboard from "./gameboard";

export default class Computer {
    constructor() {
        this.player = "computer";
        this.gameboard = new Gameboard();
        this.hasShips = false;
        this.numberOfShips = 0;
        this.nextAttack = null;
    }
}