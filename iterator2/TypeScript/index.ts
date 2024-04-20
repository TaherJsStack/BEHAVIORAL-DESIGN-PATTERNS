interface Collection {
    collection: number[];
}

interface IIterator {
    next(): number | undefined;
    hasNext(): boolean;
}

class ArrayIterator<T> {
    private collection: T[];
    private position: number = 0;
    constructor(collection: T[]) {
        this.collection = collection;
    }        
    public next(): T {
        let result = this.collection[this.position];
        this.position++;
        return result;
    }
    public hasNext(): boolean {
        // check if there is a next element
        return this.position < this.collection.length;
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

let numberIterator = new ArrayIterator<number>(collection.collection);

while (numberIterator.hasNext()) {
    console.log('numberIterator -->', numberIterator.next());   
}

let stringIterator = new ArrayIterator<string>(['a', 'b', 'c']);
while (stringIterator.hasNext()) {
    console.log('stringIterator -->', stringIterator.next());   
}

let objIterator = new ArrayIterator<{name: string, age: number, email: string}>([{name: 'a', age: 1, email: 'a@a.com'}, {name: 'b', age: 2, email: 'b@b.com'}]);
while (objIterator.hasNext()) {
    console.log('objIterator ----> ', objIterator.next());   
}

