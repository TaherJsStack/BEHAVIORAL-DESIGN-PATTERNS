
import { CurrentConditionsDisplay, WatchWeather } from './class-implementation';

// client code
const weather = new WatchWeather();
const currentConditionsDisplay = new CurrentConditionsDisplay(weather);
weather.registerObserver(currentConditionsDisplay);

weather.setMeasurements(80, 65, 30.4);

weather.setMeasurements(82, 70, 29.2);

weather.setMeasurements(78, 90, 29.2);

