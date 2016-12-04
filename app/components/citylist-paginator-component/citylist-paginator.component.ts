import { Component, Input } from '@angular/core';

import { cityDetails } from '../../interfaces/interfaces';

@Component({
    selector: 'weather-paginator',
    templateUrl: './citylist-paginator.component.html',
    styleUrls: ['./citylist-paginator.component.less']

})

export class WeatherCityPaginatorComponent {
    @Input()
    cityDetails: cityDetails;

    setPage(pageNum: number) {
        console.log(pageNum);

        // let pageTarget = event.target as HTMLElement;
        // let pageNumTarget: number = +pageTarget.innerHTML - 1;
        // let pages = document.querySelectorAll(".city-list-page");
        // let paginatorItems = document.querySelectorAll(".page");

        // for (let i = 0; i < pages.length; i++) {
        //     pages[i].className = "city-list-page";
        //     paginatorItems[i].className = "page";
        // }

        // pages[pageNumTarget].className += " active-page";
        // paginatorItems[pageNumTarget].className += " active-page";
    }
}
