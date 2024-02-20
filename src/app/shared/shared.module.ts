import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SliderComponent} from "./components/slider/slider.component";
import {MovieCardComponent} from "./components/movie-card/movie-card.component";
import {PremiereCardComponent} from "./components/premiere-card/premiere-card.component";
import {RateColorDirective} from "./directives/rate-color.directive";

@NgModule({
  declarations: [
    SliderComponent,
    MovieCardComponent,
    PremiereCardComponent,
    RateColorDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SliderComponent,
    MovieCardComponent,
    PremiereCardComponent,
    RateColorDirective,
  ]
})
export class SharedModule { }
