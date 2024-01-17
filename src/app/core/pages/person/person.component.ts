import { Component } from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {MovieService} from "../../services/movie.service";
import {IPerson} from "../../interfaces/IPerson";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss'
})
export class PersonComponent {
  subscriptions: Subscription[] = [];
  person?: IPerson;
  filmsYearRange?: string;

  constructor(private movieService: MovieService,
              private route: ActivatedRoute) {
  }


  ngOnInit() {
    this.subscriptions.push(
      this.route.params.subscribe((params: Params) => {
        if (params.hasOwnProperty('id')) {
          this.getPersonById(params['id']);
        }
      })
    )
  }

  getPersonById(id: number) {
    this.subscriptions.push(
      this.movieService.getPersonById(id).subscribe((person) => {
        this.person = person;
        console.log(person);
      })
    )
  }


  ngOnDestroy() {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    })
  }
}
