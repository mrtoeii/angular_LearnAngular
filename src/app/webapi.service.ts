import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class WebapiService {

  constructor(
    private http:HttpClient
  ) { }

  getDummy(): string{
    return 'Hello service';
  }

  feetData(): Promise<any>{
    return this.http.get<any[]>('http://jsonplaceholder.typicode.com/posts')
    .toPromise()
    .catch()
  }
}
