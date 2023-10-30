import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  public parseJson<T>(data: string): T | null {
    try {
      return JSON.parse(data) as T;
    } catch (e) {
      console.error('Cannot parse json');
      return null;
    }
  }
}
