interface IObserver{
    update(temprature: number, humidity: number, pressure: number): void;
}

interface ISubject{
    registerObserver(observer: IObserver): void;
    removeObserver(observer: IObserver): void;
    notifyObservers(): void;
}

export class WatchWeather implements ISubject{
    private observers: IObserver[] = [];
    private temprature: number | undefined;
    private humidity: number | undefined;
    private pressure: number | undefined;

    // constructor() {
    //     this.temprature = 0;
    //     this.humidity = 0;
    //     this.pressure = 0;
    // }

    public registerObserver(observer: IObserver): void {
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
        
        if (
            this.temprature === undefined ||
            this.humidity === undefined ||
            this.pressure === undefined
        ) {
            return console.log('Weather data not available');
        }
        for (let observer of this.observers) {
            observer.update(this.temprature, this.humidity, this.pressure);
        }
    }


    setMeasurements(temprature: number, humidity: number, pressure: number): void {
        this.temprature = temprature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.notifyObservers();
    }

}


export class CurrentConditionsDisplay implements IObserver{
    private temprature: number | undefined;
    private humidity: number | undefined;
    private pressure: number | undefined;

    constructor(private weather: WatchWeather) {
        this.weather.registerObserver(this);
    }

    public update(temprature: number, humidity: number, pressure: number): void {
        this.temprature = temprature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.display();
    }

    display(): void {
        if (this.temprature !== undefined && this.humidity !== undefined && this.pressure !== undefined) {
            console.log(`
                Current conditions: ${this.temprature}F degrees, 
                humidity: ${this.humidity}%,
                pressure: ${this.pressure} `);
        }
    }
}


// client code
// const weather = new watchWeather();
// const currentConditionsDisplay = new CurrentConditionsDisplay(weather);
// weather.registerObserver(currentConditionsDisplay);

// weather.setMeasurements(80, 65, 30.4);

// weather.setMeasurements(82, 70, 29.2);

// weather.setMeasurements(78, 90, 29.2);

