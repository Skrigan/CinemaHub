import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {HttpService} from "../../../core/services/http.service";
import {PersonById, PersonByIdFilm, PersonByIdSpouse} from "../../../shared/types/PersonById";
import {RuMonth} from "../../../shared/enums/RuMonth";

type SpouseView = {childrenStr: string} & PersonByIdSpouse;
type FilmsView = {poster: {previewUrl: string}, rating: {kp: string | null}, name: string} & PersonByIdFilm;

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss'
})
export class PersonComponent implements OnInit{
  person?: PersonById;
  films: FilmsView[] = [];
  totalFilmsLength?: number

  birthdayRu?: string;
  deathRu?: string;

  spousesF: SpouseView[] = [];
  spousesM: SpouseView[] = [];

  constructor(private movieService: HttpService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if (params.hasOwnProperty('id')) {
        this.getPersonById(params['id']);
      }
    })
  }

  getPersonById(id: number) {
    this.movieService.getPersonById(id).subscribe((person) => {
      this.person = person;

      let filmNameEn = '';
      person.films = person.films.filter((film) => {
        const isClone= film.nameEn === filmNameEn;
        filmNameEn = film.nameEn!;
        return !isClone;
      })

      this.totalFilmsLength = person.films.length;

      person.films = person.films.filter((film) => {
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

      person.films.forEach((film) => {
        const viewPart = {
          poster: {
            previewUrl: `https://st.kp.yandex.net/images/film_iphone/iphone360_${film.filmId}.jpg`
          },
          rating: {
            kp: film.rating
          },
          name: film.nameRu ? film.nameRu : film.nameEn!
        }

        this.films.push(Object.assign(viewPart, film));
      })

      if (this.person.growth) {
        this.person.growth /= 100;
      }

      if (this.person.birthday) {
        const birthday = new Date(this.person.birthday);
        this.birthdayRu = `${birthday.getDate()} ${RuMonth[birthday.getMonth()]}, ${birthday.getFullYear()}`;
      }

      if (this.person.death) {
        const death = new Date(this.person.death);
        this.deathRu = `${death.getDate()} ${RuMonth[death.getMonth()]}, ${death.getFullYear()}`;
      }
      this.person.spouses.sort((a, b) => {
        if (a.divorced && !b.divorced) {
          return -1;
        } else if (!a.divorced && b.divorced) {
          return 1;
        } else {
          return 0;
        }
      })
      this.person.spouses.forEach((spouse) => {
        if (spouse.children) {
          const childrenStr = this.getNumberOfChildren(spouse.children);
          const spouseView: SpouseView = Object.assign(spouse, {childrenStr: childrenStr ? childrenStr : ''});
          if (spouse.sex === 'MALE') {
            this.spousesM.push(spouseView);
          } else {
            this.spousesF.push(spouseView);
          }
        }
      })
    })
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
}
