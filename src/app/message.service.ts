import { Injectable } from '@angular/core';
import { Observable, concat, from, of, timer } from 'rxjs';
import { concatMap, delay, ignoreElements, map, repeat, tap } from 'rxjs/operators';

interface TypeParams {
  word: string;
  speed: number;
  backwards?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor() {}

  private type({ word, speed, backwards = false }: TypeParams): Observable<string> {
    return new Observable<string>((observer) => {
      let currentIndex = backwards ? word.length : 0;
      const length = word.length;

      const intervalId = setInterval(() => {
        if ((!backwards && currentIndex > length) || (backwards && currentIndex < 0)) {
          clearInterval(intervalId);
          observer.complete();
        } else {
          const nextChar = backwards ? word.substring(0, currentIndex) : word.substring(0, currentIndex + 1);
          observer.next(nextChar);
          currentIndex += backwards ? -1 : 1;
        }
      }, speed);

      return () => clearInterval(intervalId);
    });
  }

  typeEffect(word: string): Observable<string> {
    return concat(
      this.type({ word, speed: 200 }),
      of('').pipe(delay(1500), ignoreElements()),
      this.type({ word, speed: 100, backwards: true }),
      of('').pipe(delay(500), ignoreElements())
    );
  }

  getTypewriterEffect(titles: string[]): Observable<string> {
    return from(titles).pipe(
      concatMap((title) => this.typeEffect(title)),
      concatMap((result) => of(result).pipe(delay(3000))),
      repeat({ delay: () => timer(3000) })
    );
  }
}
