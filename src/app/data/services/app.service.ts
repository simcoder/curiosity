import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  baseUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos';
  apiKey = 'SJtLy0wNppl58fwcHcMcFKo9i4tkASgJlgLSmXkJ';
  constructor(private http: HttpClient) {}

  getImages(date, camera): Observable<any> {
    const url = camera
      ? `${this.baseUrl}?earth_date=${date}&camera=${camera}&api_key=${this.apiKey}`
      : `${this.baseUrl}?earth_date=${date}&api_key=${this.apiKey}`;
    const testUdl = `${this.baseUrl}?earth_date=2015-6-3&&api_key=${this.apiKey}`
    return this.http.get(url).pipe(catchError(this.errorHandl));
  }

  // Error handling
  errorHandl(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
