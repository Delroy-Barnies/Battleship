import "./style.css";

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
    }

    initializeBoard() {
        let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length; j++) {
                this.board.push([i, j]);
            }
        }
    }

    placeShip(s, e) {
        let coordinates = [];
        let length = 0;

        // 4, 4 >>> 2, 4
        if (s[0] === e[0] && s[1] < e[1]) {
            for (let i = s[1]; i <= e[1]; i++) {
                length++;
                coordinates.push([s[0], i])
            };
        } else if (s[0] === e[0] && s[1] > e[1]) {
            for (let i = s[1]; i >= e[1]; i--) {
                length++;
                coordinates.push([s[0], i])
            };
        } else if (s[1] === e[1] && s[0] < e[0]) {
            for (let i = s[0]; i <= e[0]; i++) {
                length++;
                coordinates.push([i, s[1]])
            };
        } else if (s[1] === e[1] && s[0] > e[0]) {
            for (let i = s[0]; i >= e[0]; i--) {
                length++;
                coordinates.push([i, s[1]])
            };
        }
        let ship = new Ship(coordinates, length);
        this.ships.push(ship);
        return coordinates;
    }

    receiveAttack(path) {
        for (let i = 0; i < this.ships.length; i++) {
            for (let j = 0; j < this.ships[i].coordinates.length; j++) {
                let currantShip = this.ships[i];
                if (path[0] === currantShip.coordinates[j][0] && path[1] === currantShip.coordinates[j][1]) {
                    this.ships[i].hit();
                }
            }
        }
        this.board.forEach(point => {
            if (point[0] === path[0] && point[1] === path[1]) {
                point[0] = "x";
                point[1] = "x";
            }
        });
    }

    hasShipsLeft() {
        for (let i = 0; i < this.ships.length; i++) {
            if (!this.ships[i].sunk) {
                return true;
            }
        }
        return false;
    }
}

class Player {
    constructor() {
        this.gameboard = new Gameboard();
        this.hasShips = false;
        this.numberOfShips = 0;
    }
}

class Computer {
    constructor() {
        this.gameboard = new Gameboard();
        this.hasShips = false;
        this.numberOfShips = 0;
    }
}

module.exports = { Ship, Gameboard };