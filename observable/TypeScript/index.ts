// observable

interface IObserver {
    update(subject: ISubject): void
}


class ConcreteObserver implements IObserver {

    constructor(public id: number) {}

    public update(subject: ISubject): void {
        console.log(`Observer ${this.id} has state ${subject.getState()}`);
    }
}


interface ISubject {
    addObserver(observer: IObserver): void;
    removeObserver(observer: IObserver): void;
    notifyObservers(): void;
    getState(): number;
    setState(state: number): void; 
}


class ConcreteSubject implements ISubject {
    private state: number;
    private observers: IObserver[] = [];
    constructor() {
        this.state = 0;
    }

    public addObserver(observer: IObserver): void {
        let isExists = this.observers.includes(observer);
        if (isExists) {
            return console.log('Observer already added', observer);            
        }
        this.observers.push(observer);
        console.log('Observer added successfully', observer);
    }

    public removeObserver(observer: IObserver): void {
        const index = this.observers.indexOf(observer);
        if (index === -1) {
            return console.log('Observer not found', observer);
        }
        this.observers.splice(index, 1);
        console.log('Observer removed successfully', observer);
    }

    public notifyObservers(): void {
        for (const observer of this.observers) {
            observer.update(this);
        }
    }

    public getState(): number {
        return this.state;
    }

    public setState(state: number): void {
        this.state = state;
        this.notifyObservers();
    }

}

// client code

let subject = new ConcreteSubject();
let observer1 = new ConcreteObserver(1);
subject.addObserver(observer1);

let observer2 = new ConcreteObserver(2);
subject.addObserver(observer2);

let observer3 = new ConcreteObserver(3);
subject.addObserver(observer3);
// subject.setState(10);
// subject.notifyObservers();
// console.log(subject.getState());
// subject.removeObserver(observer2);
// subject.notifyObservers();

// let observer4 = new ConcreteObserver(4);
// subject.addObserver(observer4);



