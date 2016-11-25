import { Coords, Forecast } from "./interfaces";


class openWeather {
	
	constructor() {}

	retrievePosition(coords: Coords): Coords {
		return {
			longitude: coords.longitude,
			latitude: coords.latitude
		}
	}

	getWeatherData(coords: Coords):Promise<Forecast> {
		const API_KEY:string = '096952b48ceb2e1447ba8f5d55f8bda8';
		return new Promise(function(resolve, reject) {
			fetch('http://api.openweathermap.org/data/2.5/find?lat='
				+ coords.latitude + '&lon='
				+ coords.longitude + '&cnt=50&APPID=' + API_KEY + "&units=metric")
				.then(response => response.json())
				.then(data => resolve(data))
				.catch(error => Error("Error fetching data"));
		})
	}

	getLocation():Promise<Coords> {
		return new Promise((resolve, reject) => {
			navigator.geolocation.getCurrentPosition((position) => resolve(this.retrievePosition(position.coords)),
			 () => {
			 	reject(Error("can't get your location, enable HTML5 features"))
			}, {
				enableHighAccuracy: true
			})
		})
	}

}

export { openWeather };