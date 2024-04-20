class User {
    constructor (public name: string) {}
}

interface IItrattorResult<T> {
    value: T | null;
    done: boolean;
}

interface IIterator<T> {
    next(): IItrattorResult<T>;
    hasNext(): boolean;
}

interface ICollection<T> {
    createItrator(): IIterator<T>;
}

class UserCollection implements ICollection<User> {
    
    constructor (private users: User[]) {}

    public getItems(): User[] {
        return this.users;
    }

    public createItrator(): IIterator<User> {
        return new UserItrator(this);
    }

}

class UserItrator implements IIterator<User> {
    private collection: UserCollection;
    private position: number = 0;

    constructor(collection: UserCollection) {
        this.collection = collection;
    }

    public hasNext(): boolean {
        return this.position < this.collection.getItems().length;
    }

    public next(): IItrattorResult<User> {
        if (this.hasNext()) {
            return {
                value: this.collection.getItems()[this.position++],
                done: false
            };
        } else {
            return {
                value: null,
                done: true
            };
        }
    }


}


// --------------------------------------------------------------

// client code
// let userCollection = new UserCollection([
//     new User('a'),
//     new User('b'),
//     new User('c')
// ]);

let users = [
    new User('a'),
    new User('b'),
    new User('c')
]

let userCollection = new UserCollection(users);

let itrator = userCollection.createItrator();
let itrator2 = userCollection.createItrator();

do{
    console.log(itrator.next());
} while (itrator.hasNext())

// do{
//     console.log(itrator2.next());
// } while (itrator2.hasNext())

while (itrator2.hasNext()) {
    console.log(itrator2.next());
}   


