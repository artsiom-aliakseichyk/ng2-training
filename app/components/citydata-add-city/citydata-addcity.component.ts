import { Component } from "@angular/core";

@Component({
    selector: 'city-data-add',
    templateUrl: './citydata-addcity.component.html',
    styleUrls: ['./citydata-addcity.component.less']
})

export class CityDataAddComponent {
    city: Object = {};
    onSubmit(value: Object) {
        console.log(value);
    }
}
