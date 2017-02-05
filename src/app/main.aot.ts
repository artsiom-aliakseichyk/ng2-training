import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from './modules/main.module.ngfactory';

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
