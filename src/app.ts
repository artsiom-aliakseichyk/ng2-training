import "./styles/main.less";

import { getCurrentLocation as geo} from './getCurrentLocation'
import { openWeather } from './openweather';
window.onload = () => {
	console.log("HELLO WORLD!");
	let location = new geo();
	let weather = new openWeather();

	let coordinates = location.getPosition();
	weather.getWeather({
		longitude: 13,
		latitude: 10
	});

	console.log();
}