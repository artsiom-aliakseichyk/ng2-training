import { Forecast } from "./interfaces";

class OpenWeather {
    latitude: number;
    longitude: number;

    constructor(latitude: number, longitude: number) {
        this.longitude = longitude;
        this.latitude = latitude;
    }

    getWeatherData(): Promise<Forecast> {
        let self = this;
        const API_KEY: string = '096952b48ceb2e1447ba8f5d55f8bda8';
        return new Promise(function(resolve, reject) {
            fetch('http://api.openweathermap.org/data/2.5/find?lat='
                + self.latitude + '&lon='
                + self.longitude + '&cnt=50&APPID=' + API_KEY + "&units=metric")
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(error => Error("Error fetching data"));
        })
    }
}

export { OpenWeather };