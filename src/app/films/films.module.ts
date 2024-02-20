import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsComponent } from './page/films/films.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import {SelectorComponent} from "./components/selector/selector.component";
import {SharedModule} from "../shared/shared.module";
import {FilmsRoutingModule} from "./films-routing.module";

@NgModule({
  declarations: [
    FilmsComponent,
    PaginatorComponent,
    SelectorComponent,
  ],
  imports: [
    CommonModule,
    FilmsRoutingModule,
    SharedModule,
  ]
})
export class FilmsModule { }
