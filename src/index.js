import "./style.css";
import {
    displayAttackOnDom, displayShipsRemaining, displayPlayerShips, removeHelpText
    , displayComputerWinner, displayPlayerWinner
} from "./domFunctions.js";
import Ship from "./modules/ship";
import Gameboard from "./modules/gameboard";
import Player from "./modules/player";
import Computer from "./modules/computer";

function handleAttack(tile, player) {
    let numOfShipsLeft = handleAttackWithoutAdjacentTiles(tile, player);
    checkThenadjacentTiles(numOfShipsLeft, player);
}

function checkThenadjacentTiles(numOfShipsLeft, player) {
    if (numOfShipsLeft > player.gameboard.ships.length) {
        let adjacentTiles = adjacentTilesReveal(player);
        attackAllAdjacentTiles(adjacentTiles, player);
    }
}

function handleAttackWithoutAdjacentTiles(tile, player) {
    let stringPath = tile.id.split(", ");
    let path = stringPath.map(Number);
    let numOfShipsLeft = player.gameboard.ships.length;
    let isShipFound = player.gameboard.receiveAttack(path);
    displayAttackOnDom(isShipFound, path, player.player);
    displayShipsRemaining(player.gameboard.ships.length, player.player);
    return numOfShipsLeft;
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

function getRandomTile(player) {
    const grid = document.getElementById(`${player.player}_grid`);
    const path = player.gameboard.randomAttack();
    let tileAlreadyHit = false;
    player.gameboard.tilesHit.forEach(tile => {
        if (tile[0] === path[0] && tile[1] === path[1]) {
            tileAlreadyHit = true;
        }
    });
    if (tileAlreadyHit) {
        return getRandomTile(player);
    } else {
        player.gameboard.tilesHit.push(path);
        const pathString = path.join(", ");
        let tile;
        grid.querySelectorAll(".tile").forEach(coord => {
            if (coord.id === pathString) {
                tile = coord;
            }
        });
        return tile;
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

        let difficultySetting = document.getElementById("difficulty_slider");
        difficultySetting.disabled = true;

        const grid = document.getElementById(`${computer.player}_grid`);
        grid.querySelectorAll(".tile").forEach(tile => {
            tile.addEventListener("click", function handleTileClicks() {
                if (tile.className != "tile clicked") {

                    if (difficultySetting.checked) handleAttackWithoutAdjacentTiles(tile, computer);
                    else handleAttack(tile, computer);
                    let compTile = getRandomTile(computer);
                    handleAttack(compTile, player);

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

game();