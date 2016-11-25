import { Forecast } from "./interfaces";

function renderer(data: Forecast) {
	let citiesForecast = data.list;
	let wrapper = document.querySelector(".cities-wrapper");
	let cityList = document.createElement("ul");
	let loader = document.querySelector(".loader");
	cityList.className = "city-list";
	citiesForecast.forEach(city => {
		let cityListItem = document.createElement("li");
		let cityListItemName = document.createElement("div");
		let cityListItemTemp = document.createElement("div");
		let cityListItemTempMin = document.createElement("div");
		let cityListItemTempAvg = document.createElement("div");
		let cityListItemTempMax = document.createElement("div");

		cityListItem.className = "city-list-item";

		cityListItemName.className = "city-list-item-name";
		cityListItemName.innerHTML = city.name;
		cityListItem.appendChild(cityListItemName);

		cityListItemTemp.className = "city-list-item-temp";

		cityListItemTempMin.className = "city-list-item-temp-min";
		cityListItemTempMin.innerHTML = "Min. temp: " + checkSign(city.main.temp_min);
		cityListItemTemp.appendChild(cityListItemTempMin);

		cityListItemTempAvg.className = "city-list-item-temp-avg";
		cityListItemTempAvg.innerHTML = "Avg. temp: " + checkSign(city.main.temp);
		cityListItemTemp.appendChild(cityListItemTempAvg);

		cityListItemTempMax.className = "city-list-item-temp-max";
		cityListItemTempMax.innerHTML = "Max. temp: " + checkSign(city.main.temp_max);
		cityListItemTemp.appendChild(cityListItemTempMax);

		cityListItem.appendChild(cityListItemTemp);

		cityList.appendChild(cityListItem);
	});
	loader.remove();
	wrapper.appendChild(cityList);
}

function checkSign(value: number):string {
	let strValue = value.toString()
	value > 0 ? strValue = "+" + strValue : strValue = "-" + strValue; 
	return strValue;
}

export { renderer }