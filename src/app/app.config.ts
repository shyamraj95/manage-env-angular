import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { IAppConfigService } from './iapp-config.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(),
  { provide: APP_INITIALIZER, useFactory: initializeApp, deps: [IAppConfigService], multi: true }
  ]
};


export function initializeApp(config: IAppConfigService) {
  return (): Promise<any> => {
    return config.updateAppConfig();
  }
}

