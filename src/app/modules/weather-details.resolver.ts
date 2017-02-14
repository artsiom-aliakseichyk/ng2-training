import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { WeatherApiService } from '../services/weather-api.service';
import { cityDetails } from '../interfaces/interfaces';
import { Observable } from 'rxjs';

@Injectable()
export class WeatherDetailsResolve implements Resolve<any> {
  
  constructor(private weatherService: WeatherApiService,
    private router: Router) {}
  
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    let id: number = route.params['id'];
    console.log("Resolve id: ", id);


    return this.weatherService.getCityWeatherData(id).map((cityDetails: cityDetails) => {
      if (cityDetails) {
        console.log(cityDetails);
        return cityDetails;
      } else {
        this.router.navigate(['/weather']);
        return false;
      }
    })
    }
}