import {Component, ElementRef, ViewChild} from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {Subscription} from "rxjs";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {getMovieType} from "../../utils";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss'
})
export class MovieComponent {
  @ViewChild('backdrop') backdrop!: ElementRef;
  @ViewChild('modal') modal!: ElementRef;

  movie: any;
  subscriptions: Subscription[] = [];
  directors!: any[];
  actors!: any[];
  movieType!: string;
  genre: string = '';

  // trailer?: SafeResourceUrl;
  // voidBoostLink?: SafeResourceUrl;

  trailerOrMovie?: SafeResourceUrl;
  seasonsNumber?: string;

  isImgLoaded = false;
  constructor(private movieService: MovieService,
              private route: ActivatedRoute,
              private router: Router,
              private modalService: ModalService) {
  }

  ngOnInit() {
    this.subscriptions.push(
      this.route.params.subscribe((params: Params) => {
        if (params.hasOwnProperty('id')) {
          this.getMovieById(params['id']);
        }
      })
    )
  }

  getCorrectGenre(movieType: string) {
    switch (movieType) {
      case 'фильм':
      case 'сериал':
        this.genre = this.movie.genres[0]['name'];
        break;
      case 'мультфильм':
        this.genre = this.movie.genres[1]['name'];
        break;
      case 'аниме':
        this.genre = this.movie.genres[2]['name'];
        break;
    }
  }

  getMovieById(id: number) {
    this.subscriptions.push(
      this.movieService.getMovieById(id).subscribe((movie) => {
        this.movie = movie;

        this.seasonsNumber = this.getNumberOfSeasons(this.movie?.seasonsInfo?.length);

        const persons = this.movie.persons;
        this.actors = persons.filter((person: any) => {
          return person.enProfession === 'actor';
        });

        this.directors = persons.filter((person: any) => {
          return person.enProfession === 'director';
        });

        this.movieType = getMovieType(this.movie.typeNumber);
        this.getCorrectGenre(this.movieType);
      }
    ))
  }

  showModal() {
    const pageOffset = window.pageYOffset;
    this.backdrop.nativeElement.style.top = `${pageOffset}px`;
    this.modal.nativeElement.style.top = `calc(50% + ${pageOffset}px)`;

    document.body.classList.add('body__backdropped');
    this.backdrop.nativeElement.classList.remove('backdrop_hidden');
    this.modal.nativeElement.classList.remove('modal_hidden');
  }

  closeModal() {
    document.body.classList.remove('body__backdropped');
    this.backdrop.nativeElement.classList.add('backdrop_hidden');
    this.modal.nativeElement.classList.add('modal_hidden');
  }

  getTrailer() {
    this.modalService.setVideoLink(this.movie?.videos?.trailers[0]?.url);
  }

  getVoidBoostLink() {
    const firstEpisodeParam = this.movie.isSeries ? '?s=1&e=1' : '';
    this.modalService.setVideoLink(`https://voidboost.tv/embed/${this.movie.id}${firstEpisodeParam}`);
  }

  getNumberOfSeasons(seasonsLength: number) {
    const lastSeasonsNum = seasonsLength % 10;
    if (seasonsLength >= 10 && seasonsLength <= 20) {
      return `${seasonsLength} сезонов`
    } else if(lastSeasonsNum === 1) {
      return `${seasonsLength} сезон`;
    } else if(lastSeasonsNum >= 2 && lastSeasonsNum <= 4) {
      return `${seasonsLength} сезона`;
    } else if(lastSeasonsNum >= 5 && lastSeasonsNum <= 9 || lastSeasonsNum === 0) {
      return `${seasonsLength} сезонов`;
    } else {
      return undefined;
    }
  }

  onMovieChoice(event: MouseEvent) {
    const target = <HTMLElement>event.target;
    const movieCard = target.closest('.films__card');

    if (movieCard !== null) {
      const id = movieCard.getAttribute('data-id')!;
      this.movie = undefined;
      this.router.navigate(['/movie', id]);
    }
  }

  onPersonChoice(event: MouseEvent) {
    const target = <HTMLElement>event.target;
    const personLi = target.closest('.content__li');

    if (personLi !== null) {
      const id = personLi.getAttribute('data-id')!;
      this.router.navigate(['/person', id]);
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    })
  }
}
