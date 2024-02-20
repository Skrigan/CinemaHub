import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: "full",
  },
  {
    path: 'main',
    loadChildren: () => import("./main/main.module").then((m) => m.MainModule),
  },
  {
    path: 'movie/:id',
    loadChildren: () => import("./movie/movie.module").then((m) => m.MovieModule),
  },
  {
    path: 'films',
    loadChildren: () => import("./films/films.module").then((m) => m.FilmsModule),
  },
  {
    path: 'series',
    loadChildren: () => import("./films/films.module").then((m) => m.FilmsModule),
  },
  {
    path: 'cartoons',
    loadChildren: () => import("./films/films.module").then((m) => m.FilmsModule),
  },
  {
    path: 'anime',
    loadChildren: () => import("./films/films.module").then((m) => m.FilmsModule),
  },
  {
    path: 'person/:id',
    loadChildren: () => import("./person/person.module").then((m) => m.PersonModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
