import "../styles/main.less";

import { OpenWeather } from './openweather';
import { renderer } from './renderer';
import { Coords, Forecast } from "./interfaces";

window.onload = () => {
    getLocation().then(location => renderWeatherData(location));
}

function getLocation(): Promise<Coords> {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((position) => resolve(retrievePosition(position.coords)),
        () => {
            reject(Error("can't get your location, enable HTML5 features"))
        }, {
            enableHighAccuracy: true
        })
    })
}

function retrievePosition(coords: Coords) {
    return {
       longitude: coords.longitude,
        latitude: coords.latitude
    }
}

function renderWeatherData(location: Coords) {
    let weather = new OpenWeather(location.latitude, location.longitude);
    weather.getWeatherData().then(response => renderer(response, location));
}