import { Component } from '@angular/core';
import { MatToolbar, MatCard, MatCardContent, MatNavList, MatButton, MatFormField, MatSelect} from '@angular/material';
import {FormGroup, FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  displayTasks = [];
  tasks = [];
  selectedTask = {};
  selectedStatus="ALL";
  form;
  constructor(private http: HttpClient) {}
  ngOnInit(){
    this.http.get<Task[]>('/api/tasks').subscribe(data => {
      console.log(data);
      this.tasks = data;
      this.displayTasks = data;
    });
    this.form = new FormGroup({
      title : new FormControl(),
      description : new FormControl(),
      status : new FormControl('PENDING')
    });
  }

  add(task){
    this.http.post('/api/tasks', task).subscribe(data => {
      this.tasks.push(data);
      this.statusValueChanged();
    });
  }

  delete(task){
    this.http.delete('/api/tasks/'+task.id).subscribe(data => {
      console.log("task deleted")
    });
    this.http.get<Task[]>('/api/tasks').subscribe(data => {
      this.tasks = data;
      this.statusValueChanged();
    });
  }

  statusValueChanged(){
    console.log("done")
    if(this.selectedStatus==='COMPLETED') {
      this.displayTasks = [];
      this.tasks.map((task)=>{
        if(task.status==='COMPLETED'){
          this.displayTasks.push(task);
        }
      });
    } else if(this.selectedStatus==='PENDING') {
      this.displayTasks = [];
      this.tasks.map((task)=>{
        if(task.status==='PENDING'){
          this.displayTasks.push(task);
        }
      });
    } else {
      this.displayTasks = [];
      this.tasks.map((task)=>{
        this.displayTasks.push(task);
      })
    }
  }

  markCompleted(task){
    task.status = "COMPLETED";
    this.http.put('/api/tasks/'+task.id, task).subscribe(data => {
      console.log("task updated")
    });
    this.http.get<Task[]>('/api/tasks').subscribe(data => {
      this.tasks = data;
      this.statusValueChanged();
    });
  }
}
interface Task {
  id: number,
  title: string,
  description: string,
  status:string
}

/*const TASKS = [
    {
        "id": 2,
        "title": "Task2",
        "description": "New Task2",
        "status": "PENDING"
    },
    {
        "id": 33,
        "title": "Task3",
        "description": "New Task 3",
        "status": "PENDING"
    },
    {
        "id": 34,
        "title": "Task3",
        "description": "New Task 3",
        "status": "PENDING"
    }
]*/
