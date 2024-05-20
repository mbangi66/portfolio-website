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
  let currentCharIndex = 0;

  const animate = () => {
    if (currentCharIndex === word.length || currentCharIndex === 0) {
      return; // Animation complete
    }
    const nextChar = backwards ? word.charAt(word.length - currentCharIndex - 1) : word.charAt(currentCharIndex);
    // Update displayed text using DOM manipulation or a dedicated component state
    currentCharIndex += backwards ? -1 : 1;
    requestAnimationFrame(animate);
  };

  requestAnimationFrame(animate);
  return EMPTY; // Return EMPTY to prevent conflicts with other operators
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



