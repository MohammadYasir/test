import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../task';
@Component({
  selector: 'app-taskitem',
  templateUrl: './taskitem.component.html',
  styleUrls: ['./taskitem.component.css']
})
export class TaskitemComponent implements OnInit {

  @Input() task : Task;
  @Output() delete = new EventEmitter();
  @Output() complete = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onDelete(){
    this.delete.emit(this.task);
  }

  onCompleted() {
    this.complete.emit(this.task);
  }
}
