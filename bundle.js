/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./public";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var getCurrentLocation_1 = __webpack_require__(2);
	var openweather_1 = __webpack_require__(3);
	window.onload = function () {
	    console.log("HELLO WORLD!");
	    var location = new getCurrentLocation_1.getCurrentLocation();
	    var weather = new openweather_1.openWeather();
	    var coordinates = location.getPosition();
	    weather.getWeather({
	        longitude: 13,
	        latitude: 10
	    });
	    console.log();
	};


/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	var getCurrentLocation = (function () {
	    function getCurrentLocation() {
	    }
	    getCurrentLocation.prototype.retrievePosition = function (coords) {
	        return {
	            lat: coords.latitude,
	            lon: coords.longitude
	        };
	    };
	    getCurrentLocation.prototype.getPosition = function () {
	        var _this = this;
	        navigator.geolocation.getCurrentPosition(function (position) {
	            console.log(position.coords);
	            return _this.retrievePosition(position.coords);
	        }, function () {
	            console.log("enable geolocation");
	        }, {
	            enableHighAccuracy: true
	        });
	    };
	    return getCurrentLocation;
	}());
	exports.getCurrentLocation = getCurrentLocation;


/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	var openWeather = (function () {
	    function openWeather() {
	        this.API_KEY = '096952b48ceb2e1447ba8f5d55f8bda8';
	    }
	    openWeather.prototype.getWeather = function (coords) {
	        fetch('http://api.openweathermap.org/data/2.5/find?lat='
	            + 53.9 + '&lon='
	            + 27.4 + '&cnt=50&APPID=' + this.API_KEY)
	            .then(function (response) { return response.json(); })
	            .then(function (data) { return console.log(data); })
	            .catch(function (error) { return console.log(error); });
	    };
	    return openWeather;
	}());
	exports.openWeather = openWeather;


/***/ }
/******/ ]);