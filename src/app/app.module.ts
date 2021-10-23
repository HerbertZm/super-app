import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ServiceMiniCardComponent } from './service-mini-card/service-mini-card.component';
import { ServiceFullCardComponent } from './service-full-card/service-full-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiceMiniCardComponent,
    ServiceFullCardComponent,
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
