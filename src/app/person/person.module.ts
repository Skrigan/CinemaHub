import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PersonComponent} from "./page/person/person.component";
import {PersonRoutingModule} from "./person-routing.module";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
      PersonComponent,
  ],
  imports: [
    CommonModule,
    PersonRoutingModule,
    SharedModule,
  ]
})
export class PersonModule { }
