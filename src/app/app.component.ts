import { Component, OnInit } from '@angular/core';
import { MovieService } from './services/movie.service';

interface Movie {
  title: string;
  releaseYear: number;
  posterImageUrl: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  movies: Movie[] = [];
  searchQuery: string = '';

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getMovies().subscribe((data: Movie[]) => {
      this.movies = data;
    });
  }

  searchMovies() {
    if (this.searchQuery) {
      this.movies = this.movies.filter(movie =>
        movie.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.movieService.getMovies().subscribe((data: Movie[]) => {
        this.movies = data;
      });
    }
  }
}
