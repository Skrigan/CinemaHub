import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {SearchParams} from "../pages/films/films.component";
import {Movie} from "../types/Movie";
import {PersonById} from "../types/PersonById";
import {MovieById} from "../types/MovieById";
import {forkJoin} from "rxjs";
import {Premiere} from "../types/Premiere";

type PremiereParams = {
  year: number,
  month: string
}

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

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) {
  }

  getMovies(searchParams: SearchParams) {
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

    return this.http.get<{docs: Movie[], total: number, limit: number, page: number, pages: number}>(url, {
      headers,
      params,
    })
  }

  getMovieById(id: number) {
    const url = `https://api.kinopoisk.dev/v1.4/movie/${id}`;
    const headers = {
      "X-API-KEY": "ZFDKM2M-ZK5MR14-QZEWNKN-5ES2KGB"
    };

    return this.http.get<MovieById>(url, {
      headers
    })
  }

  getPersonById(id: number) {
    const url = `https://kinopoiskapiunofficial.tech/api/v1/staff/${id}`;
    const headers = {
      "X-API-KEY": "7306cdbf-559b-4d3f-a864-4cead1b042af"
    };
    return this.http.get<PersonById>(url, {
      headers
    })
  }

  getPremieres() {
    const url = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres';
    const headers = {
      "X-API-KEY": "e4ef3242-e2cc-4ea4-933e-d4f1b854cafd"
    };

    const date = new Date();
    const currentMonthParams: PremiereParams = {
      year: date.getFullYear(),
      month: monthes[date.getMonth()],
    }
    const nextMonthParams: PremiereParams =
        currentMonthParams.month === 'DECEMBER' ? {
          year: date.getFullYear() + 1,
          month: monthes[0],
        } : {
          year: date.getFullYear(),
          month: monthes[date.getMonth() + 1],
        }

    return forkJoin({
      currentMonthPremiere: this.http.get<{items: Premiere[], total: number}>(url, {
        headers,
        params: currentMonthParams
      }),
      nextMonthPremiere: this.http.get<{items: Premiere[], total: number}>(url, {
        headers,
        params: nextMonthParams
      }),
    })
  }
}
