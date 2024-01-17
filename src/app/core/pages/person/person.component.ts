import { Component } from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {MovieService} from "../../services/movie.service";
import {IPerson} from "../../interfaces/IPerson";
import {ruMonth} from "../../data/ruMonthEnum";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss'
})
export class PersonComponent {
  subscriptions: Subscription[] = [];

  person?: IPerson;
  films?: any[];
  totalFilmsLength?: number

  birthdayRu?: string;

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

        let filmNameEn = '';
        this.films = person.films.filter((film) => {
          const isClone= film.nameEn === filmNameEn;
          filmNameEn = film.nameEn!;
          return !isClone;
        })

        this.totalFilmsLength = this.films.length;

        this.films = this.films.filter((film) => {
          if (!film.nameRu) {
            return false;
          }
          if (film.general) {
            return true
          }
          if (film.rating) {
            return parseInt(film.rating) >= 8;
          }
          return false
        });

        this.films.forEach((film) => {
          film.poster = {
            previewUrl: `https://st.kp.yandex.net/images/film_iphone/iphone360_${film.filmId}.jpg`
          };
          film.name = film.nameRu ? film.nameRu : film.nameEn;
          film.rating = {
            kp: film.rating
          }
        })

        if (this.person.growth) {
          this.person.growth /= 100;
        }

        if (this.person.birthday) {
          const birthday = new Date(this.person.birthday);
          this.birthdayRu = `${birthday.getDate()} ${ruMonth[birthday.getMonth()]}, ${birthday.getFullYear()}`;
        }
      })
    )
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    })
  }
}
