import { Component } from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {MovieService} from "../../services/movie.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss'
})
export class PersonComponent {
  subscriptions: Subscription[] = [];
  person: any;

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
      this.movieService.getPersonById(id).subscribe((person: any) => {
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
