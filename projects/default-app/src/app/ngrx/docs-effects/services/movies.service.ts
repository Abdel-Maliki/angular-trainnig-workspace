import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  inc = 0;

  constructor() {
  }


  getAll(): Observable<Movie[]> {
    return new Observable(subscriber => {
      setInterval(() => {
        subscriber.next([
          new Movie('Movie ' + this.inc),
          new Movie('Movie ' + this.inc),
          new Movie('Movie ' + this.inc),
          new Movie('Movie ' + this.inc),
        ]);
        this.inc++;
        if (this.inc === 10) {
          subscriber.error({message: 'error'});
        }
      }, 1000);
    });
  }
}

export class Movie {
  constructor(public name?) {
  }
}
