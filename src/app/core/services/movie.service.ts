import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {SearchParams} from "../pages/films/films.component";
import {BehaviorSubject, forkJoin, Observable, ReplaySubject, Subject} from "rxjs";
import {IMovie} from "../interfaces/IMovie";
import {IPerson} from "../interfaces/IPerson";

// const monthes =
// ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];



@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http: HttpClient) {
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
      "X-API-KEY": "7306cdbf-559b-4d3f-a864-4cead1b042af"
    };
    return this.http.get<IPerson>(url, {
      headers
    })
  }
}
