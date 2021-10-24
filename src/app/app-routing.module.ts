import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AllServicesComponent } from './all-services/all-services.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RecentServicesComponent } from './recent-services/recent-services.component';
import { ServiceFullCardComponent } from './service-full-card/service-full-card.component';
import { ServiceMiniCardComponent } from './service-mini-card/service-mini-card.component';
import { SpendingComponent } from './spending/spending.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'test',
    component: SpendingComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
