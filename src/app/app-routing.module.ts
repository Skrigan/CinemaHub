import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from "./core/pages/main/main.component";
import { FilmsComponent } from "./core/pages/films/films.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'films',
    component: FilmsComponent,
  },
  // {
  //   path: 'films:id',
  //   component: MainComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
