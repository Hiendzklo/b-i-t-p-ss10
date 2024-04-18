"use strict";
class Song {
    constructor(id, name, length) {
        this.id = id;
        this._name = name;
        this._length = length;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get length() {
        return this._length;
    }
    set length(value) {
        this._length = value;
    }
}
// Example usage:
const mySong = new Song(1, "Shape of You", 240);
console.log(`Song Name: ${mySong.name}, Length: ${mySong.length}`);
// Change song name and length
mySong.name = "Despacito";
mySong.length = 210;
console.log(`Updated Song Name: ${mySong.name}, Length: ${mySong.length}`);
