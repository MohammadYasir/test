import { Component, OnInit, Input } from '@angular/core';
import { MatCard, MatFormField, MatSelect, MatOption} from '@angular/material';
import { Task } from '../../task';
import { TaskService } from '../../service/task.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

  @Input() allTasks: Task[] = [];
  urlParamSubscription;
  status;
  selectedStatus;

  constructor(private taskService: TaskService,
    private router: Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.urlParamSubscription = this.activatedRoute.params.subscribe(params =>{
      let status = params['status'];
      if(status === 'ALL') {
        this.selectedStatus = 'ALL';
        this.getAllTasks();
      } else {
        this.selectedStatus = status;
        this.getTasksByStatus(status);
      }
    });
  }

  onTaskItemDelete(task){
    this.taskService.delete(task).subscribe(()=>{
      this.getAllTasks();
    })
  }

  onTaskItemComplete(task){
    this.taskService.markCompleted(task).subscribe(()=>{
      this.getAllTasks();
    })
  }

  getAllTasks(){
    this.taskService.get().subscribe(tasks=>{
      this.allTasks = tasks;
    });
  }

  getTasksByStatus(status) {
    this.taskService.get().subscribe(tasks=>{
      this.allTasks = [];
      for (let entry of tasks) {
        if(entry.status === status) {
          this.allTasks.push(entry);
        }
      }
    });
  }

  statusValueChanged(){
    console.log(this.selectedStatus)
    if(this.selectedStatus==='COMPLETED') {
      this.router.navigate(['/','COMPLETED']);
    } else if(this.selectedStatus==='PENDING') {
      this.router.navigate(['/','PENDING']);
    } else {
      this.router.navigate(['/','ALL']);
    }
  }
}
