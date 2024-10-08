import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import {provideRouter} from '@angular/router';
import {appRoutes} from './app/app.routes';
import {authInterceptor} from "./app/_services/auth.interceptor";
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';

import { QuillModule } from 'ngx-quill';

bootstrapApplication(AppComponent, {
  providers: [
        provideHttpClient(withInterceptors([authInterceptor])),
    provideRouter(appRoutes), provideAnimationsAsync(),
    QuillModule
  ],
}).catch(err => console.error(err));