import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators'



@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private http: HttpClient
  ) { }

  listTodo(): Observable<ToDo[]> {
    return this.http.get<any>('http://jsonplaceholder.typicode.com/todos')
      .pipe(
        map(res => {
          return res
            .filter(item => (item.id <= 3))
            .map(item => {
              return {
                title: item.title,
                done: item.completed
              }
            })
        })
      )
  }
}

export interface ToDo {
  title: string,
  done: boolean
}
