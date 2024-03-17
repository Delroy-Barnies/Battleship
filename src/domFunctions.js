const playerGameboard = document.getElementById("player_grid");
const computerGameboard = document.getElementById("computer_grid");

function createTile(path) {
    const tile = document.createElement("button");
    tile.className = "tile";
    tile.id = `${path[0]}, ${path[1]}`;

    const noEnemiesFoundIcon = document.createElement("img");
    noEnemiesFoundIcon.src = "../src/icons/2203520_circle_dot_record_round_icon.svg";
    noEnemiesFoundIcon.className = "no_enemies_found_icon";

    const enemiesFoundIcon = document.createElement("img");
    enemiesFoundIcon.src = "../src/icons/116853_fire_icon.svg";
    enemiesFoundIcon.className = "enemies_found_icon";

    tile.appendChild(enemiesFoundIcon);
    tile.appendChild(noEnemiesFoundIcon);

    return tile;
}

document.getElementById("cancel_briefing_button").addEventListener("click", () => {
    const backgroundFilter = document.getElementById("filter");
    backgroundFilter.style.backgroundColor = "#00000000";
    document.getElementById("document").style.display = "none";
    setTimeout(() => {
        backgroundFilter.style.display = "none";
    }, 400);
});

document.querySelectorAll(".restart_button").forEach(button => {
    button.addEventListener("click", () => {
        window.location.reload();
    });
})

for (let i = 0; i <= 9; i++) {
    for (let j = 0; j <= 9; j++) {
        playerGameboard.appendChild(createTile([j, i]));
    }
}
for (let i = 0; i <= 9; i++) {
    for (let j = 0; j <= 9; j++) {
        computerGameboard.appendChild(createTile([j, i]));
    }
}

export function displayAttackOnDom(isShipFound, path, player = "") {
    const pathString = path.join(", ");
    const grid = document.getElementById(`${player}_grid`);
    grid.querySelectorAll(".tile").forEach(tile => { displayAttack(tile, pathString, isShipFound) });

}

function displayAttack(tile, pathString, isShipFound) {
    if (tile.id === pathString) {
        tile.className = "tile clicked";
        if (isShipFound === "shipFound") {
            tile.style.backgroundColor = "rgba(0, 0, 0, 0.881)";
            tile.querySelector(".enemies_found_icon").style.display = "inline";
        } else {
            tile.style.backgroundColor = "rgba(0, 0, 0, 0.881)";
            tile.querySelector(".no_enemies_found_icon").style.display = "inline";
        }
    };
}

export function removeHelpText() {
    document.querySelectorAll(".help_text").forEach(node => {
        node.style.display = "none";
    });

}

export function displayShipsRemaining(numOfShips, player = "") {
    document.getElementById(`${player}_ships_remaining`).textContent = numOfShips;
}

export function displayPlayerShips(coordinates) {
    document.querySelectorAll(".tile").forEach(tile => {
        tile.style.backgroundColor = "rgba(0, 0, 0, 0.523)";
    });
    coordinates.forEach(coord => {
        const pathString = coord.join(", ");
        const tile = document.getElementById(pathString);
        tile.style.backgroundColor = "rgba(12, 190, 42, 0.732)";
    });
}

export function displayComputerWinner() {
    const backgroundFilter = document.getElementById("filter");
    backgroundFilter.style.display = "flex";
    setTimeout(() => {
        backgroundFilter.style.backgroundColor = "##000000d9";
        document.getElementById("lose").style.display = "flex";
    }, 400);
}

export function displayPlayerWinner(shipsDestroyed) {
    const backgroundFilter = document.getElementById("filter");
    const winTextContainer = document.getElementById("win");
    backgroundFilter.style.display = "flex";
    setTimeout(() => {
        backgroundFilter.style.backgroundColor = "#000000d9";
        winTextContainer.style.display = "flex";
    }, 400);

    for (let i = 0; i <= shipsDestroyed; i++) {
        const stars = document.querySelectorAll(".stars");
        stars.forEach(star => {
        });
    }

}