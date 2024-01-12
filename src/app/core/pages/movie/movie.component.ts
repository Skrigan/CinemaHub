import {Component} from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {Subscription} from "rxjs";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {getMovieType} from "../../utils";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss'
})
export class MovieComponent {
  movie: any;
  subscriptions: Subscription[] = [];
  directors!: any[];
  actors!: any[];
  movieType!: string;

  // trailer?: SafeResourceUrl;
  // voidBoostLink?: SafeResourceUrl;

  trailerOrMovie?: SafeResourceUrl;

  isImgLoaded = false;
  constructor(private movieService: MovieService,
              private route: ActivatedRoute,
              private router: Router,
              public sanitizer: DomSanitizer) {
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

  getMovieById(id: number) {
    this.subscriptions.push(
      this.movieService.getMovieById(id).subscribe((movie) => {
        this.movie = movie;
        console.log(this.movie);

        const persons = this.movie.persons;
        this.actors = persons.filter((person: any) => {
          return person.enProfession === 'actor';
        });

        this.directors = persons.filter((person: any) => {
          return person.enProfession === 'director';
        });

        this.movieType = getMovieType(this.movie.typeNumber);
      }
    ))
  }

  getTrailer() {
    const trailer = this.movie?.videos?.trailers[0]?.url;
    if (trailer) {
      this.trailerOrMovie = this.sanitizer.bypassSecurityTrustResourceUrl(`${trailer}?autoplay=1`);
    }
  }

  removeTrailerOrMovie() {
    this.trailerOrMovie = undefined;
  }

  getVoidBoostLink() {
    //для нужных typeNums: ?s=1&e=1
    //добавить в конце
    this.trailerOrMovie = this.sanitizer
      .bypassSecurityTrustResourceUrl(`https://voidboost.tv/embed/${this.movie.id}`);
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

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    })
  }
}
