import "./style.css";
import {
    displayAttackOnDom, displayShipsRemaining, displayPlayerShips, removeHelpText
    , displayComputerWinner, displayPlayerWinner
} from "./domFunctions.js";

class Ship {
    constructor(coordinates = [], length = 0, timesHit = 0, sunk = false) {
        this.coordinates = coordinates;
        this.length = length;
        this.timesHit = timesHit;
        this.sunk = sunk;
    }

    hit() {
        this.timesHit++;
        this._isSunk();
    }

    _isSunk() {
        if (this.timesHit >= this.length) this.sunk = true;
    }
}

class Gameboard {
    constructor() {
        this.board = [];
        this.ships = [];
        this.sunkenShips = [];
    }

    initializeBoard() {
        let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length; j++) {
                this.board.push([j, i]);
            }
        }
    }

    resetGame() {
        this.board = [];
        this.ships = [];
        this.sunkenShips = [];
    }

    placeShip(s, e) {
        let coordinates = [];
        let length = 0;

        // 4, 4 >>> 2, 4
        if (s[0] === e[0] && s[1] < e[1]) {
            for (let i = s[1]; i <= e[1]; i++) {
                length++;
                coordinates.push([s[0], i]);
            };
        } else if (s[0] === e[0] && s[1] > e[1]) {
            for (let i = s[1]; i >= e[1]; i--) {
                length++;
                coordinates.push([s[0], i]);
            };
        } else if (s[1] === e[1] && s[0] < e[0]) {
            for (let i = s[0]; i <= e[0]; i++) {
                length++;
                coordinates.push([i, s[1]]);
            };
        } else if (s[1] === e[1] && s[0] > e[0]) {
            for (let i = s[0]; i >= e[0]; i--) {
                length++;
                coordinates.push([i, s[1]]);
            };
        } else if (s[0] === e[0] && s[1] === e[1]) {
            length++;
            coordinates.push([s[0], s[1]]);
        }

        let ship = new Ship(coordinates, length);
        this.ships.push(ship);
        return coordinates;
    }

    receiveAttack(path) {
        let isShipHit = "noShipFound";
        this.board.forEach(point => {
            if (point[0] === path[0] && point[1] === path[1]) {
                point[0] = "x";
                point[1] = "x";
            }
        });
        for (let i = 0; i < this.ships.length; i++) {
            let currantShip = this.ships[i];
            for (let j = 0; j < currantShip.coordinates.length; j++) {
                if (path[0] === currantShip.coordinates[j][0] && path[1] === currantShip.coordinates[j][1]) {
                    currantShip.hit();
                    if (currantShip.sunk) {
                        this.sunkenShips.push(currantShip);
                        this.ships.splice(i, 1);
                    }
                    isShipHit = "shipFound";
                }
            }
        }
        return isShipHit;
    }

    hasShipsLeft() {
        return this.ships.length === 0 ? false : true;
    }

    setRandomShips() {
        this.ships = [];
        let shipLengths = [5, 6, 4, 3, 2];
        const randomShip = (lenOfShip) => {

            let startX = this._getRandomInt(0, 9);
            let startY = this._getRandomInt(0, 9);
            let endX = 0;
            let endY = 0;

            if ((startX + lenOfShip) > 9 && (startY + lenOfShip) > 9) {
                return randomShip(lenOfShip);
            }
            // [4, 3] ship is of length 5;
            if (startX > startY) {
                endY = (startY + lenOfShip) - 1;
                endX = startX;
            }
            else {
                endX = (startX + lenOfShip) - 1;
                endY = startY;
            }

            if (this.ships.length != 0) {
                this.placeShip([startX, startY], [endX, endY]);
                const newShip = this.ships.pop();

                let coords = this.getAllShipCoordinates();

                const currantShipCoords = newShip.coordinates;
                for (let i = 0; i < coords.length; i++) {
                    for (let j = 0; j < currantShipCoords.length; j++) {
                        if (coords[i][0] === currantShipCoords[j][0] && coords[i][1] === currantShipCoords[j][1]) {
                            return randomShip(lenOfShip);
                        }
                    }
                }
            }
            this.placeShip([startX, startY], [endX, endY]);
        }

        shipLengths.forEach(length => {
            randomShip(length);
        });
    }

    getAllShipCoordinates() {
        let coords = [];
        this.ships.forEach(ship => {
            ship.coordinates.forEach(coord => {
                coords.push(coord);
            });
        });
        return coords;
    }

    randomAttack() {
        let startX = this._getRandomInt(0, 9);
        let startY = this._getRandomInt(0, 9);
        return [startX, startY];
    }

    _getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

