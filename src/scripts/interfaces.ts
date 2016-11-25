export interface Coords {
	longitude: number;
	latitude: number;
}


export interface Forecast {
	message: string;
	cod: string;
	count: number;
	list: {
		id: number;
		name: string;
		coord: {
			lat: number;
			lon: number;
		};
		main: {
			temp: number;
			humidity: number;
			pressure: number;
			temp_max: number;
			temp_min: number;
		};
		weather: {
			main: string; 
		}[]
	}[]
}

export interface CityForecast {
	name: string;
	temp: number;
	temp_min: number;
	temp_max: number;
}