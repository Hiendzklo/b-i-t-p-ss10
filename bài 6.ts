class Song {
    public readonly id: number;
    private _name: string;
    private _length: number;

    constructor(id: number, name: string, length: number) {
        this.id = id;
        this._name = name;
        this._length = length;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get length(): number {
        return this._length;
    }

    set length(value: number) {
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
