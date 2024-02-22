import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpService} from "../../../core/services/http.service";
import {ActivatedRoute, Params} from "@angular/router";
import {ModalService} from "../../../core/services/modal.service";
import {MovieById} from "../../../shared/types/MovieById";
import {Person} from "../../../shared/types/Person";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss'
})
export class MovieComponent implements OnInit{
  @ViewChild('backdrop') backdrop!: ElementRef;
  @ViewChild('modal') modal!: ElementRef;

  movie!: MovieById;
  directors: Person[] = [];
  actors: Person[] = [];
  movieType!: string;
  genre: string = '';

  seasonsNumber?: string;

  isImgLoaded = false;
  constructor(private movieService: HttpService,
              private route: ActivatedRoute,
              private modalService: ModalService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if (params.hasOwnProperty('id')) {
        this.getMovieById(params['id']);
      }
    })
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
    this.movieService.getMovieById(id).subscribe((movie) => {
        this.movie = movie;

        this.seasonsNumber = this.getNumberOfSeasons(this.movie?.seasonsInfo?.length);

        const persons = this.movie.persons;
        this.actors = persons.filter((person) => {
          return person.enProfession === 'actor';
        });

        this.directors = persons.filter((person) => {
          return person.enProfession === 'director';
        });

        this.movieType = this.getMovieType(this.movie.typeNumber);
        this.getCorrectGenre(this.movieType);
      }
    )
  }

  getMovieType(typeNumber: number) {
    return ['фильм', 'сериал', 'мультфильм', 'аниме', 'мультфильм'][typeNumber - 1];
  }

  getTrailer() {
    this.modalService.setVideoLink(this.movie?.videos?.trailers[0]?.url);
  }

  getVoidBoostLink() {
    const firstEpisodeParam = this.movie.isSeries ? '?s=1&e=1' : '';
    this.modalService.setVideoLink(`https://voidboost.net/embed/${this.movie.id}${firstEpisodeParam}`);
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
}
