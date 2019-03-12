import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MathService {

  constructor() { }

    subtract(a: number, b: number): number {
      return a + b;
    }

    multiply(a: number, b: number): Observable<any> {
    // you'll do this while doing TDD got this service
    // return this.http.post('you-multiplication-api-urla: a, b: b});

    // as of now, be happy with TDD for component, and return below :)
    return of(50);
    }


}
