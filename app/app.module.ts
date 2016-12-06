import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
// Components
import { AppComponent } from './app.component';
import { WeatherHeaderComponent } from './components/header-component/header.component';
import { WeatherFooterComponent } from './components/footer-component/footer.component';
import { WeatherMainComponent } from './components/main-component/main.component';
import { WeatherMapComponent } from './components/map-component/map.component';
import { WeatherCityComponent } from './components/citylist-component/citylist.component';
import { WeatherCityPageComponent } from './components/citylist-page-component/citylist-page.component';
import { WeatherCityPaginatorComponent } from './components/citylist-paginator-component/citylist-paginator.component';
// Services
import { WeatherApiService } from './services/weather-api.service';
import GoogleMapService from './services/google-map-init.service';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        WeatherHeaderComponent,
        WeatherFooterComponent,
        WeatherMainComponent,
        WeatherMapComponent,
        WeatherCityComponent,
        WeatherCityPageComponent,
        WeatherCityPaginatorComponent
    ],
    providers: [
        WeatherApiService,
        GoogleMapService
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
