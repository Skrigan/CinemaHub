import {Component} from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {Subscription} from "rxjs";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {getMovieType} from "../../utils";

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

  isImgLoaded = false;
  constructor(private movieService: MovieService, private route: ActivatedRoute, private router: Router) {
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
