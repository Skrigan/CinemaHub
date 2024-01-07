import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { SliderComponent } from './core/components/slider/slider.component';
import {NgOptimizedImage} from "@angular/common";
import { MovieCardComponent } from './core/components/movie-card/movie-card.component';
import { ReleaseCardComponent } from './core/components/release-card/release-card.component';
import { MainComponent } from './core/pages/main/main.component';
import { FilmsComponent } from './core/pages/films/films.component';
import { SelectorComponent } from './core/components/selector/selector.component';
import { PaginatorComponent } from './core/components/paginator/paginator.component';
import { MovieComponent } from './core/pages/movie/movie.component';
import { MinutesToHoursPipe } from './core/pipes/minutes-to-hours.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    MovieCardComponent,
    ReleaseCardComponent,
    MainComponent,
    FilmsComponent,
    SelectorComponent,
    PaginatorComponent,
    MovieComponent,
    MinutesToHoursPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
