import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ServiceMiniCardComponent } from './service-mini-card/service-mini-card.component';
import { ServiceFullCardComponent } from './service-full-card/service-full-card.component';
import { RecentServicesComponent } from './recent-services/recent-services.component';
import { AllServicesComponent } from './all-services/all-services.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SpendingComponent } from './spending/spending.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { StreamingServiceService } from './streaming-service.service';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';

@NgModule({
  declarations: [
    AppComponent,
    ServiceMiniCardComponent,
    ServiceFullCardComponent,
    RecentServicesComponent,
    AllServicesComponent,
    HomepageComponent,
    SpendingComponent,
    ServiceDetailsComponent,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    StreamingServiceService,
    {
      provide: APOLLO_OPTIONS,
      // eslint-disable-next-line arrow-body-style
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'https://vxnmjzwmfbbzdetqboglxbj7x4.appsync-api.us-east-1.amazonaws.com/graphql',
          }),
        };
      },
      deps: [HttpLink],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
