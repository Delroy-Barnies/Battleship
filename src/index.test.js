const myModule = require('./index');
const Gameboard = myModule.Gameboard;
const Ship = myModule.Ship;
const Player = myModule.Player;
const Computer = myModule.Computer;

describe("Ship class", () => {

    test("Ship.hit() register a ship has been hit ship.timesHit to be 1", () => {
        const ship = new Ship();
        ship.hit();
        expect(ship.timesHit).toBe(1);
    });

    test("Ship.hit() register a ship has been hit ship.timesHit to be 2", () => {
        const ship = new Ship();
        ship.hit();
        ship.hit();
        expect(ship.timesHit).toBe(2);
    });

});

describe("Gameboard class", () => {

    test("Gameboard.placeShip([1, 4], [1,6]) for create a new ship with coordinates", () => {
        const gameboard = new Gameboard();
        gameboard.initializeBoard();
        expect(gameboard.placeShip([1, 4], [1, 6])).toStrictEqual([[1, 4], [1, 5], [1, 6]])
    });

    test("Gameboard.placeShip([4, 5], [8, 5]) for create a new ship with coordinates", () => {
        const gameboard = new Gameboard();
        gameboard.initializeBoard();
        expect(gameboard.placeShip([4, 5], [8, 5])).toStrictEqual([[4, 5], [5, 5], [6, 5], [7, 5], [8, 5]]);
    });

    test("Gameboard.receiveAttack([1, 5]) for ship.timesHit to be 1", () => {
        const gameboard = new Gameboard();
        gameboard.initializeBoard();
        gameboard.placeShip([1, 4], [1, 6]);
        gameboard.receiveAttack([1, 5]);
        expect(gameboard.ships[0].timesHit).toStrictEqual(1);
    });

    test("Gameboard.recieveAttack([5, 5]) and ([6, 5]) for ship.timesHit to be 2", () => {
        const gameboard = new Gameboard();
        gameboard.initializeBoard();
        gameboard.placeShip([4, 5], [8, 5]);
        gameboard.receiveAttack([5, 5]);
        gameboard.receiveAttack([6, 5]);
        expect(gameboard.ships[0].timesHit).toStrictEqual(2);
    });

    test("Gameboard.recieveAttack([5, 5]) for Gameboard.board to register [x, x] at attack index", () => {
        const gameboard = new Gameboard();
        gameboard.initializeBoard();
        gameboard.placeShip([4, 5], [8, 5]);
        gameboard.receiveAttack([5, 5]);
        gameboard.receiveAttack([6, 5]);
        console.log(gameboard.board);
    });

    test("Gameboard.hasShipsLeft() to be false", () => {
        const gameboard = new Gameboard();
        gameboard.initializeBoard();
        gameboard.placeShip([1, 4], [1, 5]);
        gameboard.receiveAttack([1, 4]);
        gameboard.receiveAttack([1, 5]);
        expect(gameboard.hasShipsLeft()).toBe(false);
    });

    test("Gameboard.hasShipsLeft() to be true", () => {
        const gameboard = new Gameboard();
        gameboard.initializeBoard();
        gameboard.placeShip([1, 4], [1, 5]);
        gameboard.receiveAttack([1, 4]);
        expect(gameboard.hasShipsLeft()).toBe(true);
    });
});
