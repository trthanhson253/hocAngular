import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './../models/task.class';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  public API_URL:string = 'http://localhost:3000/tasks';

  constructor(public http:HttpClient) { 
  }

  getAll():Observable<any>{
    return this.http.get(this.API_URL);
  }

  add(task:Task):Observable<any>{
    return this.http.post(this.API_URL,task);
  }

  update(task:Task):Observable<any>{
    return this.http.put(`${this.API_URL}/${task.id}`,task);
  }

  delete(id:number):Observable<any>{
    return this.http.delete(`${this.API_URL}/${id}`);
  }

}
