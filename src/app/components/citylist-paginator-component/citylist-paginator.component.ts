import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { cityDetails } from '../../interfaces/interfaces';

@Component({
    selector: 'weather-paginator',
    templateUrl: './citylist-paginator.layout.html',
    styleUrls: ['./citylist-paginator.style.css'],
    changeDetection: ChangeDetectionStrategy.OnPush

})

export class WeatherCityPaginatorComponent {
    pageToShow: number = 0;
    @Input()
    pagesArr: number[];

    @Output() changePage = new EventEmitter<number>();

    getPageNum(pageNum: number) {
        this.pageToShow = pageNum;
        this.changePage.emit(pageNum);
    }
}
