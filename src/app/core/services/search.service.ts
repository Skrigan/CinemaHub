import {Injectable} from '@angular/core';
import {ReplaySubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Movie2} from "../interfaces/Movie2";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private $searchResults: ReplaySubject<Movie2[] | null> = new ReplaySubject();
  $isFocused: ReplaySubject<boolean> = new ReplaySubject();
  constructor(private http: HttpClient) { }

  getSearchResults() {
    return this.$searchResults;
  }

  setSearchResults(searchString: string) {
    const url = 'https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword'
    const headers = {
      "X-API-KEY": "7306cdbf-559b-4d3f-a864-4cead1b042af"
    };
    const params = {
      keyword: searchString
    }
    this.http.get<{films: Movie2[], keyword: string, pagesCount: number, searchFilmsCountResult: number}>(url, {
      headers,
      params,
    }).subscribe((searchResults) => {
      this.$searchResults.next(searchResults.films);
    })
  }

  removeSearchResults() {
    this.$searchResults.next(null);
  }
}
