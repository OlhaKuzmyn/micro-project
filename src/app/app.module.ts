import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MainInterceptor} from "./main.interceptor";
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from "@angular/router";
import { HeaderComponent } from './app-components/header/header.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: MainInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
