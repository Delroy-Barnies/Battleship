import Ship from "../ship.js";

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