class Player {
    constructor() {
        this.player = "player";
        this.gameboard = new Gameboard();
        this.hasShips = false;
        this.numberOfShips = 0;
    }
}

class Computer {
    constructor() {
        this.player = "computer";
        this.gameboard = new Gameboard();
        this.hasShips = false;
        this.numberOfShips = 0;
    }
}

function handleAttack(tile, player) {
    let stringPath = tile.id.split(", ");
    let path = stringPath.map(Number);
    let numOfShipsLeft = player.gameboard.ships.length;
    let isShipFound = player.gameboard.receiveAttack(path);

    displayAttackOnDom(isShipFound, path, player.player);
    displayShipsRemaining(player.gameboard.ships.length, player.player);

    if (numOfShipsLeft > player.gameboard.ships.length) {
        let adjacentTiles = adjacentTilesReveal(player);
        attackAllAdjacentTiles(adjacentTiles, player);
    }
}

function adjacentTilesReveal(player) {
    const adjacentTileMoves = [[1, 0],
    [1, 1],
    [0, 1],
    [-1, 1],
    [-1, 0],
    [-1, -1],
    [0, -1],
    [1, -1]];
    let ship = player.gameboard.sunkenShips.shift();
    let queue = ship.coordinates;
    let adjacentTiles = [];
    while (queue.length) {
        let coord = queue.shift();
        for (let i = 0; i < adjacentTileMoves.length; i++) {
            let x = adjacentTileMoves[i][0] + coord[0];
            let y = adjacentTileMoves[i][1] + coord[1];
            adjacentTiles.push([x, y]);
        }
    }
    return adjacentTiles;
}

function attackAllAdjacentTiles(adjacentTiles, player) {
    while (adjacentTiles.length) {
        const currantTile = adjacentTiles.shift();
        const currantTileString = currantTile.join(", ");
        const grid = document.getElementById(`${player.player}_grid`);
        grid.querySelectorAll(".tile").forEach(tile => {
            if (tile.id === currantTileString) {
                if (tile.className != "tile clicked") {
                    handleAttack(tile, player);
                }
            }
        });
    }
}

function game() {

    const computer = new Computer();
    computer.gameboard.initializeBoard();
    computer.gameboard.setRandomShips();

    const player = new Player();
    player.gameboard.initializeBoard();
    player.gameboard.setRandomShips();
    displayPlayerShips(player.gameboard.getAllShipCoordinates());

    document.getElementById("randomise_button").addEventListener("click", () => {
        player.gameboard.setRandomShips(5);
        displayPlayerShips(player.gameboard.getAllShipCoordinates());
    });

    document.getElementById("reset_button").addEventListener("click", () => {
        window.location.reload();
    });

    document.getElementById("start_game_button").addEventListener("click", () => {

        document.getElementById("start_game_button").disabled = true;
        document.getElementById("randomise_button").disabled = true;

        removeHelpText();
        const grid = document.getElementById(`${computer.player}_grid`);
        grid.querySelectorAll(".tile").forEach(tile => {
            tile.addEventListener("click", function handleTileClicks() {
                if (tile.className != "tile clicked") {
                    handleAttack(tile, computer);
                    handleAttack(getRandomTile(computer), player);
                    if (!computer.gameboard.hasShipsLeft()) {
                        console.log(player.gameboard.ships.length);
                        displayPlayerWinner(player.gameboard.ships.length);
                    }
                    if (!player.gameboard.hasShipsLeft()) {
                        displayComputerWinner();
                    }
                }
            });
        });
    });
}

function getRandomTile(player) {
    const grid = document.getElementById(`${player.player}_grid`);
    const path = player.gameboard.randomAttack();
    const pathString = path.join(", ");
    let tile;
    grid.querySelectorAll(".tile").forEach(coord => {
        if (coord.id === pathString) {
            tile = coord;
        }
    });
    if (tile.className === "tile clicked") {
        getRandomTile(player);
    }
    return tile;

}

game();

module.exports = { Ship, Gameboard, Player, Computer };