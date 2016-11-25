import "./styles/main.less";

import { openWeather } from './openweather';
import { renderer } from './renderer';
import { Coords, Forecast } from "./interfaces";

window.onload = () => {
	let weather = new openWeather();

	weather.getLocation().then(location => getWeatherData(location));

	function getWeatherData(data: Coords) {
		weather.getWeatherData(data).then(response => renderer(response));
	}

	//TODO google maps integration
}

