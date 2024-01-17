import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {SearchParams} from "../pages/films/films.component";
import {BehaviorSubject, forkJoin, Observable, ReplaySubject, Subject} from "rxjs";
import {IMovie} from "../interfaces/IMovie";

enum monthes {
  JANUARY,
  FEBRUARY,
  MARCH,
  APRIL,
  MAY,
  JUNE,
  JULY,
  AUGUST,
  SEPTEMBER,
  OCTOBER,
  NOVEMBER,
  DECEMBER,
}
// const monthes =
// ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];

type ReleaseParams = {
  year: number,
  month: string
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  releases$ = new ReplaySubject();

  constructor(private http: HttpClient) {
    this.getReleases();
  }

  getMoviesData(searchParams: SearchParams) {
    const url = 'https://api.kinopoisk.dev/v1.4/movie';
    const headers = {
      "X-API-KEY": "ZFDKM2M-ZK5MR14-QZEWNKN-5ES2KGB"
    };
    const params = {
      'selectFields': ['id', 'name', 'countries', 'genres', 'year', 'votes', 'rating', 'poster'],
      'limit': 60,
      'sortType': -1,
      'votes.kp': '5000-100000000000',
      'page': '1',
    }

    for (let param in searchParams) {
      // @ts-ignore
      const value = searchParams[param];
      if (value !== null) {
        // @ts-ignore
        params[param] = value;
      }
    }

    return this.http.get<{docs: IMovie[], total: number, limit: number, page: number, pages: number}>(url, {
      headers,
      params,
    })
  }

  getMovieById(id: number) {
    const url = `https://api.kinopoisk.dev/v1.4/movie/${id}`;
    const headers = {
      "X-API-KEY": "ZFDKM2M-ZK5MR14-QZEWNKN-5ES2KGB"
    };

    return this.http.get<any>(url, {
      headers
    })
  }

  getPersonById(id: number) {
    const url = `https://kinopoiskapiunofficial.tech/api/v1/staff/${id}`;
    const headers = {
      "X-API-KEY": "e4ef3242-e2cc-4ea4-933e-d4f1b854cafd"
    };
    return this.http.get<any>(url, {
      headers
    })
  }

  getReleases() {
    const url = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres';
    const headers = {
      "X-API-KEY": "e4ef3242-e2cc-4ea4-933e-d4f1b854cafd"
    };

    const date = new Date();
    const currentMonthParams: ReleaseParams = {
      year: date.getFullYear(),
      month: monthes[date.getMonth()],
    }
    const nextMonthParams: ReleaseParams =
      currentMonthParams.month === 'DECEMBER' ?{
        year: date.getFullYear() + 1,
        month: monthes[0],
      } : {
        year: date.getFullYear(),
        month: monthes[date.getMonth()],
      }

    forkJoin({
      currentMonthReleases: this.http.get<any>(url, {
        headers,
        params: currentMonthParams
      }),
      nextMonthReleases: this.http.get<any>(url, {
        headers,
        params: nextMonthParams
      }),
    }).subscribe((value) => {
      this.releases$.next(value);
    })
  }
}
