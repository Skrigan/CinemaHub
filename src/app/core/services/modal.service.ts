import {Injectable} from '@angular/core';
import {ReplaySubject} from "rxjs";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private $videoLink: ReplaySubject<SafeResourceUrl | null> = new ReplaySubject();
  constructor(public sanitizer: DomSanitizer) {
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
