import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {authorizationInterceptor} from "./interceptor/authorization.interceptor";
import {ApiModule, Configuration} from "./openapi-client";
import {provideAnimations} from "@angular/platform-browser/animations";

export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes),
      provideAnimations(),
      provideHttpClient(
        withInterceptors([
          authorizationInterceptor,
        ])
      ),
      importProvidersFrom(
        ApiModule.forRoot(() => {
          return new Configuration({
            basePath: 'https://product-manager.cyrotech.ch'
          })
        })
      )
    ]
  };

