import {Injectable, OnInit} from '@angular/core';
import {forkJoin, ReplaySubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Premiere} from "../types/Premiere";
import {HttpService} from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class PremiereService {
  premieres$: ReplaySubject<Premiere[]> = new ReplaySubject();

  constructor(private httpService: HttpService) {
    this.httpService.getPremieres().subscribe((value) => {
      this.premieres$.next([...value.currentMonthPremiere.items, ...value.nextMonthPremiere.items]);
    });
  }
}
