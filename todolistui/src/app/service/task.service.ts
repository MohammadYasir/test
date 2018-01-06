import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../task';

@Injectable()
export class TaskService {

  constructor(private http: HttpClient) {}

  get(){
    return this.http.get<Task[]>('http://localhost:8080/api/tasks');
  }


  add(task) {
    return this.http.post<Task>('http://localhost:8080/api/tasks', task);
  }

  delete(task) {
    return this.http.delete(`http://localhost:8080/api/tasks/${task.id}`);
  }

  markCompleted(task) {
    task.status = "COMPLETED";
    return this.http.put(`http://localhost:8080/api/tasks/${task.id}`, task);
  }

}
