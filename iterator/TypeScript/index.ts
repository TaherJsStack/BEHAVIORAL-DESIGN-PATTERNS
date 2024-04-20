interface Collection {
    collection: number[];
}

interface IIterator {
    next(): number | undefined;
    hasNext(): boolean;
}

class ArrayIterator implements IIterator {
    private collection: Collection;
    private position: number = 0;
    constructor(collection: Collection) {
        this.collection = collection;
    }        
    public next(): number | undefined {
        // check if there is a next element
        if (this.position < this.collection.collection.length) {
            return this.collection.collection[this.position++];
        } else {
            return undefined;
        }
    }
    public hasNext(): boolean {
        // check if there is a next element
        return this.position < this.collection.collection.length;
    }
}


class Collection implements Collection {
    public collection: number[] = [];
    public add(value: number): void {
        this.collection.push(value);
    }
}

// client code
let collection = new Collection();
collection.add(1);
collection.add(2);
collection.add(3);

let iterator = new ArrayIterator(collection);

while (iterator.hasNext()) {
    console.log(iterator.next());   
    console.log(iterator.hasNext());
}