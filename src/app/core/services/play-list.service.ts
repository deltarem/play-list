
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, filter } from 'rxjs/operators';
import { FeaturedPlaylists } from '../modules/featured-playlists';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PlayListService {

  constructor(private http: HttpClient) { }

  getFeaturedPlaylists(): Observable<any> {
    return this.http.get<any>(environment.baseUrl)
      .pipe(
        catchError(this.handleError)
      );
  }



  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('A client-side or network error occurred:', error.error.message);
    } else {
      console.error(`Error code  : ${error.status}, ` + `error detail : ${error.error}`);
    }
    return throwError('Undefined error; please try again later.');
  }
}
