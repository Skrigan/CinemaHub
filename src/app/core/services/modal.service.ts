import { Injectable } from '@angular/core';
import {ReplaySubject} from "rxjs";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private $videoLink: ReplaySubject<SafeResourceUrl | null> = new ReplaySubject();
  private $searchResults: ReplaySubject<any> = new ReplaySubject();
  $isFocused: ReplaySubject<boolean> = new ReplaySubject();
  constructor(public sanitizer: DomSanitizer, private http: HttpClient) {
  }

  getSearchResults() {
    return this.$searchResults;
  }

  setSearchResults(searchString: string) {
    // this.$searchString.next(searchString);
    const url = 'https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword'
    const headers = {
      "X-API-KEY": "7306cdbf-559b-4d3f-a864-4cead1b042af"
    };
    const params = {
      keyword: searchString
    }
    this.http.get(url, {
      headers,
      params,
    }).subscribe((searchResults) => {
      this.$searchResults.next(searchResults);
    })
  }

  removeSearchResults() {
    this.$searchResults.next(null);
  }

  getVideoLink() {
    return this.$videoLink;
  }

  setVideoLink(link: string) {
    const safeLink = this.sanitizer.bypassSecurityTrustResourceUrl(link)
    this.$videoLink.next(safeLink);
  }

  removeVideoLink() {
    this.$videoLink.next(null);
  }
}
