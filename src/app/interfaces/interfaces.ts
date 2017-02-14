import {Response} from "@angular/http";

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
	weather: weatherIcon[];
	dt: number;
	fav: boolean;
	wind: windData;
}

export interface weatherData {
	temp: number;
	humidity: number;
	pressure: number;
	temp_max: number;
	temp_min: number;
}

export interface windData {
	deg: number;
	gust: number;
	speed: number;
}

export interface weatherIcon {
	description: string;
	icon: string;
	id: number;
	main: string;
}
export interface checkboxEventTarget extends EventTarget {
	checked: boolean;
}

export interface checkboxEvent extends Event {
	target: checkboxEventTarget;
}

export interface emmitChangeFavObject {
	checkbox: boolean;
	id: number;
}

export interface viewModel {
	updatedate: boolean,
	winddirection: boolean,
	windspeed: boolean,
	weathericon: boolean,
	citieslimit?: number,
	tempkey?: string

}


export interface citiesReducer {
    cityDetails?: cityDetails[];
    error?: Response;
}
