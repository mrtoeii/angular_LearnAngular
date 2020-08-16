import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { TodoService, ToDo } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-http-client';
  mUsername = ''
  mPassword = ''
  mDataArray: any[] = []
  mToDoArray: ToDo[] = []
  constructor(
    private http: HttpClient,
    private todoService: TodoService
  ){
    http.get<any>('http://jsonplaceholder.typicode.com/posts').subscribe(
      result=>{
        console.log("Get Posts");
        
        this.mDataArray = result
        console.log(this.mDataArray);
        
      }
    )
  }

  onClikcPost(){
    document.getElementById('result_span').innerHTML = 'Loading'
    const body = {username: this.mUsername,password: this.mPassword}
    this.http.post('http://jsonplaceholder.typicode.com/posts', body).subscribe(
      result=>{
        document.getElementById('result_span').innerHTML = JSON.stringify(result)
      }
    )
  }

  onClickWithExpectedError(){
    document.getElementById("error_span").innerHTML = "Loading";
    this.http.get("http://jsonplaceholder.typicode.com/posts").subscribe(result => {
      // nothing expected to see coz I plan there will be an error
      console.log(result);
    }, (err:HttpErrorResponse)=>{
      document.getElementById("error_span").innerHTML = err.message;
      console.log(err.error);
          console.log(err.name);
          console.log(err.message);
          console.log(err.status);
    });

  }

  onClickWithTodoService(){
    this.todoService.listTodo().subscribe(
      result=>{
        console.log(result);
        this.mToDoArray = result
        
      }
    )
  }
}
