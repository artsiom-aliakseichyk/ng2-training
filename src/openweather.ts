import { Coords } from "./interfaces";
class openWeather {
	private API_KEY:string = '096952b48ceb2e1447ba8f5d55f8bda8';

	constructor() {

	}

	getWeather(coords: Coords) {
		fetch('http://api.openweathermap.org/data/2.5/find?lat='
			+ /*coords.latitude*/53.9 + '&lon='
			+ /*coords.longitude*/27.4 + '&cnt=50&APPID=' + this.API_KEY)
			.then(response => response.json())
			.then(data => console.log(data))
			.catch(error => console.log(error));
	}
}

export { openWeather };