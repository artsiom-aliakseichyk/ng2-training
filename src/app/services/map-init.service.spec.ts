/// <reference path="../../../node_modules/@types/googlemaps/index.d.ts" />
import { GoogleMapService } from './map-init.service';
import { Coords } from '../interfaces/interfaces';
describe('Google Map Service', () => {
	let coords: Coords = {
		longitude: 1,
		latitude: 2
	}
	let mapService: GoogleMapService;
	let google = {
        maps: {
            Map: {
                
            }
        }
    }
	beforeEach(() => {
        mapService = new GoogleMapService();
    });

    it('should define service', () => {
    	expect(mapService).toBeDefined();
    });

    // it('should create google map without coords', () => {
    //     spyOn(google.maps, 'Map');
    // 	mapService.init();
    // })
})