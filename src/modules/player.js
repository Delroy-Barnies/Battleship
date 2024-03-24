import Gameboard from "./gameboard";

export default class Player {
    constructor() {
        this.player = "player";
        this.gameboard = new Gameboard();
        this.hasShips = false;
        this.numberOfShips = 0;
    }
}