export interface Coords {
	longitude: number;
	latitude: number;
}


export interface Forecast extends List {
	message: string;
	cod: string;
	count: number;
	
}

interface List {
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