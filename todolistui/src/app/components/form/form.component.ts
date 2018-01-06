import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../../service/task.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form;

  constructor(private router: Router, private taskService: TaskService) { }

  ngOnInit() {
    this.form = new FormGroup({
      title : new FormControl(),
      description : new FormControl(),
      status : new FormControl('PENDING')
    });
  }

  add(task){
    this.taskService.add(task).subscribe(data => {
      this.router.navigate(['/',task.status])
    });
  }

}
