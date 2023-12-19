import { NgModule } from '@angular/core';
import {RouteReuseStrategy, RouterModule, Routes} from '@angular/router';
import { MainComponent } from "./core/pages/main/main.component";
import { FilmsComponent } from "./core/pages/films/films.component";
import {CustomRouteReuseStrategy} from "./customRouteReuseStrategy";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: "full",
  },
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'films',
    component: FilmsComponent,
  },
  {
    path: 'series',
    component: FilmsComponent,
  },
  {
    path: 'cartoons',
    component: FilmsComponent,
  },
  {
    path: 'animated-series',
    component: FilmsComponent,
  },
  {
    path: 'anime',
    component: FilmsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // providers: [{
  //   provide: RouteReuseStrategy, useClass: CustomRouteReuseStrategy
  // }],
  exports: [RouterModule]
})
export class AppRoutingModule { }
