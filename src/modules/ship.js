export default class Ship {
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
