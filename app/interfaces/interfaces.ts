export interface Coords {
	longitude: number;
	latitude: number;
}


export interface Forecast extends cityList{
	message: string;
	cod: string;
	count: number;
}

export interface cityDetails {
	id: number;
	name: string;
	coord?: {
		lat: number;
		lon: number;
	};
	main: {
		temp: number;
		humidity?: number;
		pressure?: number;
		temp_max: number;
		temp_min: number;
	};
	weather?: {
		main: string; 
	}[]
}

export interface cityList {
	list: cityDetails[];
}

export interface cityPage {
	city: cityDetails;
}