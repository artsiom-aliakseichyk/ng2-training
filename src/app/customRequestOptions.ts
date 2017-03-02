import { Injectable } from '@angular/core';
import { Headers, BaseRequestOptions, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { CONSTS } from './config';

@Injectable()
export class projectRequestOptions extends BaseRequestOptions {
	constructor() {
        super();
    }

  	merge(options?:RequestOptionsArgs):RequestOptions {
  		if (options.url) {
  			options.url = CONSTS.WEATHER_URL + options.url;
  		}
  		if (options.headers) {
  			options.headers.append('Accept', 'somedata');
  		} else {
  			options.headers = new Headers({'Accept': 'somedata'});
  		}
 		return super.merge(options);
  	}
}