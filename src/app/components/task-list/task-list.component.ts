import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Task } from './../../models/task.class';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  public task:Task;
  @Input('tasks') tasks:Task;
  @Output('setStatus') setStatus = new EventEmitter<Task>();

  constructor() { }

  ngOnInit() {
  }
}
