import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from "./page/movie/movie.component";
import {MovieRoutingModule} from "./movie-routing.module";
import {MinutesToHoursPipe} from "./pipes/minutes-to-hours.pipe";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    MovieComponent,
    MinutesToHoursPipe,
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    SharedModule,
  ]
})
export class MovieModule { }
