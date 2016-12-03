import { Forecast, Coords } from "./interfaces";

function renderer(data: Forecast, location: Coords) {
    let citiesForecast = data.list;
    let wrapper = document.querySelector(".cities-wrapper");
    let loader = document.querySelector(".loader");
    let markup: string = "";
    let paginatorMarkup: string = "";
    citiesForecast.forEach((city, index) => {
        if (index === 0 ) {
            markup += "<div class='city-list-page show'><ul class='city-list'>"
        }

        markup +=
           "<li class='city-list-item'>" +
                "<div class='city-list-item-name'>" + city.name + "</div>" +
                "<div class='city-list-item-temp'>" +
                    "<div class='city-list-item-temp-min'>Min.temp: " + checkSign(city.main.temp_min) + "</div>" +
                    "<div class='city-list-item-temp-avg'>Avg.temp: " + checkSign(city.main.temp) + "</div>" +
                    "<div class='city-list-item-temp-max'>Max.temp: " + checkSign(city.main.temp_max) + "</div>" +
                "</div>" +
            "</li>";

        if ((index !== 0 && (index + 1) % 25 === 0) || index === citiesForecast.length - 1) {
            if (index === citiesForecast.length - 1) {
                markup += "</ul></div>"
            }
            else {
                markup += "</ul></div><div class='city-list-page'><ul class='city-list'>"
            }
        }
    });
    paginatorMarkup +=
        "<div class='paginator-wrapper'>" +
            "<ul class='paginator-list'>";
    let i: number = 1;
    while (i <= Math.round(citiesForecast.length / 25)) {
        if (i === 1) {
            paginatorMarkup += "<li class='page active-page'>" + i + "</li>";
        }
        else {
            paginatorMarkup += "<li class='page'>" + i + "</li>";
        }
        i += 1;
    }
    paginatorMarkup += "</ul></div>";
    markup += paginatorMarkup;
    wrapper.innerHTML += markup;
    loader.remove();
    paginationInit();
    renderMap(location);
}

function checkSign(value: number): string {
    let strValue = value.toString()
    value > 0 ? strValue = "+" + strValue : strValue = " " + strValue;
    return strValue;
}

function renderMap(centerCoord: Coords) {
    let center = {
        lat: centerCoord.latitude,
        lng: centerCoord.longitude
    }
    let map = new google.maps.Map(document.querySelector('.googlemap-wrapper'), {
        zoom: 4,
        center: center
    });
}

function paginationInit() {
    let paginatorWrapper = document.querySelector(".paginator-list");
    paginatorWrapper.addEventListener("click", function(event) {
        let elTarget = event.target as HTMLElement;
        let pageToShowNum: number = +elTarget.innerHTML - 1;
        let paginationItems = document.querySelectorAll(".page");
        if (elTarget.className.indexOf("page") !== -1) {
            let pages = document.querySelectorAll(".city-list-page");
            for (let  i = 0; i < pages.length; i++) {
                if (i === pageToShowNum) {
                    pages[i].className = "city-list-page show";
                    paginationItems[i].className = "page active-page";
                }
                else {
                    pages[i].className = "city-list-page";
                    paginationItems[i].className = "page";
                }
            }
        }
    }, false)
}

export { renderer }