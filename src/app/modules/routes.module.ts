import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { WeatherMainComponent } from '../components/weather-main-component/weather-main.component';
import { NotFoundComponent } from "../components/404-component/404.component";
import { SelectivePreloadingStrategy } from "./selective-preloading-strategy";
import { WeatherDetailsComponent } from '../components/weather-details-component/weather-details.component';
import { WeatherDetailsResolve } from './weather-details.resolver';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'weather',
		pathMatch: 'full'
		
	},
	{
		path: 'weather',
		component: WeatherMainComponent,
	},
	{
		path: 'weather/:id',
		component: WeatherDetailsComponent,
		resolve: {
      		cityWeatherDetails: WeatherDetailsResolve
    	}
	},
	{
		path: 'map',
		loadChildren: '../map-module/map.module#MapModule'
	},
	{
        path: '**',
        component: NotFoundComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes, {
                preloadingStrategy: SelectivePreloadingStrategy
            }
        )
    ],
    providers: [SelectivePreloadingStrategy],
    exports: [RouterModule]
})

export class RoutingModule {
}