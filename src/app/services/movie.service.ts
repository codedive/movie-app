import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Movie {
  title: string;
  releaseYear: number;
  posterImageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiUrl = 'https://movie-ffhpachggdbqfre0.canadacentral-01.azurewebsites.net/api/movies';

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl);
  }
}
