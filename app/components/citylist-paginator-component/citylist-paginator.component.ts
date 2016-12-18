import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { cityDetails } from '../../interfaces/interfaces';

@Component({
    selector: 'weather-paginator',
    templateUrl: './citylist-paginator.component.html',
    styleUrls: ['./citylist-paginator.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush

})

export class WeatherCityPaginatorComponent {
    pageToShow: number = 0;
    @Input()
    numOfPages: number[];

    @Output() changePage = new EventEmitter<number>();

    getPageNum(pageNum: number) {
        this.pageToShow = pageNum;
        this.changePage.emit(pageNum);
    }
}
