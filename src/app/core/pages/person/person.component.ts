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
  deathRu?: string;

  spousesF: any[] = [];
  spousesM: any[] = [];

  constructor(private movieService: MovieService,
              private router: Router,
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

  onMovieChoice(event: MouseEvent) {
    const target = <HTMLElement>event.target;
    const movieCard = target.closest('.films__card');

    if (movieCard !== null) {
      const id = movieCard.getAttribute('data-id')!;
      this.router.navigate(['/movie', id]);
    }
  }

  getPersonById(id: number) {
    this.subscriptions.push(
      this.movieService.getPersonById(id).subscribe((person) => {
        this.person = person;
        console.log(person);

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

        if (this.person.death) {
          const death = new Date(this.person.death);
          this.deathRu = `${death.getDate()} ${ruMonth[death.getMonth()]}, ${death.getFullYear()}`;
        }
        this.person.spouses.sort((a: any, b: any) => {
          if (a.divorced && !b.divorced) {
            return -1;
          } else if (!a.divorced && b.divorced) {
            return 1;
          } else {
            return 0;
          }
        })
        this.person.spouses.forEach((spouce: any) => {
          if (spouce.children) {
            spouce.childrenStr = this.getNumberOfChildren(spouce.children)
          }
          if (spouce.sex === 'MALE') {
            this.spousesM.push(spouce);
          } else {
            this.spousesF.push(spouce);
          }
        })
      })
    )
  }

  getNumberOfChildren(childNum: number) {
    const lastChildNum = childNum % 10;
    if (childNum >= 10 && childNum <= 20) {
      return `${childNum} детей`
    } else if(lastChildNum === 1) {
      return `${childNum} ребёнок`;
    } else if(lastChildNum >= 2 && lastChildNum <= 4) {
      return `${childNum} ребёнка`;
    } else if(lastChildNum >= 5 && lastChildNum <= 9 || lastChildNum === 0) {
      return `${childNum} детей`;
    } else {
      return undefined;
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    })
  }
}
