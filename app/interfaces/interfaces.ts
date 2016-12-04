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
	}[]
}

interface weatherData {
	temp: number;
	humidity: number;
	pressure: number;
	temp_max: number;
	temp_min: number;

}


