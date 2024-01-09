import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { MainComponent } from "./core/pages/main/main.component";
import { FilmsComponent } from "./core/pages/films/films.component";
import {MovieComponent} from "./core/pages/movie/movie.component";

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
    path: 'movie/:id',
    component: MovieComponent,
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
    path: 'anime',
    component: FilmsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
