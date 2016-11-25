import { Coords } from './interfaces';

class getCurrentLocation {


	retrievePosition(coords: Coords) {
		return {
			lat: coords.latitude,
			lon: coords.longitude
		}
	}

	getPosition() {
		navigator.geolocation.getCurrentPosition((position) => {
			console.log(position.coords);
			return this.retrievePosition(position.coords);
		}, () => {
			console.log("enable geolocation")
		}, {
			enableHighAccuracy: true
		})
	}


}

export { getCurrentLocation };