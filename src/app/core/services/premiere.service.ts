import { Injectable } from '@angular/core';
import {forkJoin, ReplaySubject} from "rxjs";
import {HttpClient} from "@angular/common/http";

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
export class PremiereService {
  premieres$ = new ReplaySubject();

  constructor(private http: HttpClient) {
    this.getPremieres();
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
      currentMonthParams.month === 'DECEMBER' ?{
        year: date.getFullYear() + 1,
        month: monthes[0],
      } : {
        year: date.getFullYear(),
        month: monthes[date.getMonth()],
      }

    forkJoin({
      currentMonthPremiere: this.http.get<any>(url, {
        headers,
        params: currentMonthParams
      }),
      nextMonthPremiere: this.http.get<any>(url, {
        headers,
        params: nextMonthParams
      }),
    }).subscribe((value) => {
      this.premieres$.next(value);
    })
  }
}
