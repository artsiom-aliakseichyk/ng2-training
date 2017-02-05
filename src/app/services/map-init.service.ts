/// <reference path="../../../node_modules/@types/googlemaps/index.d.ts" />
import { Injectable } from '@angular/core';
import { Coords } from '../interfaces/interfaces';
@Injectable()

export class GoogleMapService {
    public init(coords: Coords) {
        let map = new google.maps.Map(document.querySelector('.googlemap-wrapper'), {
            zoom: 4,
            center: {
                lat: coords.latitude,
                lng: coords.longitude
            }
        });
    }
}
