import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPlats } from '../list/list';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlatserviceService {
   private readonly Platapi = 'api/plats.json';

  constructor(private http: HttpClient) { }

  public getPlats():Observable<IPlats[]>{
   return this.http.get<IPlats[]>(this.Platapi).pipe(
    tap(plats => console.log('plats:', plats),
    catchError(this.handleError)
    )
   )
  }




  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
