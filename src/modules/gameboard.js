import Ship from "./ship";

export default class Gameboard {
    constructor() {
        this.board = [];
        this.ships = [];
        this.sunkenShips = [];
        this.tilesHit = [];
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
