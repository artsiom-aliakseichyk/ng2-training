export interface Coords {
	longitude: number;
	latitude: number;
}

export interface cityDetails extends weatherData {
	id: number;
	name: string;
	coord: {
		lat: number;
		lon: number;
	};
	weather: {
		main: string; 
	}[]
}

interface weatherData {
	main: {
		temp: number;
		humidity: number;
		pressure: number;
		temp_max: number;
		temp_min: number;
	}
}
