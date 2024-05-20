import { Injectable } from '@angular/core';
import { concat, from, interval, of, timer } from 'rxjs';
import {
  concatMap,
  delay,
  ignoreElements,
  map,
  repeat,
  repeatWhen,
  take,
} from 'rxjs/operators';

interface TypeParams {
  word: string;
  speed: number;
  backwards?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  

  constructor() { 
    
  }
    private type({ word, speed, backwards = false }: TypeParams) {
      return interval(speed).pipe(
        map((x) =>
          backwards ? word.substring(0, word.length - x) : word.substring(0, x + 1)
        ),
        take(word.length)
      );
    }
  
    typeEffect(word: string) {
      return concat(
        this.type({ word, speed: 200 }),
        of('').pipe(delay(1500), ignoreElements()),
        this.type({ word, speed: 300, backwards: true }),
        of('').pipe(delay(500), ignoreElements())
      );
    }
  
    getTypewriterEffect(titles: string[]) {
      return from(titles).pipe(
        concatMap((title) => this.typeEffect(title)),
        repeatWhen(() => timer(10000)) 
      );
    }    
  }



