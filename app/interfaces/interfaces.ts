export interface Coords {
	longitude: number;
	latitude: number;
}

export interface cityDetails {
	id: number;
	name: string;
	coord: {
		lat: number;
		lon: number;
	};
	main: weatherData
	weather: {
		main: string; 
	}[];
	dt: number;
	fav: boolean;
}

interface weatherData {
	temp: number;
	humidity: number;
	pressure: number;
	temp_max: number;
	temp_min: number;
}

interface checkboxEventTarget extends EventTarget {
	checked: boolean;
}
export interface checkboxEvent extends Event {
	target: checkboxEventTarget;
}

export interface emmitChangeFavObject {
	checkbox: boolean;
	id: number;
}

